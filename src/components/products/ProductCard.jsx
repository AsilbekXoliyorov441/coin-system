import React from "react";
import { ShoppingBag, Heart } from "lucide-react";
import { motion } from "framer-motion";
import CoinBadge from "../ui/CoinBadge";

export default function ProductCard({
  product,
  onOpenModal,
  isLiked,
  onToggleLike,
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-sm overflow-hidden hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] hover:bg-white/[0.08] transition-colors flex flex-col h-full"
    >
      <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-5 bg-slate-900">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
        />
        <div className="absolute top-3 left-3">
          <CoinBadge amount={product.price} />
        </div>

        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleLike(product.id);
          }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-400 hover:text-pink-500 transition-colors"
        >
          <Heart
            className={`w-5 h-5 transition-transform cursor-pointer duration-300 ${isLiked ? "fill-pink-500 text-pink-500 scale-110" : "group-hover:scale-110"}`}
          />
        </button>

        <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-wider text-slate-300">
          {product.category}
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-slate-400 text-sm line-clamp-2">
            {product.description}
          </p>
        </div>

        <button
          onClick={() => onOpenModal(product)}
          className="w-full relative cursor-pointer overflow-hidden rounded-xl p-[1px] group/btn mt-5"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl opacity-60 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
          <div className="relative bg-slate-950 px-4 py-3 rounded-xl flex items-center justify-center gap-2 group-hover/btn:bg-slate-900 transition-colors duration-300">
            <ShoppingBag className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold cursor-pointer text-white text-sm">
              Sotib olish
            </span>
          </div>
        </button>
      </div>
    </motion.div>
  );
}
