import { NextResponse } from "next/server";
import db from "../../utilites/db";

async function checkExistedAgent(awsId) {
  const query = `
    SELECT EXISTS (
      SELECT 1
      FROM Agent
      WHERE AWSID = ?
    ) AS AgentExists;
  `;

  const values = [awsId];
  try {
    const result = await db(query, values);
    console.log("Agent exists:", result);
    return result; 
  } catch (error) {
    console.error("[DB] Error checking agentDB:", error);
    throw error;
  }
}

export async function GET(req) {
  try {
   
    const url = new URL(req.url); 
    const awsId = url.searchParams.get("awsId");
   // console.log("AWSID being queried:", awsId);

    if (!awsId) {
      return NextResponse.json(
        { error: "Missing awsId query parameter" },
        { status: 400 }
      );
    }

    const data = await checkExistedAgent(awsId);
    //console.log("Data:", data); // Log the entire data array

    if (data.length === 0 || data[0].AgentExists === 0) {
      return NextResponse.json(
        { message: "User does not exist", code: 0 },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "User exists", code: 1 });
  } catch (error) {
    console.error("[Error] Cannot load existing agentUser", error);
    return NextResponse.json(
      { error: "Cannot load existing agentUser" },
      { status: 500 }
    );
  }
}
