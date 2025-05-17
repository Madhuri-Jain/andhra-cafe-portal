import { useRef, useState, useEffect } from "react";

export default function HeroVideoReel() {
  const videos = [
    "src/assets/videos/fries-making.MOV",
    "src/assets/videos/drink-making.MOV",
    "src/assets/videos/pasta-making.MOV",
    "src/assets/videos/dishes.mp4",
    "src/assets/videos/shake-making.mp4",
  ];

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll handler: update active dot
  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = containerRef.current.scrollLeft;
      const width = containerRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      setActiveIndex(newIndex);
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dot click: scroll to selected video
  const scrollToVideo = (index) => {
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
  };

  return (
    <section id="heroSection" className="relative w-full bg-[#332411] py-6 overflow-hidden">
      {/* Mobile + Tablet Carousel */}
      <div
        ref={containerRef}
        className="md:hidden flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-4 px-4"
      >
        {videos.map((src, index) => (
          <div key={index} className="min-w-full snap-center">
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              className="h-[75vh] w-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Dots overlay - clickable */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 bg-black/30 px-3 py-1 rounded-full flex gap-2 md:hidden">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToVideo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>

      {/* Desktop View - All Videos Side by Side */}
      <div className="hidden md:flex justify-center items-center gap-4 px-4 max-w-7xl mx-auto">
        {videos.map((src, index) => (
          <video
            key={index}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="h-[70vh] w-auto rounded-xl object-cover transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4 pointer-events-none">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Experience Flavours in Every Frame 🍛
        </h1>
        <a href="#menu">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 pointer-events-auto">
            See Full Menu
          </button>
        </a>
      </div>
    </section>
  );
}
