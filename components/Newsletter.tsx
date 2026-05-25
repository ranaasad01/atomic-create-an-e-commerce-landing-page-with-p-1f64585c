"use client";

import { useState } from "react";
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-indigo-600">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl mb-6">
          <Mail className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Get Exclusive Deals First
        </h2>
        <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">
          Join over 50,000 shoppers who get early access to sales, new arrivals, and members-only discounts delivered straight to their inbox.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 bg-white/20 text-white font-semibold px-8 py-4 rounded-xl">
            <Check className="w-5 h-5 text-green-300" />
            You&apos;re on the list! Check your inbox for a welcome gift.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-xl text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/50 bg-white"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-yellow-900 font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-300 transition-colors text-sm whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        )}

        <p className="text-indigo-300 text-xs mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
