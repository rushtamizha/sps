import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    // Configure your production SMTP transport details here
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "eswaran17phu012@gmail.com",
        pass: "fear umjx ajlx gdby",
      },
    });

    const mailOptions = {
      from: '"Cab Dispatch Engine" <your-email@gmail.com>',
      to: "a.karthikmmv@gmail.com",
      subject: `🚨 NEW BOOKING: ${data.fullName} (${data.tripType})`,
      html: `
        <h3>New Ride Booking Details</h3>
        <p><strong>Customer Name:</strong> ${data.fullName}</p>
        <p><strong>Mobile Number:</strong> ${data.mobileNumber}</p>
        <p><strong>Trip Type:</strong> ${data.tripType}</p>
        <p><strong>Vehicle Assigned:</strong> ${data.vehicleName} (${data.ratePerKm}, Bata: ${data.driverBata})</p>
        <p><strong>Passengers:</strong> ${data.passengers} Person(s)</p>
        <hr />
        <p><strong>Pickup Location:</strong> ${data.pickupAddress}</p>
        <p><strong>Drop Location:</strong> ${data.dropAddress}</p>
        <p><strong>Pickup Schedule:</strong> ${data.pickupDate} at ${data.pickupTime}</p>
        ${data.returnDate ? `<p><strong>Return Date:</strong> ${data.returnDate}</p>` : ""}
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SMTP processing error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}