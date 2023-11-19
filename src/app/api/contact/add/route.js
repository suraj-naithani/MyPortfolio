import Contact from '../../../../models/Contact';
import connectToDB from '../../../../utils/conn';
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req, res) {
    try {
        await connectToDB();
        const body = await req.json();

        await Contact.create(body);
        return NextResponse.json({
            message: "Message sent successfully!"
        }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}