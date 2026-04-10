import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            productName,   // e.g. "200HR Foundation Teacher Training"
            tierName,      // e.g. "Training + Shared Suite + 2 Meals/Day"
            amountUsd,     // numeric, e.g. 4170
            sessionLabel,  // e.g. "Aug 9 – Aug 29"
            cancelPath,    // e.g. "/checkout?product=200hr&tier=1&session=0"
            paymentType,   // "deposit" | "full"
        } = body;

        if (!productName || !amountUsd || amountUsd <= 0) {
            return NextResponse.json({ error: "Invalid request" }, { status: 400 });
        }

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: "usd",
                        unit_amount: Math.round(amountUsd * 100), // convert to cents
                        product_data: {
                            name: productName,
                            description: [tierName, sessionLabel, paymentType === "deposit" ? "Deposit payment" : "Full payment"]
                                .filter(Boolean)
                                .join(" · "),
                        },
                    },
                },
            ],
            success_url: `${baseUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${baseUrl}${cancelPath ?? "/checkout"}`,
            metadata: {
                productName,
                tierName: tierName ?? "",
                sessionLabel: sessionLabel ?? "",
                paymentType: paymentType ?? "full",
                amountUsd: String(amountUsd),
            },
        });

        return NextResponse.json({ url: session.url });
    } catch (err) {
        console.error("[create-session]", err);
        return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
    }
}
