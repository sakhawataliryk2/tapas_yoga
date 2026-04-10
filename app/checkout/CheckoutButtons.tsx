"use client";

import { useState } from "react";

interface Props {
    productName: string;
    tierName: string;
    sessionLabel: string;
    cancelPath: string;
    // Deposit option
    showDeposit: boolean;
    depositAmount: number;
    depositLabel: string;
    // Full payment option
    fullAmount: number;
    fullLabel: string;
}

const bodyFont: React.CSSProperties = { fontFamily: "var(--font-body)" };

async function redirectToStripe(payload: {
    productName: string;
    tierName: string;
    sessionLabel: string;
    amountUsd: number;
    cancelPath: string;
    paymentType: "deposit" | "full";
}) {
    const res = await fetch("/api/stripe/create-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Failed to create session");
    const data = await res.json();
    window.location.href = data.url;
}

export default function CheckoutButtons({
    productName,
    tierName,
    sessionLabel,
    cancelPath,
    showDeposit,
    depositAmount,
    depositLabel,
    fullAmount,
    fullLabel,
}: Props) {
    const [loadingDeposit, setLoadingDeposit] = useState(false);
    const [loadingFull, setLoadingFull] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const isLoading = loadingDeposit || loadingFull;

    async function handleDeposit() {
        setErrorMsg(null);
        setLoadingDeposit(true);
        try {
            await redirectToStripe({ productName, tierName, sessionLabel, amountUsd: depositAmount, cancelPath, paymentType: "deposit" });
        } catch {
            setErrorMsg("Something went wrong. Please try again.");
            setLoadingDeposit(false);
        }
    }

    async function handleFull() {
        setErrorMsg(null);
        setLoadingFull(true);
        try {
            await redirectToStripe({ productName, tierName, sessionLabel, amountUsd: fullAmount, cancelPath, paymentType: "full" });
        } catch {
            setErrorMsg("Something went wrong. Please try again.");
            setLoadingFull(false);
        }
    }

    return (
        <div className={`grid grid-cols-1 ${showDeposit ? "md:grid-cols-2" : ""} gap-4`}>

            {/* Option 1: Deposit */}
            {showDeposit && (
                <div style={{ border: "1px solid #DDD0C0", backgroundColor: "#F8F4EE" }}>
                    <div className="p-8">
                        <p style={{ ...bodyFont, fontSize: "0.625rem", letterSpacing: "0.2em", fontWeight: 600, color: "#A8784A", textTransform: "uppercase", marginBottom: "16px" }}>
                            Option 1
                        </p>
                        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 400, fontSize: "1.5rem", color: "#1A1510", letterSpacing: "-0.01em", marginBottom: "8px" }}>
                            Pay Deposit Today
                        </h3>
                        <p style={{ ...bodyFont, fontSize: "0.875rem", color: "#7A6E64", lineHeight: 1.7, marginBottom: "24px" }}>
                            Secure your spot with a deposit now. Pay the remaining balance 90 days before the training starts.
                        </p>
                        <div className="mb-6 p-4" style={{ backgroundColor: "#EFE8DC" }}>
                            <p style={{ ...bodyFont, fontSize: "0.75rem", color: "#7A6E64", marginBottom: "4px" }}>Due today</p>
                            <p style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "2.25rem", color: "#1A1510", letterSpacing: "-0.02em", lineHeight: 1 }}>
                                {depositLabel}{" "}
                                <span style={{ ...bodyFont, fontSize: "0.75rem", color: "#7A6E64", fontWeight: 400 }}>USD</span>
                            </p>
                            <p style={{ ...bodyFont, fontSize: "0.75rem", color: "#7A6E64", marginTop: "4px" }}>
                                Remaining ${(fullAmount - depositAmount).toLocaleString()} USD due 90 days before start
                            </p>
                        </div>
                        <button
                            onClick={handleDeposit}
                            disabled={isLoading}
                            className="block w-full text-center py-4 transition-colors"
                            style={{ backgroundColor: loadingDeposit ? "#7A6E64" : "#1A1510", ...bodyFont, fontSize: "0.6875rem", letterSpacing: "0.2em", fontWeight: 600, color: "white", textTransform: "uppercase", border: "none", cursor: isLoading ? "not-allowed" : "pointer" }}
                        >
                            {loadingDeposit ? "Redirecting…" : "Pay Deposit →"}
                        </button>
                    </div>
                </div>
            )}

            {/* Option 2: Pay in full */}
            <div style={{ border: "1px solid #DDD0C0", backgroundColor: "#1A1510", position: "relative" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5" style={{ backgroundColor: "#A8784A" }}>
                    <span style={{ ...bodyFont, fontSize: "0.5625rem", letterSpacing: "0.22em", fontWeight: 600, color: "white", textTransform: "uppercase" }}>
                        Best Value
                    </span>
                </div>
                <div className="p-8">
                    <p style={{ ...bodyFont, fontSize: "0.625rem", letterSpacing: "0.2em", fontWeight: 600, color: "rgba(168,120,74,0.8)", textTransform: "uppercase", marginBottom: "16px" }}>
                        {showDeposit ? "Option 2" : "Option 1"}
                    </p>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 400, fontSize: "1.5rem", color: "white", letterSpacing: "-0.01em", marginBottom: "8px" }}>
                        Pay in Full
                    </h3>
                    <p style={{ ...bodyFont, fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "24px" }}>
                        Pay the full amount today and have complete peace of mind. Nothing left to worry about before your training.
                    </p>
                    <div className="mb-6 p-4" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                        <p style={{ ...bodyFont, fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: "4px" }}>Due today</p>
                        <p style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "2.25rem", color: "white", letterSpacing: "-0.02em", lineHeight: 1 }}>
                            {fullLabel}{" "}
                            <span style={{ ...bodyFont, fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>USD</span>
                        </p>
                        <p style={{ ...bodyFont, fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", marginTop: "4px" }}>
                            Full amount · Nothing more to pay
                        </p>
                    </div>
                    <button
                        onClick={handleFull}
                        disabled={isLoading}
                        className="block w-full text-center py-4 transition-colors"
                        style={{ backgroundColor: loadingFull ? "#7A6E64" : "#A8784A", ...bodyFont, fontSize: "0.6875rem", letterSpacing: "0.2em", fontWeight: 600, color: "white", textTransform: "uppercase", border: "none", cursor: isLoading ? "not-allowed" : "pointer" }}
                    >
                        {loadingFull ? "Redirecting…" : "Pay in Full →"}
                    </button>
                </div>
            </div>

            {errorMsg && (
                <p className="md:col-span-2 text-center" style={{ ...bodyFont, fontSize: "0.875rem", color: "#C0392B", marginTop: "8px" }}>
                    {errorMsg}
                </p>
            )}
        </div>
    );
}
