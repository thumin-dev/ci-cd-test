import db from  "../../utilites/db";
import { NextResponse } from "next/server";

async function paymentDetails(HopeFuelID) {
  const query = `
        SELECT 
            w.WalletName,
            t.Month,
            n.Note,
            c.Name,
            c.Email,
            c.ExpireDate,
            c.CardID,
            s.ScreenShotLink
        FROM Transactions t
        JOIN Customer c ON t.CustomerID = c.CustomerId
        JOIN Wallet w ON t.WalletID = w.WalletId
        LEFT JOIN Note n ON t.NoteID = n.NoteID
        LEFT JOIN ScreenShot s ON t.TransactionID = s.TransactionID
        WHERE t.HopeFuelID = ?;
    `;

  try {
    const result = await db(query, [HopeFuelID]);
    return result;
  } catch (error) {
    console.error("Error fetching payment details:", error);
    throw new Error("Error fetching payment details");
  }
}

// Exporting the GET handler for Next.js App Router
export async function GET(request) {
  // Get the HopeFuelID query parameter from the request URL
  const { searchParams } = new URL(request.url);
  const HopeFuelID = searchParams.get("HopeFuelID");

  if (!HopeFuelID) {
    return NextResponse.json(
      { error: "Missing HopeFuelID query parameter" },
      { status: 400 }
    );
  }

  try {
    const data = await paymentDetails(HopeFuelID);
    return NextResponse.json(data);
  } catch (error) {
    console.error("[Error] Cannot get payment details:", error);
    return NextResponse.json(
      { error: "Cannot get payment details" },
      { status: 500 }
    );
  }
}
