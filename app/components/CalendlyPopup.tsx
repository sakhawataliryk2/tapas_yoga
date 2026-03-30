"use client";
import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { CALENDLY } from "../data/products";

interface CalendlyPopupProps {
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export default function CalendlyPopup({
  className,
  style,
  onMouseEnter,
  onMouseLeave,
  children,
}: CalendlyPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Calendly popup requires a root element
    setRootElement(document.body);
  }, []);

  return (
    <>
      <button
        type="button"
        className={className}
        style={{ ...style, cursor: "pointer", border: "none", outline: "none", display: "inline-block" }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
      >
        {children}
      </button>
      {isOpen && rootElement && (
        <PopupModal
          url={CALENDLY}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootElement}
        />
      )}
    </>
  );
}
