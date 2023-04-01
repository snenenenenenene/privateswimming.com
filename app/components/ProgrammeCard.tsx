import { BiEuro } from "react-icons/bi";
export default function ProgrammeCard({
  title,
  image,
  price,
}: {
  title: string;
  image: string;
  price: number;
}) {
  return (
    <article className="rounded-xl flex flex-col p-4 h-[30rem] w-full shadow-2xl">
      <picture className="w-full rounded-2xl overflow-hidden h-1/3">
        <img alt={title} src={image} className="w-full h-full object-cover" />
      </picture>
      <h2 className="uppercase justify-center flex text-center w-full text-3xl font-bold mt-3">
        <BiEuro />
        {price}
      </h2>
    </article>
  );
}
