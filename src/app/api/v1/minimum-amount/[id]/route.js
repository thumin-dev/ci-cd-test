import { NextResponse } from "next/server";
import db from "../../../utilites/db";

// Get Query
async function GetMinimumAmountById(Id) {
    const query = `SELECT * FROM MinimumAmount WHERE MinimumAmountId = ?`;
    const values = [Id];

    try {
        return await db.query(query, values);
    } catch (error) {
        throw new Error("[DB] Error getting minimum amount by Id");
    }
}

// Update Query
async function UpdateMinimumAmount(Id, Amount) {
    const query = `UPDATE MinimumAmount SET Amount = ? WHERE MinimumAmountId = ?`;
    const values = [Amount, Id];

    try {
        return await db.query(query, values);
    } catch (error) {
        throw new Error("[DB] Error updating minimum amount");
    }
}

// Delete Query
async function DeleteMinimumAmount(Id) {
    const query = `DELETE FROM MinimumAmount WHERE MinimumAmountId = ?`;
    const values = [Id];

    try {
        return await db.query(query, values);
    } catch (error) {
        throw new Error("[DB] Error deleting minimum amount");
    }
}

// Get API
export async function GET(req, { params }) {
    try {
        const data = await GetMinimumAmountById(params.id);
        if (!data) return NextResponse.json({ message: "Not found" }, { status: 404 });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error(error);
    }
}

// Update API
export async function PUT(req, { params }) {
    try {
        const { Amount } = await req.json();
        const data = await UpdateMinimumAmount(params.id, Amount);
        if (!data) return NextResponse.json({ message: "Not found" }, { status: 404 });

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: "Cannot update minimum amount",
        }, { status: 500 });
    }
}

// Delete API
export async function DELETE(req, { params }) {
    try {
        const data = await DeleteMinimumAmount(params.id);
        if (!data) return NextResponse.json({ message: "Not found" }, { status: 404 });

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: "Cannot delete minimum amount",
        }, { status: 500 });
    }
}