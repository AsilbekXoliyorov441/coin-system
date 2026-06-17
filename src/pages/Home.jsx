import React, { useState, useEffect } from "react";
import GlowBackground from "../components/effects/GlowBackground";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import FilterBar from "../components/ui/FilterBar";
import ProductGrid from "../components/products/ProductGrid";
import ProductCard from "../components/products/ProductCard";
import PurchaseModal from "../components/purchase/PurchaseModal";
import { Coins, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "../data/product";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Hamma");
  const [sortOrder, setSortOrder] = useState("default");
  const [activeTab, setActiveTab] = useState("market"); // market, favorites, orders

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // LocalStorage States
  const [likedProducts, setLikedProducts] = useState(() => {
    const saved = localStorage.getItem("coin_market_liked");
    return saved ? JSON.parse(saved) : [];
  });

  const [myOrders, setMyOrders] = useState(() => {
    const saved = localStorage.getItem("coin_market_orders");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("coin_market_liked", JSON.stringify(likedProducts));
  }, [likedProducts]);

  useEffect(() => {
    localStorage.setItem("coin_market_orders", JSON.stringify(myOrders));
  }, [myOrders]);

  // Like Toggle Function
  const handleToggleLike = (id) => {
    setLikedProducts((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  // Order Success Function
  const handleNewOrder = (newOrder) => {
    setMyOrders((prev) => [newOrder, ...prev]);
  };

  // FILTRLASH VA SARALASH MANTIQI
  let baseProducts = products;
  if (activeTab === "favorites") {
    baseProducts = products.filter((p) => likedProducts.includes(p.id));
  }

  const filteredProducts = baseProducts.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Hamma" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-to-high") return a.price - b.price;
    if (sortOrder === "high-to-low") return b.price - a.price;
    return 0; // default
  });

  return (
    <div className="min-h-screen bg-slate-950 font-sans relative pb-12">
      <GlowBackground />
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Hero />

      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoritesCount={likedProducts.length}
        ordersCount={myOrders.length}
      />

      {/* RENDER VIEW ACCORDING TO TAB */}
      {activeTab === "orders" ? (
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            Mening Buyurtmalar Tarixim
          </h2>
          {myOrders.length === 0 ? (
            <div className="text-center py-16 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-md text-slate-500">
              Sizda hali buyurtmalar mavjud emas.
            </div>
          ) : (
            <div className="space-y-4">
              {myOrders.map((order) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={order.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md hover:bg-white/[0.07] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={order.image}
                      alt=""
                      className="w-16 h-16 rounded-xl object-cover border border-white/10"
                    />
                    <div>
                      <h4 className="font-bold text-white text-lg">
                        {order.productName}
                      </h4>
                      <div className="flex items-center gap-4 text-xs text-slate-400 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {order.date}
                        </span>
                        <span>
                          Soni: <b>{order.quantity} ta</b>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-6 border-t border-white/5 pt-3 sm:pt-0 sm:border-0">
                    <div className="text-right">
                      <p className="text-xs text-slate-500">Jami to'lov</p>
                      <span className="text-lg font-bold text-yellow-400 flex items-center gap-1 justify-end">
                        {order.totalPrice} <Coins className="w-4 h-4" />
                      </span>
                    </div>
                    <span className="flex items-center gap-1 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" /> {order.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-24">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenModal={() => {
                setSelectedProduct(product);
                setIsModalOpen(true);
              }}
              isLiked={likedProducts.includes(product.id)}
              onToggleLike={handleToggleLike}
            />
          ))}
          {sortedProducts.length === 0 && (
            <div className="col-span-full text-center py-20 text-slate-500">
              Hech qanday mahsulot topilmadi.
            </div>
          )}
        </div>
      )}

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setTimeout(() => setSelectedProduct(null), 300);
        }}
        product={selectedProduct}
        onOrderSuccess={handleNewOrder}
      />
    </div>
  );
}
