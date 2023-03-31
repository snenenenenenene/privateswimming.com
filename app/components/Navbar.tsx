export default function Navbar() {
  return (
    <div className="w-5/6 flex fixed top-10 text-xl left-1/2 -translate-x-1/2  h-32 border-2 border-light-secondary">
      <section className="h-full font-bold border-r-2 text-4xl border-light-secondary flex justify-center items-center w-1/3">
        PZ
      </section>
      <section className="w-full flex gap-x-10 justify-center items-center">
        <p>Home</p>
        <p>Trainer</p>sa
        <p>Membership</p>
        <p>Guide</p>
        <p>Gallery</p>
      </section>
      <section className="h-full font-bold border-l-2 text-4xl border-light-secondary flex justify-center items-center w-1/3">
        <button className="w-5/6 h-20 text-lg bg-light-secondary hover:opacity-90 text-light-primary">
          Join Now
        </button>
      </section>
    </div>
  );
}
