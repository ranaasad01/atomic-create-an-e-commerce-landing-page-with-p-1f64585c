"use client";

import Link from "next/link";
import { ShoppingCart, ArrowLeft, Package } from 'lucide-react';
import { useCart } from "@/lib/cart-context";
import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";

export default function CartPage() {
  const { items } = useCart();

  const totalQty = items.reduce((s, i) => s + i.quantity, 0);
  const qtyLabel = totalQty === 1 ? "1 item" : totalQty + " items";

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back link */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shopping
          </Link>
        </div>

        {/* Page title */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <ShoppingCart className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Your Cart</h1>
            <p className="text-sm text-gray-500">
              {items.length === 0 ? "Your cart is empty" : qtyLabel + " in your cart"}
            </p>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
              <Package className="w-12 h-12 text-indigo-300" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-8 max-w-sm">
              Looks like you haven&apos;t added anything yet. Explore our collection and find something you love!
            </p>
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-indigo-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              Start Shopping
            </Link>

            <div className="mt-16 w-full max-w-2xl">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">
                You might like
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "Wireless Headphones", price: "$79.99", img: "https://m.media-amazon.com/images/I/61RahTQtAqL._AC_UF894,1000_QL80_.jpg" },
                  { name: "Leather Watch", price: "$149.99", img: "https://m.media-amazon.com/images/I/61RahTQtAqL._AC_UF894,1000_QL80_.jpg" },
                  { name: "Running Sneakers", price: "$89.99", img: "https://m.media-amazon.com/images/I/61RahTQtAqL._AC_UF894,1000_QL80_.jpg" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href="/#products"
                    className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-semibold text-gray-900 line-clamp-1">{item.name}</p>
                      <p className="text-xs text-indigo-600 font-bold mt-0.5">{item.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-base font-bold text-gray-900 mb-2">
                  Cart Items ({items.length})
                </h2>
                <div>
                  {items.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Have a promo code?</h3>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter code (e.g. SAVE20)"
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
                  />
                  <button className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
