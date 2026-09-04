import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CollabTable — Restaurant × Creator Marketplace",
  description:
    "A closed two-sided marketplace for restaurant × influencer collaborations — discovery, negotiation, contracts, escrow payments and performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var ct=localStorage.getItem('ct-theme')||(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',ct);}catch(e){document.documentElement.setAttribute('data-theme','light');}`,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
