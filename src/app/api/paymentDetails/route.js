import db from "../../utilites/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const HopeFuelID = searchParams.get("HopeFuelID");

  if (!HopeFuelID) {
    return NextResponse.json({ error: "Missing HopeFuelID" }, { status: 400 });
  }

  const query = `
  
SELECT 
    t.TransactionID
    t.HopeFuelID,
    w.WalletName,
    t.Month,
    t.Amount,
    t.NoteID, 
    t.TransactionDate,
    cu.CurrencyCode,
    c.ManyChatId,
    sr.Region,
    n.Note,
    c.Name,
    c.Email,
    c.ExpireDate,
    c.CardID,
    a.AwsId,
    a.AgentId AS PrimaryAwsId, - Primary agent's AWS ID,
    JSON_ARRAYAGG(ta_agent. AwsId) AS LoggedAwsIds, -- Aggregate AWS IDs from
TransactionAgent
    JSON_ARRAYAGG(s.ScreenShotLink) AS ScreenShotLinks,
    ts.TransactionStatus -- Retrieve the transaction status
FROM Transactions t
JOIN Customer c ON t.CustomerID = c.CustomerId
JOIN Wallet w ON t.WalletID = w.WalletId
JOIN Currency cu ON cu.CurrencyId = w.CurrencyId
LEFT JOIN SupportRegion sr ON t.SupportRegionID = sr.SupportRegionID
LEFT JOIN Note n ON t.NoteID = n.NoteID
LEFT JOIN ScreenShot s ON t.TransactionID = s.TransactionID
LEFT JOIN Agent a ON c.AgentId = a.AgentId
LEFT JOIN FormStatus fs ON t.TransactionID = fs.TransactionID
LEFT JOIN TransactionStatus ts ON fs.TransactionStatusID = ts.TransactionStatusID
LEFT JOIN TransactionAgent ta ON t.TransactionID= ta.TransactionID -- Join TransactionAgent table
LEFT JOIN Agent ta_agent ON ta.AgentID = ta_agent. AgentId -- Join to get AWS IDs for logged agents
WHERE t.HopeFuelID = ?
GROUP BY 
    t.TransactionID,
    t.HopeFuelID,
    w.WalletName,
    t.Month,
    t.Amount,
    t.NoteID,
    t.TransactionDate,
    cu.CurrencyCode,
    c.ManyChatId,
    sr.Region,
    n.Note,
    c.Name,
    c.Email,
    c.ExpireDate,
    c.CardID,
    a.AwsId,
    ts.TransactionStatus
  `;

  try {
    const result = await db(query, [HopeFuelID]);
    console.log(result[0]);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function PUT(request) {
  const { HopeFuelID, Note, Status } = await request.json();

  if (!HopeFuelID) {
    return NextResponse.json({ error: "Missing HopeFuelID" }, { status: 400 });
  }

  const query = `
    UPDATE Transactions
    SET Note = ?, Status = ?
    WHERE HopeFuelID = ?;
  `;

  try {
    await db(query, [Note, Status, HopeFuelID]);
    return NextResponse.json({ message: "Updated successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
