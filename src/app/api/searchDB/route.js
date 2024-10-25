import { NextResponse } from "next/server";
import db from "../../utilites/db";

async function DataForCard() {
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
JOIN 
	ScreenShot S ON S.TransactionID = T.TransactionID
WHERE
   MONTH(T.TransactionDate) = 10 
    AND YEAR(T.TransactionDate) = YEAR(CURDATE());

    `;
      try {
        const result = await db(query);
        console.log("Result: ", result);
        return result; 
      } catch (error) {
        console.error("Error selecting for card:", error);
        return NextResponse.json(
          { error: "Error selecting for card " },
          { status: 500 }
        );
      }
    
}

export async function GET() {
        
    try{ const data = await DataForCard();

    return NextResponse.json(data);
  } catch (error) {
    console.error("[Error] Cannot get card data", error);
    return NextResponse.json(
      { error: "Cannot get card data " },
      { status: 500 }
    );
  }

}
