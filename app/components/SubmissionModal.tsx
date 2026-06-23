"use client";

import React from "react";
import { keepTypography } from "@/app/utils/typography";

type Variant = "success" | "partial";

export default function SubmissionModal({
  isOpen,
  onClose,
  title,
  message,
  variant,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  variant: Variant;
}) {
  if (!isOpen) return null;

  const bg = variant === "partial" ? "#c8f4ef" : "#c9f8a0";
  const color = variant === "partial" ? "#000" : "#1b2a12";

  return (
    <div className="submit-modal__overlay" role="dialog" aria-modal="true" aria-label={title}>
      <div className="submit-modal__card" style={{ background: bg, color }}>
        <button className="submit-modal__close" onClick={onClose} aria-label="Close">✕</button>
        <h3>{keepTypography(title)}</h3>
        <p>{message}</p>
      </div>
      <style jsx>{`
        .submit-modal__overlay { position: fixed; inset: 0; background: rgba(0,0,0,.45); display:flex; align-items:center; justify-content:center; z-index:1000; padding:16px; }
        .submit-modal__card { position: relative; max-width: 620px; width: 100%; border-radius: 16px; padding: 24px; box-shadow: 0 20px 60px rgba(0,0,0,.25); }
        .submit-modal__close { position:absolute; top:10px; right:10px; border:0; background:transparent; font-size:20px; cursor:pointer; color:inherit; }
        h3 { margin: 0 24px 10px 0; font-size: 22px; }
        p { margin: 0; line-height: 1.5; font-weight: 600; }
      `}</style>
    </div>
  );
}
