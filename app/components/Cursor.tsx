"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: "-40px",
        top: "-40px",
        width: "14px",
        height: "14px",
        borderRadius: "50%",
        backgroundColor: "rgba(181, 146, 106, 0.72)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 99999,
        transition: "left 0.07s linear, top 0.07s linear",
        willChange: "left, top",
      }}
    />
  );
}
