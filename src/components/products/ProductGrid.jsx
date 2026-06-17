import React from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

export default function ProductGrid({ products, onOpenModal }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 text-slate-500 relative z-10">
        Hech qanday mahsulot topilmadi.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto pb-24"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onOpenModal={onOpenModal}
        />
      ))}
    </motion.div>
  );
}
