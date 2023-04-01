export default function Navbar() {
  return (
    <nav className="w-full text-xl h-32 px-10 md:px-24">
      <div className="w-full h-full flex border-b-2 border-light-secondary">
        <section className="h-full font-bold text-4xl border-light-secondary flex justify-center items-center w-1/3">
          PZ
        </section>
        <section className="w-full flex gap-x-10 justify-center items-center">
          <p>Home</p>
          <p>Programs</p>
          <p>Trainer</p>
          <p>Pricing</p>
        </section>
        <section className="h-full pl-8 font-bold text-4xl border-light-secondary flex justify-center items-center w-1/3">
          <button className="w-32 h-14 text-lg rounded-full bg-light-secondary hover:opacity-90 text-light-primary">
            Join Now
          </button>
        </section>
      </div>
    </nav>
  );
}
