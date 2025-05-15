import { FaInstagram } from "react-icons/fa";
// import { ReactComponent as Logo } from '../assets/Logo.svg'; // adjust path as needed


export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-10">
        <div className="text-2xl font-bold">
            {/* <Logo className="h-10 w-auto" /> */}
            <img src="logo.svg"  className="h-10 w-auto" />
            {/* CafeLogo */}
        </div>
        <nav className="space-x-6">
          <a href="#menu" className="hover:text-brown-600">Menu</a>
          <a href="#location" className="hover:text-brown-600">Visit</a>
          <a href="#gallery" className="hover:text-brown-600">Gallery</a>
          <a href="https://www.instagram.com/andhra_cafe07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="inline" />
          </a>
        </nav>
      </header>
    );
}