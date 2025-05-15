import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white text-center py-6 shadow-inner">
            <p>&copy; {new Date().getFullYear()} Cafe Name. All rights reserved.</p>
            <div className="mt-2 flex justify-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
            </a>
            </div>
        </footer>
    );
}