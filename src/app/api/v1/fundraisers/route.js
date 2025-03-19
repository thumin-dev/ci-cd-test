import { NextResponse } from "next/server";
import db from "../../../utilites/db";

async function CreateFundraiser(
  FundraiserName,
  FundraiserEmail,
  FundraiserLogo,
  BaseCountryID
) {
  const query = `INSERT INTO Fundraiser (FundraiserName, FundraiserEmail, FundraiserLogo, BaseCountryID ) VALUES (?,?,?,?)`;
  const values = [
    FundraiserName,
    FundraiserEmail,
    FundraiserLogo,
    BaseCountryID,
  ];

  try {
    const result = await db(query, values);
    return result;
  } catch (error) {
    throw new Error("[DB] Error creating fundraiser:");
  }
}

async function fetchFundraisers(limit, offset) {
  const query = `SELECT * FROM Fundraiser LIMIT ? OFFSET ?`;
  const values = [`${limit}`, `${offset}`];

  try {
    const result = await db(query, values);
    console.log("result from DB: ", result);
    return result;
  } catch (error) {
    console.error("Error fetching fundraisers:", error);
    throw new Error("[DB] Error fetching fundraisers:");
  }
}

async function CreateBaseCountryInFundraiser(BaseCountryName) {
  const query = `INSERT INTO BaseCountry (BaseCountryName) VALUES (?)`;
  const values = [BaseCountryName];

  try {
    const result = await db(query, values);
    return result.insertId;
  } catch (error) {
    console.error("Error creating BaseCountry:", error);
    throw new Error("[DB] Error creating BaseCountry:");
  }
}
async function CheckExistingBaseCountry(BaseCountryName) {
  const query = `SELECT BaseCountryID FROM BaseCountry WHERE BaseCountryName = ?`;
  const values = [BaseCountryName];

  try {
    const result = await db(query, values);
    return result;
  } catch (error) {
    console.error("Error checking existing BaseCountry:", error);
    throw new Error("[DB] Error checking existing BaseCountry:");
  }
}

export async function POST(req) {
  const { FundraiserName, FundraiserEmail, FundraiserLogo, BaseCountryName } =
    await req.json();

  const requiredFields = {
    FundraiserName,
    FundraiserEmail,
    FundraiserLogo,
    BaseCountryName,
  };
  const missingFields = Object.keys(requiredFields).filter(
    (field) => !requiredFields[field]
  );
  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        status: 400,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      },
      { status: 400 }
    );
  }

  try {
    let BaseCountryID = null;
    const existingBaseCountry = await CheckExistingBaseCountry(BaseCountryName);
    if (existingBaseCountry.length > 0) {
      BaseCountryID = existingBaseCountry[0].BaseCountryID;
    } else {
      BaseCountryID = await CreateBaseCountryInFundraiser(BaseCountryName);
      if (!BaseCountryID) {
        return NextResponse.json(
          {
            status: 500,
            message: "Internal Server Error in Creating BaseCountry",
          },
          { status: 500 }
        );
      }
    }

    const fundraiser = await CreateFundraiser(
      FundraiserName,
      FundraiserEmail,
      FundraiserLogo,
      BaseCountryID
    );
    return NextResponse.json(
      {
        status: 201,
        message: "Fundraiser created successfully",
        fundraiser: {
          id: fundraiser.insertId,
          name: FundraiserName,
          email: FundraiserEmail,
          logo: FundraiserLogo,
          baseCountry: BaseCountryName,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating fundraiser:", error);
    return NextResponse.json(
      {
        status: 500,
        message: "Internal Server Error",
        error: error.sqlMessage,
      },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const offset = (page - 1) * limit;

  try {
    const [{ total }] = await db(`SELECT COUNT(*) AS total FROM Fundraiser`);

    const fundraisers = await fetchFundraisers(limit, offset);
    return NextResponse.json(
      {
        totalRecords: total,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
        fundraisers,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching fundraisers:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
