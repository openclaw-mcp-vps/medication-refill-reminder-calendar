import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedRefill – Smart Medication Refill Reminders",
  description: "Track medication schedules and get refill reminders before running out. Pharmacy sync, SMS & email alerts for patients with chronic conditions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cff44690-93d4-4e5d-a6fb-b4a778fe8107"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
