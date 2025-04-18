import { NextResponse } from "next/server";
import db from "../../utilites/db";
import getScreenShotUrl from "../../utilites/getScreenShotUrl";
// Function to fetch paginated data
async function getPaginatedData(page, selectedWallet) {
  console.log("Selected Wallet from api: ", selectedWallet);
  const itemsPerPage = 100;
  const offset = (parseInt(page, 10) - 1) * itemsPerPage;

  // Ensure offset and itemsPerPage are integers
  console.log("Is Offset an integer?", Number.isInteger(offset));
  console.log("Is ItemsPerPage an integer?", Number.isInteger(itemsPerPage));

  if (isNaN(offset) || isNaN(itemsPerPage)) {
    console.error("Invalid pagination parameters");
    throw new Error("Invalid pagination parameters");
  }

  console.log("Fetching paginated data for page:", page);
  console.log("Offset:", offset, "Items Per Page:", itemsPerPage);

  //get current Month
  let currentMonth = new Date().getMonth() + 1;

  const query = `
  SELECT 
    C.CurrencyCode,
    Cu.Name AS CustomerName,
    T.HopeFuelID,
    JSON_ARRAYAGG(S.ScreenShotLink) AS ScreenShotLinks
FROM 
    Transactions T
JOIN 
    Customer Cu ON T.CustomerID = Cu.CustomerId
JOIN 
    Wallet W ON T.WalletID = W.WalletId
JOIN 

  FormStatus FS ON FS.TransactionID = T.TransactionID
JOIN 
    Currency C ON W.CurrencyId = C.CurrencyId
LEFT JOIN 
    ScreenShot S ON S.TransactionID = T.TransactionID
WHERE 
    FS.TransactionStatusID = ?
    AND MONTH(T.TransactionDate) = MONTH(CURDATE())
    AND YEAR(T.TransactionDate) = YEAR(CURDATE())
    AND W.WalletName = "${selectedWallet}"
GROUP BY 
    T.TransactionID, C.CurrencyCode, Cu.Name, T.HopeFuelID
ORDER BY 
    T.TransactionDate ASC
LIMIT ${offset},${itemsPerPage} ;
  `;

  console.log("Query:", query);

  try {
    const rows = await db(query, [1]);
    console.log("Fetched paginated data:", rows);
    return rows;
  } catch (error) {
    console.error("Error fetching paginated data:", error);
    throw new Error("Error fetching paginated data");
  }
}

// Function to search by HopeFuelID
async function searchByHopeFuelID(HopeFuelID) {
  console.log("Searching for HopeFuelID from api:", HopeFuelID);
  const query = `
    SELECT 
      C.CurrencyCode,
      Cu.Name AS CustomerName,
      T.HopeFuelID,
      JSON_ARRAYAGG(S.ScreenShotLink) AS ScreenShotLinks
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
      T.HopeFuelID = ?
      GROUP BY T.TransactionID
      ;
  `;

  try {
    const [rows] = await db(query, [HopeFuelID]);

    return rows ? [rows] : [];
  } catch (error) {
    console.error("Error fetching search data:", error);
    throw new Error("Error fetching search data");
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const HopeFuelID = searchParams.get("HopeFuelID");
  const page = parseInt(searchParams.get("page"), 10) || 1;
  const selectedWallet = searchParams.get("wallet") || " ";

  try {
    let data;
    if (HopeFuelID) {
      console.log(`Searching for HopeFuelID: ${HopeFuelID}`);
      data = await searchByHopeFuelID(HopeFuelID);
    } else {
      console.log(`Fetching paginated data for page: ${page}`);
      data = await getPaginatedData(page, selectedWallet);
    }

    if (!data || data.length === 0) {
      return NextResponse.json({ message: "No data found" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
