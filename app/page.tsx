export default function Home() {
  return (
    <main className=" w-full flex flex-col h-full">
      <section className="flex flex-col px-10 my-20">
        <picture className="overflow-hidden flex rounded-xl">
          <video
            autoPlay
            className="w-full h-[27rem] object-cover rounded-xl"
            src="assets/header.mp4"
          />
        </picture>
        <section className="flex mt-10">
          <span className="w-[60%]">
            <h1 className="text-4xl md:text-6xl font-bold  ">
              We Don't Just Practice, But Calm The Soul
            </h1>
          </span>
          <span className="flex flex-col pl-2 w-[40%]">
            <p className="text-base md:text-xl pt-2">
              I believe that personal training should be practiced with great
              determination.
            </p>
            <section className="flex mt-5 gap-x-4">
              <button className="rounded-full font-bold w-40 h-12 border-2 border-light-secondary">
                How it Works
              </button>
              <button className="rounded-full font-bold bg-light-accent w-40 h-12 border-2 border-light-accent">
                Trial 14 Days
              </button>
            </section>
          </span>
        </section>
      </section>
      <div className="w-full h-20 bg-light-secondary"></div>
      <section className="flex w-full px-10 my-20">
        <picture className="w-2/3">
          <video
            className="w-full h-full rounded-xl"
            src="assets/training-1.mp4"
          />
        </picture>
        <section className="flex w-1/3 mt-10">
          <span className="flex flex-col">
            <p className="text-base">
              I believe that personal training should be practiced with great
              determination.
            </p>
          </span>
        </section>
      </section>
      <div className="w-full h-96 bg-light-secondary"></div>
      <section className="w-full py-20 gap-x-40 flex h-full px-10 justify-between">
        <article className="rounded-xl flex flex-col p-4 h-[30rem] w-full shadow-2xl drop-shadow-2xl">
          <picture className="w-full rounded-2xl overflow-hidden h-1/3">
            <img
              alt="plan-1"
              src="assets/plan-1.jpg"
              className="w-full h-full object-cover"
            />
          </picture>
          <h2>70 eur</h2>
        </article>{" "}
        <article className="rounded-xl flex flex-col p-4 h-[30rem] w-full shadow-2xl">
          <picture className="w-full rounded-2xl overflow-hidden h-1/3">
            <img
              alt="plan-1"
              src="assets/plan-1.jpg"
              className="w-full h-full object-cover"
            />
          </picture>
          <h2 className="uppercase text-3xl font-bold mt-3">70 eur</h2>
        </article>{" "}
        <article className="rounded-xl flex flex-col p-4 h-[30rem] w-full shadow-2xl drop-shadow-2xl">
          <picture className="w-full rounded-2xl overflow-hidden h-1/3">
            <img
              alt="plan-1"
              src="assets/plan-1.jpg"
              className="w-full h-full object-cover"
            />
          </picture>
          <h2>70 eur</h2>
        </article>
      </section>
      <section className="w-full py-20 flex h-full px-10">
        <div className="w-full text-center bg-light-accent px-20 py-10 rounded-xl">
          <h2 className="text-5xl font-bold">Join the Community</h2>
          <p className="text-xl py-6">
            I believe that personal training should be practiced with great
            determination.
          </p>
          <span className="relative justify-center flex h-12 w-full">
            <input
              type="email"
              className="rounded-full text-2xl border-2 px-10 border-light-primary focus:border-light-secondary outline-none w-full h-full"
            />
            <button className="w-32 h-5/6 absolute -translate-y-1/2 top-1/2 right-1 bg-light-secondary rounded-full text-light-primary">
              Join Now
            </button>
          </span>
        </div>
      </section>
      <footer className="w-full py-20 px-10 flex h-72 text-light-primary bg-light-secondary">
        <span className="ml-auto h-full text-lg font-bold uppercase gap-x-4 flex">
          <p>Programs</p>
          <p>Training</p>
          <p>Pricing</p>
        </span>
      </footer>
    </main>
  );
}
