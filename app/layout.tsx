import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Nextjs Bolilerplate",
  description: "A nextjs Bolilerplate for laravel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-poppins container mx-auto m-4"
      >
        {children}
      </body>
    </html>
  );
}
