import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Future World",
  description: "Store Virtual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <header>
          <nav>
            <ul>
              <a href="/">
              <li>Home</li>
              </a>
              
              <a href="/store">
              <li>Store</li>
              </a>
              
            </ul>
          </nav>  
        </header>  


        {children}
      </body>
    </html>
  );
}
