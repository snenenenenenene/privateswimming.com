"use client";
import { useTheme } from "next-themes";
export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="w-full text-xl h-32 px-10 xl:px-36 2xl:px-40 md:px-24 dark:bg-light-secondary transition-colors duration-500 dark:text-light-primary bg-light-primary flex-col text-light-secondary">
      <div className="w-full h-full flex border-b-2 border-light-secondary">
        <section className="h-full font-bold text-4xl border-light-secondary flex justify-center items-center w-1/3">
          Ivan Faes
        </section>
        <section className="w-full font-bold flex gap-x-10 justify-center items-center">
          <a
            href={"/"}
            className="hover:text-light-accent hover:underline cursor-pointer"
          >
            Home
          </a>
          <a
            href={"#pricing"}
            className="hover:text-light-accent hover:underline cursor-pointer"
          >
            Pricing
          </a>
          <a
            href={"#contact"}
            className="hover:text-light-accent hover:underline cursor-pointer"
          >
            Contact
          </a>
        </section>
        <section className="h-full pl-8 font-bold text-4xl border-light-secondary flex justify-center items-center w-1/3">
          <button
            onClick={() => {
              console.log(theme);
              theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
            className="w-32 h-14 text-lg rounded-full bg-light-secondary hover:opacity-90 text-light-primary"
          >
            Join Now
          </button>
        </section>
      </div>
    </nav>
  );
}
