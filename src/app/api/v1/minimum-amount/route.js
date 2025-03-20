import { NextResponse } from "next/server";
import db from "../../../utilites/db";

// Create Query
async function CreateMinimumAmount(CurrencyId, Amount) {
    const query = `INSERT INTO MinimumAmount (CurrencyId, Amount) VALUES (?, ?)`;
    const values = [CurrencyId, Amount];

    try {
        return await db.query(query, values);
    } catch (error) {
        throw new Error("[DB] Error creating minimum amount");
    }
}

// Get All Query
async function GetMinimumAmount() {
    const query = `SELECT * FROM MinimumAmount`;

    try {
        return await db.query(query);
    } catch (error) {
        throw new Error("[DB] Error getting minimum amount");
    }
}

// Create API
export async function POST(req) {
    try {
        const { CurrencyId, Amount } = req.body;

        const requiredFields = [CurrencyId, Amount];
        const missingFields = requiredFields.filter((field) => !field);

        if (missingFields.length) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        const data = await CreateMinimumAmount(CurrencyId, Amount);
        return NextResponse.json({ data }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "Cannot create minimum amount" },
            { status: 500 }
        );
    }
}

// Get All API
export async function GET(req) {
    try {
        const data = await GetMinimumAmount();
        
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Cannot get minimum amount" },
            { status: 500 }
        );
    }
}