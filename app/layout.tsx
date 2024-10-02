import type { Metadata } from "next";
// import { Kanit } from '/fontgoogle';
import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="Kanit">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
