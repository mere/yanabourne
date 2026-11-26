"use client";

import { useEffect } from "react";
import Link from "next/link";

function preferredLocale(): "en" | "ru" {
  if (typeof navigator === "undefined") {
    return "en";
  }
  const primary = navigator.language?.split("-")[0]?.toLowerCase();
  return primary === "ru" ? "ru" : "en";
}

export default function RootRedirectPage() {
  useEffect(() => {
    window.location.replace(`/${preferredLocale()}`);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 text-slate-600">
      <p>Redirecting…</p>
      <p className="text-sm">
        <Link href="/en" className="text-blue-600 hover:underline">
          English
        </Link>
        {" · "}
        <Link href="/ru" className="text-blue-600 hover:underline">
          Русский
        </Link>
      </p>
    </main>
  );
}