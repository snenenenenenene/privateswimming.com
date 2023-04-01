"use client";
import { FaCheckCircle } from "react-icons/fa";

export default function ProgrammeCard({
  title,
  image,
  price,
  perks,
}: {
  title: string;
  image: string;
  price: number;
  perks: string[];
}) {
  return (
    <article className="rounded-3xl bg-white border-2 border-white dark:bg-light-secondary dark:border-light-primary flex hover:scale-110 transition-all duration-500 flex-col p-4 h-[30rem] w-full shadow">
      <picture className="w-full relative bg-light-secondary rounded-2xl overflow-hidden h-1/3">
        <img
          alt={title}
          src={image}
          className="w-full opacity-60 h-full object-cover"
        />
        <h2 className="absolute bottom-2 left-5 text-light-primary text-xl">
          {title}
        </h2>
      </picture>
      <h2 className="uppercase flex w-full text-4xl font-bold mt-8">
        €{price}
        <p className="opacity-40 text-base my-auto ml-2 lowercase">/45 min</p>
      </h2>
      <section>
        {perks?.map((perk) => (
          <span key={perk} className="flex text-xl mt-4">
            <FaCheckCircle className="fill-light-secondary dark:fill-light-accent w-5 h-5" />
            <p className="text-base ml-2">{perk}</p>
          </span>
        ))}
      </section>
    </article>
  );
}
