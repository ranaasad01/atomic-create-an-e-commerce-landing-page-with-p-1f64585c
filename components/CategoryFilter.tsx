"use client";

import { categories } from "@/lib/products";

interface CategoryFilterProps {
  selected: string;
  onChange: (cat: string) => void;
}

export default function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={
            "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 " +
            (selected === cat
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
              : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600")
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
