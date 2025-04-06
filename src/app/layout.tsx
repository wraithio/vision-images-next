import type { Metadata } from "next";
import "./globals.css";
import FooterComponent from "@/components/FooterComponent";

export const metadata: Metadata = {
  title: "Vision Images",
  description: "premium portrait and event photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link
  rel="icon"
  href="/icons/logo.png"
  type="image/png"
  sizes="32x32"
/></head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
