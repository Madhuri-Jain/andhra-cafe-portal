export default function CafeGallery() {
    return (
      <section id="gallery" className="px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Vibes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <img
              key={num}
              src={`/images/gallery-${num}.jpg`}
              alt={`Cafe image ${num}`}
              className="w-full h-48 object-cover rounded-md hover:opacity-90"
            />
          ))}
        </div>
      </section>
    );
}