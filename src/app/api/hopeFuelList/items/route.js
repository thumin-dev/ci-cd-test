import { NextResponse } from "next/server";

import db from "../../../utilites/db";

async function retrieveCurrentMonthHopeFuelCards() {
  let query = `
   SELECT
            t.HopeFuelID,
            c.Name,
            c.Email,
            c.CardID,
            t.TransactionDate,
            t.Amount,
            curr.CurrencyCode,
            t.Month,
            GROUP_CONCAT(DISTINCT ss.ScreenShotLink SEPARATOR ', ') AS ScreenShot,
            c.ManyChatId ,
            GROUP_CONCAT(DISTINCT a.AwsId SEPARATOR ', ') AS 'FormFilledPerson',
            ts.TransactionStatus,
            n.Note AS Note
        FROM Transactions t
        LEFT JOIN Customer c ON t.CustomerID = c.CustomerId
        LEFT JOIN Wallet w ON t.WalletID = w.WalletId
        LEFT JOIN Currency curr ON w.CurrencyId = curr.CurrencyId
        LEFT JOIN Note n ON t.NoteID = n.NoteID
        LEFT JOIN ScreenShot ss ON t.TransactionID = ss.TransactionID
        LEFT JOIN TransactionAgent ta ON t.TransactionID = ta.TransactionID
        LEFT JOIN Agent a ON ta.AgentID = a.AgentId
        LEFT JOIN (
            SELECT 
                fs.TransactionID,
                fs.TransactionStatusID
            FROM FormStatus fs
            INNER JOIN (
                SELECT 
                    TransactionID,
                    MAX(FormStatusID) AS LatestFormStatusID
                FROM FormStatus
                GROUP BY TransactionID
            ) latest_fs ON fs.FormStatusID = latest_fs.LatestFormStatusID
        ) current_fs ON t.TransactionID = current_fs.TransactionID
        LEFT JOIN TransactionStatus ts ON current_fs.TransactionStatusID = ts.TransactionStatusID
        WHERE 
            t.TransactionDate >= DATE_FORMAT(NOW(), '%Y-%m-01') 
            AND t.TransactionDate < DATE_ADD(DATE_FORMAT(NOW(), '%Y-%m-01'), INTERVAL 1 MONTH)
        GROUP BY 
    t.HopeFuelID, 
    c.Name, 
    c.Email, 
    c.CardID, 
    t.TransactionDate, 
    t.Amount, 
    curr.CurrencyCode, 
    t.Month, 
    c.ManyChatId, 
    ts.TransactionStatus, 
    n.Note;
  `;
  try {
    const result = await db(query);
    return result;
    
  } catch (error) {
    console.log(error);
    throw new Error("Error in retrieving data from database");
    
  }
}
export async function GET(req) {
    try {
        const result = await retrieveCurrentMonthHopeFuelCards();
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

}