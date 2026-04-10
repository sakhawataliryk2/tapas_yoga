import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const session_id = searchParams.get("session_id");

        if (!session_id || !session_id.startsWith("cs_")) {
            return NextResponse.json({ error: "Invalid session_id" }, { status: 400 });
        }

        const session = await stripe.checkout.sessions.retrieve(session_id);

        // Return only what the client needs — never expose full session object
        return NextResponse.json({
            id: session.id,
            amount_total: session.amount_total,
            currency: session.currency,
            customer_email: session.customer_details?.email ?? null,
            metadata: session.metadata,
            payment_status: session.payment_status,
        });
    } catch (err) {
        console.error("[session]", err);
        return NextResponse.json({ error: "Failed to retrieve session" }, { status: 500 });
    }
}
