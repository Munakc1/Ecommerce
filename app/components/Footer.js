'use client';

import React from 'react';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  LocationOn,
  Email,
  Phone,
} from '@mui/icons-material';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-4">🎮 GameHaven</h2>
          <p className="text-sm leading-relaxed">
            GameHaven is your ultimate gaming shop with next-gen consoles, accessories, and merch.
            Experience the thrill of power-packed performance and stylish gear.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <LocationOn fontSize="small" />
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone fontSize="small" />
              <span>+977 9800000000</span>
            </div>
            <div className="flex items-center gap-2">
              <Email fontSize="small" />
              <span>support@gamehaven.com</span>
            </div>
          </div>
        </div>

        {/* Quick Shop Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/products">All Products</Link></li>
            <li><Link href="/consoles">Gaming Consoles</Link></li>
            <li><Link href="/accessories">Accessories</Link></li>
            <li><Link href="/merchandise">Merchandise</Link></li>
            <li><Link href="/offers">Offers & Deals</Link></li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Help & Support</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/shipping">Shipping Information</Link></li>
            <li><Link href="/returns">Return Policy</Link></li>
            <li><Link href="/support">Customer Support</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Join Our Community</h3>
          <p className="text-sm mb-3">Get updates on exclusive offers and new product launches.</p>
          <form className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none flex-1"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 transition-colors text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-6">
            <p className="mb-2 text-sm font-semibold">Follow us</p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://facebook.com"><Facebook className="hover:text-blue-500 cursor-pointer" /></Link>
              <Link href="https://twitter.com"><Twitter className="hover:text-blue-400 cursor-pointer" /></Link>
              <Link href="https://instagram.com"><Instagram className="hover:text-pink-500 cursor-pointer" /></Link>
              <Link href="https://youtube.com"><YouTube className="hover:text-red-600 cursor-pointer" /></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-4 text-center text-sm border-t border-gray-700">
        © {new Date().getFullYear()} GameHaven. All rights reserved. Crafted for gamers, by gamers.
      </div>
    </footer>
  );
}

export default Footer;
