import { NextResponse } from "next/server";
import db from "../../../../utilites/db";

const minimumAmounts = [
    { currencyCode: "USD", amount: 20 },
    { currencyCode: "MMK", amount: 30000 },
    { currencyCode: "THB", amount: 300 },
];

// get currency by wallet ID
async function getCurrencyByWalletId(walletId) {
  console.log("Wallet ID: ", walletId);
  const query = `
    SELECT 
      C.CurrencyId, C.CurrencyCode
    FROM 
      Wallet AS W
    JOIN 
      Currency AS C 
    ON
      W.CurrencyId = C.CurrencyId
    WHERE
      W.WalletId = ?;
  `;

  const values = [walletId];

  try {
    const result = await db(query, values);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    throw new Error("[DB] Error getting currency by wallet ID");
  }
}

// get exchange rate by currency ID
async function getExchangeRateByCurrencyId(currencyId) {
  console.log("Currency ID: ", currencyId);
  const query = `
    SELECT
      *
    FROM
      ExchangeRates
    WHERE
      CurrencyId = ?;
  `;

  const values = [currencyId];

  try {
    const result = await db(query, values);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    throw new Error("[DB] Error getting exchange rate by currency ID");
  }
}

function getMinimumAmountByCurrencyCode(currencyCode) {
    const minimumAmount = minimumAmounts.find(
      (item) => item.currencyCode === currencyCode
    );
  
    return minimumAmount ? minimumAmount.amount : 20;
}
  
function convertCurrency(amount, exchangeRate) {
    return amount / exchangeRate;
}

async function checkMinimumAmount(amount, month, currencyId, currencyCode) {
    let minimumAmountData = getMinimumAmountByCurrencyCode(currencyCode);
  
    const minimumAmountByMonth = minimumAmountData * month;
  
    console.log("Minimum amount by month: ", minimumAmountByMonth);
  
    // If currency is NOT MMK, THB, or USD, convert amount to USD before comparison
    if (currencyCode !== "MMK" && currencyCode !== "THB" && currencyCode !== "USD") {
      const exchangeRateData = await getExchangeRateByCurrencyId(currencyId);
      
      if (!exchangeRateData) {
        throw new Error("Exchange rate data not found");
      }
  
      const convertedAmount = convertCurrency(amount, exchangeRateData.ExchangeRate);
      return convertedAmount >= minimumAmountByMonth;
    }
  
    return amount >= minimumAmountByMonth;
}

export async function POST(req) {
    const payload = await req.json();

    let { amount, month, walletId } = payload;

    const currency = await getCurrencyByWalletId(walletId);
  
    const isAmountValid = await checkMinimumAmount(amount, month, currency.CurrencyId, currency.CurrencyCode);
    
    if (!isAmountValid) {
        return NextResponse.json(
            { 
                success: false,
                error: `
                    The amount entered does not meet the minimum donation requirement of 20 USD per month. Please adjust your amount or duration.
                ` 
            },
            { status: 400 }
        );
    }

    return NextResponse.json(
        { success: true },
        { status: 200 }
    );
}