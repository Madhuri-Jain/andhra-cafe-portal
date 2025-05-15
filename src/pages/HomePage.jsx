import { FaInstagram } from "react-icons/fa";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import CafeLocation from "../components/CafeLocation";
import CafeGallery from "../components/CafeGallery";
import CafeMap from "../components/CafeMap";


export default function Homepage() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <Menu />
      <CafeLocation />
      <CafeGallery />
    </div>
  );
}
