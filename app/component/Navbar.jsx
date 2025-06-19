// components/Navbar.jsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <header className="fixed top-0 left-0 w-full bg-[#030b16] text-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">Port<span className="text-white">folio</span></h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400 transition ">Home</Link>
          <Link href="#about" className="hover:text-blue-400 transition">About</Link>
          <Link href="#skills" className="hover:text-blue-400 transition">Skills</Link>
          <Link href="#portfolio" className="hover:text-blue-400 transition">Portfolio</Link>
          <Link href="#contact" className="hover:text-blue-400 transition">Contact</Link>
        </nav>

        <div className="hidden md:block">
        <a
              href="/AhmedMahmoud.pdf"
              download
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
        >
              Download CV
        </a>

        </div>

        {/* Mobile Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#030b16] px-6 py-4 space-y-3 text-center">
          <Link href="/" className="block hover:text-blue-400">Home</Link>
          <Link href="/about" className="block hover:text-blue-400">About</Link>
          <Link href="/skills" className="block hover:text-blue-400">Skills</Link>
          <Link href="/projects" className="block hover:text-blue-400">Portfolio</Link>
          <Link href="/contact" className="block hover:text-blue-400">Contact</Link>
          <a
            href="/AhmedMahmoud.pdf"
            className="inline-block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 mt-2"
            download
          >
            Download CV
          </a>
        </nav>
      )}
    </header>
  );
}
