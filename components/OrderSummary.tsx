"use client";

import Link from "next/link";
import { ShoppingCart, ArrowRight, Lock } from 'lucide-react';
import { useCart } from "@/lib/cart-context";

export default function OrderSummary() {
  const { totalPrice, totalItems, clearCart } = useCart();

  const shipping = totalPrice >= 50 ? 0 : 5.99;
  const tax = totalPrice * 0.08;
  const grandTotal = totalPrice + shipping + tax;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})</span>
          <span className="font-medium text-gray-900">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Shipping</span>
          {shipping === 0 ? (
            <span className="text-green-600 font-semibold">Free</span>
          ) : (
            <span className="font-medium text-gray-900">${shipping.toFixed(2)}</span>
          )}
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Estimated Tax (8%)</span>
          <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
        </div>
      </div>

      {totalPrice < 50 && (
        <div className="bg-indigo-50 rounded-xl p-3 mb-5 text-xs text-indigo-700 font-medium">
          Add ${(50 - totalPrice).toFixed(2)} more to get free shipping!
        </div>
      )}

      <div className="border-t border-gray-100 pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-900">Total</span>
          <span className="text-xl font-extrabold text-gray-900">${grandTotal.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-indigo-700 transition-colors mb-3">
        <Lock className="w-4 h-4" />
        Proceed to Checkout
        <ArrowRight className="w-4 h-4" />
      </button>

      <Link
        href="/"
        className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors text-sm"
      >
        <ShoppingCart className="w-4 h-4" />
        Continue Shopping
      </Link>

      <button
        onClick={clearCart}
        className="w-full mt-3 text-xs text-gray-400 hover:text-red-500 transition-colors py-2"
      >
        Clear cart
      </button>

      {/* Trust badges */}
      <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col gap-2">
        {["Secure SSL Checkout", "30-Day Free Returns", "Price Match Guarantee"].map((badge) => (
          <div key={badge} className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-2.5 h-2.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
}
