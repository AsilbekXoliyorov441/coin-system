import React from "react";
import { motion } from "framer-motion";

export default function GlowBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#020617]">
      {/* Hero Grid bilan bir xil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* CYAN AURORA */}

      {/* PURPLE AURORA */}

      {/* Hero gradient ranglariga mos blend */}

      {/* Cyan -> Blue -> Purple glow */}
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[140px]"
      />

      {/* Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-overlay" />
    </div>
  );
}
