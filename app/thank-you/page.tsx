"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
    }
}

interface SessionData {
    id: string;
    amount_total: number;
    currency: string;
    customer_email: string | null;
    payment_status: string;
    metadata: {
        productName?: string;
        tierName?: string;
        sessionLabel?: string;
        paymentType?: string;
    };
}

const bodyFont: React.CSSProperties = { fontFamily: "var(--font-body)" };

export default function ThankYouPage() {
    const [session, setSession] = useState<SessionData | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const session_id = new URLSearchParams(window.location.search).get("session_id");
        if (!session_id) {
            setError(true);
            return;
        }

        fetch(`/api/stripe/session?session_id=${session_id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed");
                return res.json();
            })
            .then((data: SessionData) => {
                setSession(data);

                // ── Deduplication: only fire once per transaction ──
                const dedupKey = `purchased_${data.id}`;
                if (sessionStorage.getItem(dedupKey)) return;
                sessionStorage.setItem(dedupKey, "true");

                // ── GTM dataLayer push ──
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: "purchase",
                    ecommerce: {
                        transaction_id: data.id,
                        value: data.amount_total / 100,
                        currency: (data.currency ?? "usd").toUpperCase(),
                        items: [
                            {
                                item_name: data.metadata?.productName ?? "Yoga Teacher Training",
                                item_variant: data.metadata?.tierName ?? "",
                                item_category: data.metadata?.paymentType === "deposit" ? "Deposit" : "Full Payment",
                                price: data.amount_total / 100,
                                quantity: 1,
                            },
                        ],
                    },
                });
            })
            .catch(() => setError(true));
    }, []);

    return (
        <>
            {/* Nav */}
            <header
                className="flex items-center justify-between px-6 lg:px-12 py-5"
                style={{ backgroundColor: "#1A1510" }}
            >
                <Link href="/" className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/logo.svg"
                        alt="Tapas Yoga School"
                        style={{ height: "28px", filter: "brightness(0) invert(1) opacity(0.75)" }}
                    />
                </Link>
            </header>

            <main style={{ backgroundColor: "#F8F4EE", minHeight: "100vh" }}>
                <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-14 py-20 sm:py-28 text-center">

                    {error ? (
                        <>
                            <p style={{ ...bodyFont, fontSize: "0.625rem", letterSpacing: "0.2em", fontWeight: 500, color: "#A8784A", textTransform: "uppercase", marginBottom: "16px" }}>
                                Something went wrong
                            </p>
                            <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1A1510", letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: "16px" }}>
                                We couldn&apos;t confirm your payment
                            </h1>
                            <p style={{ ...bodyFont, fontSize: "0.9375rem", color: "#7A6E64", lineHeight: 1.8, marginBottom: "32px" }}>
                                If you completed payment, don&apos;t worry — your spot is reserved. Please contact us on WhatsApp and we&apos;ll confirm everything manually.
                            </p>
                            <a
                                href="https://wa.me/8613816920709"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-4"
                                style={{ backgroundColor: "#1A1510", ...bodyFont, fontSize: "0.6875rem", letterSpacing: "0.2em", fontWeight: 600, color: "white", textTransform: "uppercase" }}
                            >
                                Contact Us on WhatsApp →
                            </a>
                        </>
                    ) : (
                        <>
                            {/* Checkmark */}
                            <div className="flex justify-center mb-10">
                                <div
                                    className="flex items-center justify-center"
                                    style={{ width: 64, height: 64, borderRadius: "50%", border: "1.5px solid #A8784A" }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12l5 5L19 7" stroke="#A8784A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <p style={{ ...bodyFont, fontSize: "0.625rem", letterSpacing: "0.2em", fontWeight: 500, color: "#A8784A", textTransform: "uppercase", marginBottom: "16px" }}>
                                Payment Confirmed
                            </p>
                            <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#1A1510", letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: "16px" }}>
                                Your spot is reserved
                            </h1>
                            <p style={{ ...bodyFont, fontSize: "0.9375rem", color: "#7A6E64", lineHeight: 1.8, marginBottom: "40px" }}>
                                Thank you for booking with The Tapas Yoga School. You&apos;ll receive a confirmation email shortly with everything you need to prepare for your training.
                            </p>

                            {/* Order details */}
                            {session && (
                                <div
                                    className="text-left mb-12"
                                    style={{ border: "1px solid #DDD0C0", backgroundColor: "white" }}
                                >
                                    <div className="px-8 py-5 border-b" style={{ borderColor: "#DDD0C0" }}>
                                        <p style={{ ...bodyFont, fontSize: "0.625rem", letterSpacing: "0.2em", fontWeight: 500, color: "#A8784A", textTransform: "uppercase" }}>
                                            Order Summary
                                        </p>
                                    </div>
                                    <div className="divide-y" style={{ borderColor: "#DDD0C0" }}>
                                        {[
                                            { label: "Program", value: session.metadata?.productName },
                                            { label: "Package", value: session.metadata?.tierName },
                                            { label: "Dates", value: session.metadata?.sessionLabel },
                                            { label: "Payment type", value: session.metadata?.paymentType === "deposit" ? "Deposit" : "Full payment" },
                                            { label: "Amount paid", value: `$${(session.amount_total / 100).toLocaleString()} ${session.currency?.toUpperCase()}` },
                                        ]
                                            .filter((r) => r.value)
                                            .map(({ label, value }) => (
                                                <div key={label} className="px-8 py-4 flex items-start justify-between gap-8">
                                                    <span style={{ ...bodyFont, fontSize: "0.8125rem", color: "#7A6E64", flexShrink: 0 }}>{label}</span>
                                                    <span style={{ ...bodyFont, fontWeight: 500, fontSize: "0.9375rem", color: "#1A1510", textAlign: "right" }}>{value}</span>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/"
                                    className="inline-block px-8 py-4 transition-colors"
                                    style={{ backgroundColor: "#1A1510", ...bodyFont, fontSize: "0.6875rem", letterSpacing: "0.2em", fontWeight: 600, color: "white", textTransform: "uppercase" }}
                                >
                                    Back to Home
                                </Link>
                                <a
                                    href="https://wa.me/8613816920709"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-8 py-4 transition-colors"
                                    style={{ border: "1px solid #DDD0C0", ...bodyFont, fontSize: "0.6875rem", letterSpacing: "0.2em", fontWeight: 600, color: "#7A6E64", textTransform: "uppercase" }}
                                >
                                    Questions? WhatsApp Us
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </>
    );
}
