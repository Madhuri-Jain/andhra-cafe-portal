export default function Hero() {
    return (
        <section className="relative w-full">
            <img
                src="/src/assets/hero.jpg"
                alt="Cafe Hero"
                className="w-full h-auto max-h-[80vh] object-contain"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Welcome to Our Cafe</h1>
                <button className="bg-white text-brown-800 px-6 py-2 rounded-full font-semibold hover:bg-brown-100">
                Order Now
                </button>
            </div> */}
        </section>
    );
}