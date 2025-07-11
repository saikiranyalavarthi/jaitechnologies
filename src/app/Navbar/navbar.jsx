"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional: install lucide-react for icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-blue-600">
            Jai Technologies
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="block hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
          <Link
            href="/PrivacyPolicyPage"
            className="hover:text-blue-600 transition"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium text-gray-700 bg-white shadow-sm border-t">
          <Link href="/" className="block hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="/about" className="block hover:text-blue-600 transition">
            About
          </Link>
          <Link
            href="/services"
            className="block hover:text-blue-600 transition"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block hover:text-blue-600 transition"
          >
            Contact
          </Link>
          <Link
            href="/PrivacyPolicyPage"
            className="block hover:text-blue-600 transition"
          >
            Privacy Policy
          </Link>
        </div>
      )}
    </nav>
  );
}
