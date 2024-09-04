import { NextResponse } from "next/server";
import db from "../../utilites/db";

async function PaymentCheckQuery(status) {
  /* amount, month, screenshot, formfill person
   manychat id, wallet, currency, status, customer name and email. */
  const query = `SELECT 
    c.Name,           
    c.Email,                     
    t.Amount,           
    t.Month,                       
    GROUP_CONCAT(ss.ScreenShotLink SEPARATOR ';') AS ScreenShots,  -- Concatenates multiple screenshots
    c.ManyChatID,
    w.WalletName,
    cu.CurrencyCode,
    ag.AWSID
FROM 
    Transactions t
LEFT JOIN 
    Customer c ON t.CustomerID = c.CustomerID
LEFT JOIN 
    SupportRegion sr ON t.SupportRegionID = sr.SupportRegionID
LEFT JOIN 
    ScreenShot ss ON t.TransactionID = ss.TransactionID
LEFT JOIN 
    Wallet w ON t.WalletID = w.WalletID
LEFT JOIN 
    Currency cu ON w.CurrencyID = cu.CurrencyID
LEFT JOIN
    Agent ag ON t.AgentID = ag.AgentID
WHERE 
    t.PaymentCheck = ${status} OR t.PaymentCheck IS NULL
GROUP BY 
    t.TransactionID, c.Name, c.Email, t.Amount, t.Month, c.ManyChatID, w.WalletName, cu.CurrencyCode, ag.AWSID;
    

`;
  
  try {
    const result = await db(query,[status]);
    // console.log("Result: ", result);

    // turn every screenshot url into an array
    if(Array.isArray(result))
    {
      if(result.length > 0)
      {
        result.forEach(trans => {
          if(trans['ScreenShots'] == null)
          {
            trans['ScreenShots'] = []

          }
          else
          {
            trans['ScreenShots'] = trans['ScreenShots'].split(';')

          }
        })
      }
    }
    return result;
  } catch (error) {
    console.error("Error getting Dashboard Data:", error);
    return NextResponse.json(
      { error: "Failed to get Dashboard Data" },
      { status: 500 }
    );
  }
}
//Get Transactions Dashboard Data
export async function GET(req) {
  try {
    
    const url = new URL(req.url);
    const status = url.searchParams.get("paymentCheckStatus");
    const data = await PaymentCheckQuery(status);

    return NextResponse.json(data);
  } catch (error) {
    console.error("[Error] Cannot get dashboard data", error);
    return NextResponse.json(
      { error: "Cannot get dashboard data " },
      { status: 500 }
    );
  }
}
