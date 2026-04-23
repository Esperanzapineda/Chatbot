import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";

export const metadata: Metadata = {
  title: "Mi Chatbot",
  description: "My chatbot, learn about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center p-4">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
