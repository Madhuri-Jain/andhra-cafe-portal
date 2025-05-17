import { FaInstagram } from "react-icons/fa";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-10">
            <div className="text-4xl font-bold text-[#332411] tracking-wide">
             <a href="#heroSection"><img src="logo.svg" className="h-20 w-20 rounded-full object-cover" /></a>
        </div>
        <nav className="space-x-6">
          <a href="#menu" className="hover:text-brown-600">Menu</a>
          <a href="#location" className="hover:text-brown-600">Visit</a>
          <a href="#gallery" className="hover:text-brown-600">Gallery</a>
          <a href="https://www.instagram.com/andhra_cafe07" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="inline" />
          </a>
        </nav>
      </header>
    );
}