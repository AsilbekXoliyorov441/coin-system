import React from "react";
import { Coins } from "lucide-react";

export default function CoinBadge({ amount, className = "" }) {
  return (
    <div
      className={`flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1.5 rounded-full backdrop-blur-md ${className}`}
    >
      <Coins className="w-4 h-4 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
      <span className="font-bold text-yellow-400 text-sm tracking-wide">
        {amount}
      </span>
    </div>
  );
}
