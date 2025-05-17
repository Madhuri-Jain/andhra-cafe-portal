import { FaInstagram } from "react-icons/fa";
import logo from "/src/assets/logo.svg"; // Replace with your actual logo path

export default function Footer() {
  return (
    <footer className="bg-[#332411] text-white px-6 py-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

    {/* Logo */}
    <div className="flex flex-col items-center md:items-start">
      <img
        src={logo}
        alt="Cafe Logo"
        className="w-35 h-35 rounded-full object-contain mb-2"
      />
      <p className="text-sm text-white/80 text-center md:text-left">
        &copy; {new Date().getFullYear()} Andhra Cafe. All rights reserved.
      </p>
    </div>

    {/* About Us */}
    <div>
      <h4 className="font-semibold text-white mb-2">About Us</h4>
      <ul className="space-y-1 text-white/80">
        <li><a href="#" className="hover:underline">Our Story</a></li>
        <li><a href="#" className="hover:underline">Team</a></li>
      </ul>
    </div>

    {/* Careers */}
    <div>
      <h4 className="font-semibold text-white mb-2">Careers</h4>
      <ul className="space-y-1 text-white/80">
        <li><a href="#" className="hover:underline">Open Roles</a></li>
        <li><a href="#gallery" className="hover:underline">Life at Cafe</a></li>
        <li><a href="#" className="hover:underline">Internships</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="font-semibold text-white mb-2">Contact</h4>
      <ul className="space-y-1 text-white/80">
        <li><a href="#location" className="hover:underline">Location</a></li>
        <li><a href="#" className="hover:underline">Feedback</a></li>
        <li><a href="#" className="hover:underline">Support</a></li>
      </ul>

      {/* Social Icons */}
      <div className="flex gap-4 mt-4 justify-center md:justify-start">
        <a href="https://instagram.com/andhra_cafe07" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="hover:text-pink-400 transition" size={20} />
        </a>
       
      </div>
    </div>

  </div>
</footer>
  );
}
