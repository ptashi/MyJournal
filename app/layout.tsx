import { Fredoka } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka", // Sets up the CSS Variable name
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // Apply the variable globally to the document
    <html lang="en" className={fredoka.variable}>
      <body>{children}</body>
    </html>
  );
}
