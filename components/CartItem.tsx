"use client";

import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from "@/lib/types";
import { useCart } from "@/lib/cart-context";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { increment, decrement, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex gap-4 py-5 border-b border-gray-100 last:border-0">
      {/* Image */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-0.5">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-1 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-base font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Quantity + Remove */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => decrement(product.id)}
              className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-6 text-center text-sm font-bold text-gray-900">{quantity}</span>
            <button
              onClick={() => increment(product.id)}
              className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-gray-900">
              ${(product.price * quantity).toFixed(2)}
            </span>
            <button
              onClick={() => removeItem(product.id)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
