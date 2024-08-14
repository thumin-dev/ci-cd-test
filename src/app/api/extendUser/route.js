export const dynamic = 'force-dynamic' // defaults to force-static
import db from "../../utilites/db";
import calculateExpireDate from '../../utilites/calculateExpireDate'

async function createScreenShot(screenShot,transactionsID) {
  console.log(transactionsID +  "  " + screenShot)

  let screenShotLink = await screenShot.map(async (item) => {
    const query = `insert into ScreenShot (TransactionID , ScreenShotLink) values ( ?, ?)`;
    
    const path = String(item.url).substring(0,String(item.url).indexOf('?'))
    const values = [transactionsID, path];

    try {
      const result = await db(query, values);
      console.log("result " + result)
      // console.log("Result: ", result);
      return result.insertId;
    } catch (error) {
      console.error("Error inserting ScreenShot:", error);
      return 
    }
  })
  return screenShotLink
  // return screenShotLink;
}

export async function POST(request) {

    //get customer ID based on the PRF no  
    

    const obj = await request.json()
    console.log(obj['customerId'])

    // if (!obj['screenShot']) {
    //   return NextResponse.json(
    //     { error: "You need to provide a screenshot" },
    //     { status: 400 }
    //   );
    // }


    let [result] = await db("Select ExpireDate from Customer where CustomerID=?", [obj['customerId']])
    console.log("Result is " + result)
    let nextExpireDate = null;
    if(result['ExpireDate'])
    {
      let currentExpireDate = new Date(result['ExpireDate'])
      nextExpireDate = calculateExpireDate(currentExpireDate, parseInt(obj['month']))
      console.log(nextExpireDate)
    }
    else
    {
      // return Response.error("Cannot find ExpireDate")
    }
  let now = Date.now();
    const rows = await db(
      "INSERT INTO Transactions (CustomerID, SupportRegionID, WalletID, Amount, AgentID, PaymentCheck, PaymentCheckTime, NoteID, TransactionDate, PaymentDenied, Month) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )",
      [obj['customerId'], obj['supportRegionId'], obj['walletId'], parseInt(obj['amount']), obj['agentId'], false, null, obj['noteId'], new Date(), false, obj['month']]
  );
  const transactionId = rows.insertId;

  // //update the expire date
  const value = [nextExpireDate, obj['customerId']]
  
  const sql = `UPDATE Customer SET ExpireDate = ? WHERE CustomerID = ? LIMIT 1`;
  try {
    let result = await db(sql, value);
    // console.log("Result: ", result);
    console.log("Transaction ID is " + transactionId)

    // const screenShotIds = await createScreenShot(obj['screenShot'], transactionId)
    return Response.json(result)
  } catch (error) {
    console.error("Error inserting customer:", error);
    return NextResponse.json(
      { error: "Failed to insert customer" },
      { status: 500 }
    );
  }



    
}