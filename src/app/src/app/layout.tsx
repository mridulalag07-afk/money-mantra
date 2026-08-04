import "./globals.css";
import React from "react";

export const metadata = {
  title: "Money Mantra by Amit Alag",
  description: "Secure Today. Prosper Tomorrow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
