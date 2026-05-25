import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviewCount: 2341,
    image: "https://m.media-amazon.com/images/I/61RahTQtAqL._AC_UF894,1000_QL80_.jpg",
    category: "Electronics",
    badge: "sale",
    description: "Premium sound quality with active noise cancellation and 30-hour battery life.",
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    price: 149.99,
    rating: 4.7,
    reviewCount: 876,
    image: "https://m.media-amazon.com/images/I/61RahTQtAqL._AC_UF894,1000_QL80_.jpg",
    category: "Accessories",
    badge: "featured",
    description: "Elegant timepiece with genuine leather strap and sapphire crystal glass.",
  },
  {
    id: 3,
    name: "Ultralight Running Sneakers",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.6,
    reviewCount: 1543,
    image: "https://m.media-amazon.com/images/I/61RahTQtAqL._AC_UF894,1000_QL80_.jpg",
    category: "Footwear",
    badge: "sale",
    description: "Engineered mesh upper with responsive foam cushioning for all-day comfort.",
  },
  {
    id: 4,
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    rating: 4.5,
    reviewCount: 987,
    image: "https://cdn.thewirecutter.com/wp-content/media/2024/11/portablebluetoothspeakers-2048px-9130.jpg?width=2048&quality=60&crop=2048:1365&auto=webp",
    category: "Electronics",
    badge: "new",
    description: "360° surround sound with waterproof design and 12-hour playtime.",
  },
  {
    id: 5,
    name: "Merino Wool Crewneck Sweater",
    price: 69.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviewCount: 654,
    image: "https://content.woolovers.com/img/747x856/6b39d-46431_k3m_navy_m_11.jpg",
    category: "Clothing",
    badge: "sale",
    description: "Sustainably sourced merino wool, naturally temperature-regulating and ultra-soft.",
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    price: 34.99,
    rating: 4.7,
    reviewCount: 3210,
    image: "https://topthetater.com/wp-content/uploads/stainless-steel-water-bottle-white-17-oz-back-65de52b9e6bb1.jpg",
    category: "Lifestyle",
    badge: "featured",
    description: "Double-wall vacuum insulation keeps drinks cold 24h or hot 12h.",
  },
  {
    id: 7,
    name: "Slim Fit Chino Pants",
    price: 54.99,
    rating: 4.4,
    reviewCount: 432,
    image: "https://www.roddandgunn.com/on/demandware.static/-/Sites-roddandgunn-master-catalog/default/dwc913ca7e/images/007173/VP0611_PEBBLE_FT_LGE.jpg",
    category: "Clothing",
    description: "Stretch cotton blend for a tailored look with all-day flexibility.",
  },
  {
    id: 8,
    name: "Leather Crossbody Bag",
    price: 119.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviewCount: 765,
    image: "https://buffalojackson.com/cdn/shop/products/womans-vintage-leather-crossbody-purse-lifestyle_2000x.jpg?v=1755695325",
    category: "Accessories",
    badge: "sale",
    description: "Full-grain leather with adjustable strap and multiple interior pockets.",
  },
  {
    id: 9,
    name: "Smart Fitness Tracker",
    price: 99.99,
    rating: 4.6,
    reviewCount: 1876,
    image: "https://m.media-amazon.com/images/I/61L0IA+A-LL.jpg",
    category: "Electronics",
    badge: "new",
    description: "Track heart rate, sleep, steps, and workouts with a 7-day battery.",
  },
  {
    id: 10,
    name: "Canvas Tote Bag",
    price: 24.99,
    rating: 4.5,
    reviewCount: 2109,
    image: "https://picsum.photos/seed/c08266f8dd37/800/600",
    category: "Lifestyle",
    description: "Heavy-duty organic cotton canvas with reinforced handles and inner pocket.",
  },
  {
    id: 11,
    name: "Classic White Sneakers",
    price: 74.99,
    rating: 4.7,
    reviewCount: 3456,
    image: "https://m.media-amazon.com/images/I/61xIV8tFftL._AC_UY900_.jpg",
    category: "Footwear",
    badge: "featured",
    description: "Timeless silhouette with premium leather upper and cushioned insole.",
  },
  {
    id: 12,
    name: "Polarized Sunglasses",
    price: 44.99,
    originalPrice: 69.99,
    rating: 4.5,
    reviewCount: 987,
    image: "https://outdoormaster.com/cdn/shop/files/01-black_frame_purple_vlt18_hawk_hd_polarized_sport_sunglasses.jpg?v=1740119756&width=1946",
    category: "Accessories",
    badge: "sale",
    description: "UV400 polarized lenses with lightweight TR90 frame for all-day wear.",
  },
];

export const categories = ["All", "Electronics", "Clothing", "Footwear", "Accessories", "Lifestyle"];
