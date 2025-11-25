// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 py-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center md:text-left">
        {/* About */}
        <div>
          <h4 className="text-yellow-500 text-lg font-semibold mb-2">About</h4>
          <p className="text-sm text-gray-600">
            Empowering students with quality academic tutorials — anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-yellow-500 text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#categories" className="hover:text-yellow-600 transition">
                Categories
              </a>
            </li>
            <li>
              <a href="#profiles" className="hover:text-yellow-600 transition">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-yellow-500 text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4 text-xl text-gray-700">
            <a href="#" className="hover:text-yellow-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Lekhapora Online. All rights reserved.
      </div>
    </footer>
  );
}
