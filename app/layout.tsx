import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";



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
    <html lang="en" suppressHydrationWarning>

      <body
        className="font-poppins container mx-auto"
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
            <Navbar />
       <main className="m-4">
       {children}
       </main>

        </ThemeProvider>
      </body>

    </html>
  );
}
