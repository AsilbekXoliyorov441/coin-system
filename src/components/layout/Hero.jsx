
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Award, Gift } from "lucide-react";

export default function Hero() {
  return (
    <section  className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Aurora Effects */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

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

      {/* Floating Coins */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 360],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-3xl select-none"
          style={{
            left: `${10 + i * 10}%`,
            top: `${15 + (i % 3) * 20}%`,
          }}
        >
          🪙
        </motion.div>
      ))}

      {/* Floating Icons */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute top-24 left-[15%] hidden lg:block"
      >
        <Sparkles className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-24 right-[15%] hidden lg:block"
      >
        <Award className="w-12 h-12 text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full border border-cyan-500/30 bg-white/5 backdrop-blur-xl"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 animate-ping"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400"></span>
          </span>

          <span className="text-cyan-300 font-semibold tracking-widest uppercase text-xs">
            Bilim Bebaho Mukofot Tizimi
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-5xl md:text-7xl lg:text-5xl font-black text-white leading-tight"
        >
          Bilimingizni
          <br />

          <motion.span
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              bg-[length:300%_300%]
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              via-purple-500
              to-cyan-400
              bg-clip-text
              text-transparent
              drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]
            "
          >
            Sovg'alarga Almashtiring
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="max-w-2xl mx-auto mt-8 text-lg md:text-xl text-slate-300 leading-relaxed"
        >
          Yig'ilgan coinlaringiz orqali eksklyuziv mahsulotlar xarid qiling.
          Premium dizayn, yuqori sifat va tezkor telegram yetkazib berish
          tizimi.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 50px rgba(34,211,238,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="
              px-8 py-4
              rounded-2xl
              font-bold
              text-white
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
            "
          >
            Sovg'alarni Ko'rish
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            className="
              px-8 py-4
              rounded-2xl
              font-bold
              text-white
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
            "
          >
            Batafsil Ma'lumot
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
          }}
          className="mt-16 flex flex-wrap justify-center gap-10"
        >
          <div>
            <h3 className="text-3xl font-bold text-white">10K+</h3>
            <p className="text-slate-400">Foydalanuvchilar</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">50+</h3>
            <p className="text-slate-400">Mukofotlar</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">24/7</h3>
            <p className="text-slate-400">Telegram Xizmat</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
