"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            Jai Technologies
          </h2>
          <p className="text-sm text-white/80">
            We provide professional laptop sales, repair, and doorstep services
            with genuine parts and expert support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:underline hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:underline hover:text-white"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline hover:text-white"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/PrivacyPolicyPage"
                className="hover:underline hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">
            Phone:{" "}
            <a
              href="tel:+916281462972"
              className="text-white underline hover:text-gray-200"
            >
              +91 6281462972, +91 9652049029
            </a>
          </p>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:support@jaitechnologies.in"
              className="text-white underline hover:text-gray-200"
            >
              support@jaitechnologies.in
            </a>
          </p>
          <p className="text-sm">Location: Hyderabad, India</p>
        </div>
      </div>

      <div className="text-center text-xs text-white/70 border-t border-white/20 py-4">
        © {new Date().getFullYear()} Jai Technologies. All rights reserved.
      </div>
    </footer>
  );
}
