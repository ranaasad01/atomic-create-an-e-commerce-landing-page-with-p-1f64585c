"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-1">Our Collection</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Trending Products</h2>
            <p className="text-gray-500 mt-1">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""} available
            </p>
          </div>
          <CategoryFilter selected={selectedCategory} onChange={setSelectedCategory} />
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-medium">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
