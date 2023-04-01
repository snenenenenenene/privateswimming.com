import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import { Providers } from "./components/Providers";
import "./globals.css";
export const metadata = {
  title: "Ivan Faes",
  description: "Zwemmen op Maat",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-light-secondary dark:selection:text-light-secondary scroll-smooth selection:bg-light-accent transition-colors duration-300 dark:text-light-primary bg-light-primary flex-col text-light-secondary w-full h-full flex">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
