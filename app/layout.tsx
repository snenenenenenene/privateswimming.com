import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import { Providers } from "./components/Providers";
import "./globals.css";

export const metadata = {
  title: "Ivan Faes",
  generator: "Next.js",
  category: "Personal Swimming Coach",
  description: "Personal Swimming Coach",
  icons: [
    {
      rel: "icon",
      href: "assets/favicon.ico",
      url: "assets/favicon.ico",
    },
  ],
  twitter: {
    //@ts-ignore
    card: "summary",
    site: "https://www.privezwemlessen.com",
    title: "privezwemlessen.com",
    description: "Personal Swimming Coaching",
    creator: "@privezwemlessen",
    applicationName: "Ivan Faes",
    keywords: [
      "Ivan Faes",
      "Senne Bels",
      "Personal Swimming Coach",
      "Swimming",
    ],
    authors: [
      { name: "Ivan Faes" },
      { name: "Senne Bels", url: "https://sennebels.xyz" },
    ],
  },
  creator: "Ivan Faes",
  publisher: "Senne Bels",
  robots: {
    index: true,
    googleBot: {
      index: true,
    },
  },
  openGraph: {
    title: "Ivan Faes",
    creators: ["Ivan Faes", "Senne Bels"],
    releaseDate: "2023-03-28",

    countryName: "Belgium",
    firstName: "Ivan",
    lastName: "Faes",
    username: "privezwemlessen",
    emails: "ivan.faes1@gmail.com",
    tags: ["Personal Swimming Coach", "Swimming", "Ivan Faes", "Senne Bels"],
    description: "Personal Swimming Coach",
    url: "https://www.privezwemlessen.com",
  },
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
