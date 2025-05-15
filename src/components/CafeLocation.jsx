import CafeMap from "./CafeMap";

export default function CafeLocation() {
    return (
      <section id="location" className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <CafeMap />
          <div className="text-center md:text-left">
            <p className="text-lg">OMP Durga Mandir Lane, Infront of OMP petrol pump, Jharsuguda, Orrisa</p>
            <p className="mt-2">Open Daily: 4pm – 11pm</p>
            <p className="mt-2">Phone: (91) 8618116103</p>
          </div>
        </div>
      </section>
    );
}
