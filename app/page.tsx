import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Promo Strip */}
      <div className="bg-yellow-400 py-3 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="text-yellow-900 text-sm font-bold flex items-center gap-8">
              <span>🚚 Free Shipping Over $50</span>
              <span>⭐ 4.8/5 Average Rating</span>
              <span>🔄 30-Day Returns</span>
              <span>🔒 Secure Checkout</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "50K+", label: "Happy Customers" },
              { value: "1,200+", label: "Products Available" },
              { value: "4.8★", label: "Average Rating" },
              { value: "99%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-extrabold text-indigo-600">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid with Category Filter */}
      <ProductGrid />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </main>
  );
}
