import React from "react";
import { Sparkles, Search } from "lucide-react";
import CoinBadge from "../ui/CoinBadge";

export default function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <nav className="relative z-[10000] border-b border-white/5 bg-slate-950/40 backdrop-blur-xl sticky top-0">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            CoinMarket
          </span>
        </div>

        <div className="hidden md:flex relative w-[400px]">
          <input
            type="text"
            placeholder="Mahsulotlarni qidiring..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white placeholder-slate-400 backdrop-blur-sm"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
        </div>

        <div className="flex items-center gap-4">
          <CoinBadge amount="12,500" className="px-4 py-2" />
        </div>
      </div>
    </nav>
  );
}
