import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, address, fenceType, footage, details } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { error: dbError } = await supabase.from("quote_requests").insert({
      name,
      phone,
      address,
      fence_type: fenceType,
      footage,
      details,
    });

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json(
        { error: "Failed to save quote request" },
        { status: 500 }
      );
    }

    // Send email notification (only if API key is configured)
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error: emailError } = await resend.emails.send({
        from: "Got Fences Quote <gotfences@decodehorsemanship.com>",
        to: "info@belcinc.com",
        subject: `New Quote Request from ${name}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address || "Not provided"}</p>
          <p><strong>Fence Type:</strong> ${fenceType || "Not specified"}</p>
          <p><strong>Approx. Footage:</strong> ${footage || "Not provided"}</p>
          <p><strong>Details:</strong></p>
          <p>${details || "None provided"}</p>
        `,
      });

      if (emailError) {
        console.error("Resend error:", emailError);
        // Don't fail the request if email fails — data is already saved
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
