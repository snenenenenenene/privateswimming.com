export default function Class() {
  return (
    <article className="w-[20rem] sm:mt-0 mt-8 h-[20rem] overflow-hidden rounded-3xl bg-light-primary relative">
      <div className="absolute top-0 left-0 w-full h-full bg-light-secondary opacity-40"></div>
      <picture className="flex h-full w-full">
        <img
          src="assets/programmes/plan-1.jpg"
          alt="plan-1"
          className="w-full h-full object-cover"
        />
      </picture>
    </article>
  );
}
