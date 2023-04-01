"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { FaAsterisk, FaCode, FaFacebook, FaMoon, FaSun } from "react-icons/fa";
import Class from "./components/Class";
import ProgrammeCard from "./components/ProgrammeCard";
import { classes } from "./data/classes";
import { programmes } from "./data/programmes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [showCopied, setShowCopied] = useState(false);
  return (
    <main className=" w-full flex flex-col h-full">
      <section className="flex flex-col px-10 md:px-24 xl:px-36 2xl:px-40 my-20">
        <picture className="overflow-hidden flex rounded-xl">
          <video
            autoPlay
            loop
            className="w-full h-[27rem] 22xl:h-[50rem] object-cover rounded-xl"
            src="assets/header.mp4"
          />
        </picture>
        <section className="flex sm:flex-row flex-col mt-10">
          <span className="w-full sm:w-[60%] md:w-[50%]">
            <h1 className="text-xl sm:text-4xl 2xl:text-8xl md:text-5xl lg:text-5xl font-bold  md:pr-10">
              We Don&apos;t Just Practice, But Calm The Soul
            </h1>
          </span>
          <span className="flex flex-col pl-2 w-full sm:w-[40%] md:w-1/2">
            <p className=" text-sm sm:text-base md:text-xl pt-2 w-full">
              I believe that personal training should be practiced with great
              determination.
            </p>
            <section className="flex mt-5 gap-x-4 justify-end">
              <button className="rounded-full hover:bg-light-secondary dark:bg-black hover:text-light-primary font-bold w-40 h-12 border-2 border-light-secondary">
                How it Works
              </button>
              <button className="rounded-full hover:opacity-75 font-bold dark:text-light-secondary bg-light-accent w-40 h-12 border-2 border-light-accent">
                Trial Day
              </button>
            </section>
          </span>
        </section>
      </section>
      <div className="w-full whitespace-nowrap h-20 flex justify-around sm:justify-between items-center px-2 sm:px-10 text-xs sm:text-xl lg:text-2xl 2xl:text-4xl uppercase font-semibold italic text-light-primary dark:bg-black bg-light-secondary">
        <p>Professional Trainer</p>
        <FaAsterisk className="text-lg text-light-accent" />
        <p>Beginner Friendly</p>
        <FaAsterisk className="text-lg sm:flex hidden text-light-accent " />
        <p className="sm:flex hidden">Custom-tailored experience</p>
      </div>
      <section className="flex sm:flex-row flex-col w-full h-full px-10 xl:px-36 2xl:px-40 md:px-24 my-20">
        <picture className="w-full sm:w-1/2 rounded-3xl object-cover flex h-full min-h-[30rem] overflow-hidden">
          <video
            className="w-full h-full rounded-3xl min-h-[30rem] object-cover"
            src="assets/personal-trainer.mp4"
            autoPlay
            loop
          />
        </picture>
        <section className="flex w-full sm:mt-0 mt-8 sm:w-1/2 px-10">
          <span className="flex my-auto flex-col">
            <h2 className=" text-2xl sm:text-5xl font-bold">
              The Benefit Of Using a Personal Trainer
            </h2>
            <p className="text-base mt-2">
              A private swimming instructor is like a personal trainer in the
              water who provides intensive guidance, motivation, and expertise
              in developing the right exercises.
            </p>
          </span>
        </section>
      </section>
      <div className="w-full flex sm:flex-row flex-col items-center sm:items-start py-20 xl:px-36 2xl:px-40 px-10 md:px-24 justify-center sm:justify-between h-full dark:bg-black bg-light-secondary">
        {classes?.map((item) => (
          <Class key={item} image={item} />
        ))}
      </div>
      <section
        id="pricing"
        className="w-full md:px-24 py-10 sm:py-20 gap-x-10 xl:px-36 2xl:px-40  lg:gap-x-40 flex sm:flex-row sm:gap-y-0 gap-y-8 flex-col h-full px-10 justify-between"
      >
        {programmes.map((program) => (
          <ProgrammeCard
            perks={program.perks}
            image={program.image}
            title={program.title}
            key={program.id}
            price={program.price}
          />
        ))}
      </section>
      <section
        id="contact"
        className="w-full pb-10 sm:py-20 md:px-24 xl:px-36 2xl:px-40 flex h-full px-5 sm:px-10"
      >
        <div className="w-full text-center bg-light-accent px-10 sm:px-20 dark:text-light-secondary py-20 rounded-xl">
          <h2 className="text-2xl sm:text-5xl font-bold">Join the Community</h2>
          <p className="text-base sm:text-xl py-6">
            I believe that personal training should be practiced with great
            determination.
          </p>
          <span className="relative justify-center flex h-12 w-full sm:w-5/6 mx-auto">
            <input
              type="email"
              placeholder="Enter your Mail!"
              className="rounded-full text-base sm:text-xl border-2 bg-light-primary text-light-secondary px-4 sm:px-10 border-light-primary focus:border-light-secondary outline-none w-full h-full"
            />
            <button className=" w-24 sm:w-32 h-5/6 absolute hover:opacity-75 -translate-y-1/2 top-1/2 right-1 bg-light-secondary rounded-full text-light-primary">
              Join Now
            </button>
          </span>
        </div>
      </section>
      <footer className="w-full py-5 sm:py-20 md:px-24 xl:px-36 2xl:px-40 px-5 sm:px-10 flex sm:h-72 h-96 text-light-primary dark:bg-black bg-light-secondary">
        <section>
          <span>
            <p className="font-bold uppercase">Location</p>
            <p>Wezenberg, Desguinlei 17/19</p>
          </span>
          <span>
            <p className="font-bold uppercase">Email</p>
            <a
              className="underline hover:text-light-accent cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("ivan.faes1@gmail.com");
                setShowCopied(true);
                setTimeout(() => {
                  setShowCopied(false);
                }, 2000);
              }}
            >
              ivan.faes1@gmail.com
            </a>
          </span>
          <span>
            <p className="font-bold uppercase">Phone</p>
            <p>+32-477-45-10-00</p>
          </span>
        </section>
        <section className="ml-auto h-full text-end flex flex-col">
          <span className="flex sm:flex-row flex-col w-full gap-x-4 uppercase justify-end font-bold text-lg">
            <p className="hover:text-light-accent hover:underline cursor-pointer">
              Programs
            </p>
            <p className="hover:text-light-accent hover:underline cursor-pointer">
              Training
            </p>
            <p className="hover:text-light-accent hover:underline cursor-pointer">
              Pricing
            </p>
          </span>
          <span className="w-full mt-auto items-center h-full flex gap-x-4 justify-end">
            <Link
              href={"https://facebook.com/IvanFaesPrivateSwimAdvice"}
              className="text-3xl hover:opacity-75"
            >
              <FaFacebook />
            </Link>
            <Link
              className="text-3xl hover:opacity-75"
              href={"https://www.sennebels.xyz"}
            >
              <FaCode />
            </Link>
            <button
              onClick={() => {
                console.log(theme);
                theme === "dark" ? setTheme("light") : setTheme("dark");
              }}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </span>
          <span>
            <p className="text-sm mt-4">
              © 2023 Ivan Faes. All rights reserved. Created by Senne Bels
            </p>
          </span>
        </section>
      </footer>
      {showCopied && (
        <div className="fixed top-0 z-50 left-0 flex justify-center items-center text-4xl uppercase font-bold transform w-full bg-light-accent border-b-2 border-light-secondary dark:border-light-primary text-light-secondary px-10 py-5">
          <p className="text-lg">Email copied to clipboard</p>
        </div>
      )}
    </main>
  );
}
