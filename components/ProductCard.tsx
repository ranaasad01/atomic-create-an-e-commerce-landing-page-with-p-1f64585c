"use client";

import { Star, ShoppingCart, Check } from 'lucide-react';
import { Product } from "@/lib/types";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.floor(rating);
        const half = !filled && star - 0.5 <= rating;
        const cls = filled
          ? "text-yellow-400 fill-yellow-400"
          : half
          ? "text-yellow-400 fill-yellow-200"
          : "text-gray-200 fill-gray-200";
        return <Star key={star} className={"w-3.5 h-3.5 " + cls} />;
      })}
    </div>
  );
}

const badgeConfig: Record<string, { label: string; className: string }> = {
  sale: { label: "Sale", className: "bg-red-500 text-white" },
  featured: { label: "Featured", className: "bg-indigo-600 text-white" },
  new: { label: "New", className: "bg-green-500 text-white" },
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const btnClass = added
    ? "bg-green-500 text-white"
    : "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95";

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && badgeConfig[product.badge] && (
          <span className={"absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide " + badgeConfig[product.badge].className}>
            {badgeConfig[product.badge].label}
          </span>
        )}
        {discount && (
          <span className="absolute top-3 right-3 text-xs font-bold bg-yellow-400 text-yellow-900 px-2.5 py-1 rounded-full">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-2 line-clamp-2 flex-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className={"w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 " + btnClass}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
