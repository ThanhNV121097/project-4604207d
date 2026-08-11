import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo List App",
  description: "A simple todo list web app for adding, completing, and deleting tasks."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
