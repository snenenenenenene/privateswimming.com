import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Ivan Faes",
  description: "Zwemmen op Maat",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-light-primary relative text-light-secondary w-full h-full flex">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
