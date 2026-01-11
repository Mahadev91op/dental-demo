// src/app/api/book/route.js
import dbConnect from "@/lib/db";
import Appointment from "@/models/Appointment";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    
    // Validation
    if (!body.name || !body.phone || !body.date) {
      return NextResponse.json(
        { success: false, error: "Name, Phone, and Date are required." },
        { status: 400 }
      );
    }

    // Save to Database
    const appointment = await Appointment.create(body);

    return NextResponse.json({ success: true, data: appointment }, { status: 201 });
  } catch (error) {
    console.error("Booking Error:", error);
    return NextResponse.json(
      { success: false, error: "Server Error. Please try again." },
      { status: 500 }
    );
  }
}