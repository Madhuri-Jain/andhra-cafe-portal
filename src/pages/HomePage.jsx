
import Header from "../components/Header";
import Menu from "../components/Menu";
import CafeLocation from "../components/CafeLocation";
import CafeGallery from "../components/CafeGallery";
import HeroVideoReel from "../components/HeroVideoReel";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <HeroVideoReel />
      <Menu />
      <CafeLocation />
      <CafeGallery />
      <Footer />
    </div>
  );
}
