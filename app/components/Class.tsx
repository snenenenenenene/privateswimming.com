export default function Class({ image }: { image: string }) {
  return (
    <article className="sm:w-[10rem] sm:h-[10rem] h-[20rem] w-[20rem] lg:w-[15rem] lg:h-[15rem] xl:w-[20rem] sm:mt-0 mt-8 xl:h-[20rem] overflow-hidden rounded-3xl bg-light-primary relative">
      <div className="absolute top-0 left-0 w-full h-full bg-light-secondary opacity-40"></div>
      <picture className="flex h-full w-full">
        <img src={image} alt="plan-1" className="w-full h-full object-cover" />
      </picture>
    </article>
  );
}
