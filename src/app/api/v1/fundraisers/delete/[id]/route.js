import { NextResponse } from "next/server";
import db from "../../../../../utilites/db";

async function DeleteFundraiserByFundraiserID(id) {
  const query = `
        DELETE FROM Fundraiser WHERE FundraiserID = ?
    `;

  const values = [id];

  try {
    const result = await db(query, values);
    return result.affectedRows > 0;
  } catch (error) {
    throw new Error("[DB] Error deleting fundraiser");
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    const deletedFundraiser = await DeleteFundraiserByFundraiserID(id);
    if (!deletedFundraiser) {
      return NextResponse.json(
        { message: "Fundraiser not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Fundraiser deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error deleting fundraiser" },
      { status: 500 }
    );
  }
}
