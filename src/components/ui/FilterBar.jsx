import React from "react";
import {
  ArrowUpDown,
  SlidersHorizontal,
  Heart,
  ShoppingBag,
  Store,
} from "lucide-react";

const CATEGORIES = [
  "Hamma",
  "Texnika",
  "Kiyim",
  "Kitoblar",
  "Aksessuarlar",
  "Kurslar",
];

export default function FilterBar({
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
  activeTab,
  setActiveTab,
  favoritesCount,
  ordersCount,
}) {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 mb-12 space-y-6">
      {/* TABS FOR NAVIGATION */}
      <div className="flex flex-wrap gap-4 border-b border-white/5 pb-4">
        <button
          onClick={() => setActiveTab("market")}
          className={`flex items-center cursor-pointer gap-2 px-5 py-2.5 rounded-xl font-medium transition-all text-sm ${activeTab === "market" ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20" : "bg-white/5 text-slate-400 hover:text-white"}`}
        >
          <Store className="w-4 h-4" /> Market
        </button>
        <button
          onClick={() => setActiveTab("favorites")}
          className={`flex items-center cursor-pointer gap-2 px-5 py-2.5 rounded-xl font-medium transition-all text-sm ${activeTab === "favorites" ? "bg-pink-600 text-white shadow-lg shadow-pink-500/20" : "bg-white/5 text-slate-400 hover:text-pink-400"}`}
        >
          <Heart className="w-4 h-4" /> Yoqtirganlar
          {favoritesCount > 0 && (
            <span className="bg-white/20 px-1.5 py-0.5 text-xs rounded-md ml-1">
              {favoritesCount}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`flex items-center cursor-pointer gap-2 px-5 py-2.5 rounded-xl font-medium transition-all text-sm ${activeTab === "orders" ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20" : "bg-white/5 text-slate-400 hover:text-purple-400"}`}
        >
          <ShoppingBag className="w-4 h-4" /> Buyurtmalarim
          {ordersCount > 0 && (
            <span className="bg-white/20 px-1.5 py-0.5 text-xs rounded-md ml-1">
              {ordersCount}
            </span>
          )}
        </button>
      </div>

      {/* FILTER & SORT CONTROLS (Only show on Market or Favorites tabs) */}
      {activeTab !== "orders" && (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-2xl backdrop-blur-md">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-slate-500 mr-2 hidden sm:block" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 cursor-pointer rounded-full text-xs font-semibold transition-all ${selectedCategory === cat ? "bg-white text-slate-950 font-bold" : "bg-white/5 text-slate-400 hover:bg-white/10"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sorting */}
          <div className="flex items-center gap-2 border-t border-white/5 pt-3 md:pt-0 md:border-t-0">
            <ArrowUpDown className="w-4 h-4 text-slate-500" />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-slate-900 border border-white/10 text-xs text-slate-300 rounded-xl px-3 py-2 outline-none focus:border-cyan-500 transition-colors cursor-pointer"
            >
              <option value="default">Saralash: Standart</option>
              <option value="low-to-high">Coin: Arzondan Qimmatga</option>
              <option value="high-to-low">Coin: Qimmatdan Arzonga</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
