import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.scss";
import GoogleAnalytics from "@/componets/google-analytics";

export const metadata: Metadata = {
  title: "25 Anni di Malpensanet Servizi | Una storia di eccellenza",
  description:
    "Celebriamo i 25 anni di Malpensanet Servizi: un evento speciale per ringraziare chi ha reso possibile questo traguardo.",
  keywords: [
    "Malpensanet",
    "Malpensanet Servizi",
    "25 anni Malpensanet",
    "anniversario Malpensanet",
    "evento aziendale Malpensanet",
    "impresa di pulizie Malpensa",
    "facility management Lombardia",
  ],
  alternates: {
    canonical: "https://evento.malpensanet.it/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <GoogleAnalytics />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/qcl1fzf.css"
        ></link>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
