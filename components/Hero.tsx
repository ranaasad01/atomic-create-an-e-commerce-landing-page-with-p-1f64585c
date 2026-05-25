"use client";

import Link from "next/link";
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-400 rounded-full opacity-10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400 rounded-full opacity-5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              <Star className="w-3 h-3 fill-yellow-900" />
              Summer Sale — Up to 40% Off
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Style That{" "}
              <span className="text-yellow-400">Speaks</span>{" "}
              for Itself
            </h1>

            <p className="text-indigo-200 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Discover curated collections of premium electronics, fashion, and lifestyle products — all at prices that make sense.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/#products"
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/#newsletter"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/40 font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-base"
              >
                Get Exclusive Deals
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-indigo-200 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Free shipping over $50
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                30-day returns
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Secure checkout
              </div>
            </div>
          </div>

          {/* Right — Hero Image Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-indigo-500/30">
                <img
                  src="https://m.media-amazon.com/images/I/61RahTQtAqL._AC_UF894,1000_QL80_.jpg"
                  alt="Wireless Headphones"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-indigo-500/30">
                <img
                  src="https://m.media-amazon.com/images/I/61RahTQtAqL._AC_UF894,1000_QL80_.jpg"
                  alt="Leather Watch"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden aspect-square bg-indigo-500/30">
                <img
                  src="https://m.media-amazon.com/images/I/61RahTQtAqL._AC_UF894,1000_QL80_.jpg"
                  alt="Running Sneakers"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-indigo-500/30">
                <img
                  src="https://content.woolovers.com/img/747x856/6b39d-46431_k3m_navy_m_11.jpg"
                  alt="Merino Sweater"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
