import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import CityProvider from "@/hooks/city-provider";

export const metadata: Metadata = {
  title: "Weather App",
  description: "Generated by create next app",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-gradient-to-b from-sky-400 to-sky-200 font-sans antialiased",
          fontSans.variable
        )}>
        <CityProvider>{children}</CityProvider>
      </body>
    </html>
  );
}
