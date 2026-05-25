"use client";

import Link from "next/link";
import { Sparkles, MessageCircle as Twitter, Code2 as Github, Globe as Facebook, Briefcase as Linkedin } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: "All Products", href: "/#products" },
    { label: "Electronics", href: "/#products" },
    { label: "Clothing", href: "/#products" },
    { label: "Accessories", href: "/#products" },
    { label: "Lifestyle", href: "/#products" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Track Order", href: "#" },
    { label: "Returns & Refunds", href: "#" },
    { label: "Shipping Info", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Affiliates", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Lumé<span className="text-indigo-400">Shop</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Curated products for modern living. Quality you can trust, prices you&apos;ll love.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Github, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} LuméShop. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
