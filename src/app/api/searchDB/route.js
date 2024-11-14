import { NextResponse } from "next/server";
import db from "../../utilites/db";

// Function to fetch paginated data
async function getPaginatedData(page) {
  const itemsPerPage = 10; // Number of items per page
  const offset = (page - 1) * itemsPerPage;

  // Validate offset and itemsPerPage
  if (isNaN(offset) || isNaN(itemsPerPage)) {
    throw new Error("Invalid pagination parameters");
  }

  const query = `
    SELECT 
      C.CurrencyCode,
      Cu.Name AS CustomerName,
      T.HopeFuelID,
      S.ScreenShotLink
    FROM 
      Transactions T
    JOIN 
      Customer Cu ON T.CustomerID = Cu.CustomerId
    JOIN 
      Wallet W ON T.WalletID = W.WalletId
    JOIN 
      Currency C ON W.CurrencyId = C.CurrencyId
    LEFT JOIN 
      ScreenShot S ON S.TransactionID = T.TransactionID
    WHERE 
      MONTH(T.TransactionDate) = MONTH(CURDATE())
      AND YEAR(T.TransactionDate) = YEAR(CURDATE())
    ORDER BY T.TransactionDate DESC
    LIMIT ?, ?;
  `;

  try {
    // Convert the offset and itemsPerPage to integers before passing
    const result = await db.execute(query, [offset, itemsPerPage]);
    return result[0]; // `db.execute()` returns an array with [rows, fields]
  } catch (error) {
    console.error("Error fetching paginated data:", error);
    throw new Error("Error fetching paginated data");
  }
}

// Function to search by HopeFuelID
async function searchByHopeFuelID(HopeFuelID) {
  const query = `
    SELECT 
      C.CurrencyCode,
      Cu.Name AS CustomerName,
      T.HopeFuelID,
      S.ScreenShotLink
    FROM 
      Transactions T
    JOIN 
      Customer Cu ON T.CustomerID = Cu.CustomerId
    JOIN 
      Wallet W ON T.WalletID = W.WalletId
    JOIN 
      Currency C ON W.CurrencyId = C.CurrencyId
    LEFT JOIN 
      ScreenShot S ON S.TransactionID = T.TransactionID
    WHERE 
      T.HopeFuelID = ?;
  `;

  try {
    const result = await db.execute(query, [HopeFuelID]);
    return result[0];
  } catch (error) {
    console.error("Error fetching search data:", error);
    throw new Error("Error fetching search data");
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const HopeFuelID = searchParams.get("HopeFuelID");
  const page = parseInt(searchParams.get("page"), 10) || 1;

  try {
    let data;
    if (HopeFuelID) {
      data = await searchByHopeFuelID(HopeFuelID);
    } else {
      data = await getPaginatedData(page);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
