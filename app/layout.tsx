import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import {Providers} from "@/components/providers";

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Nathan - Realtime Chat",
  description: "Nathan created realtime private chat room that can self destruct",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased`}
      >
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}
