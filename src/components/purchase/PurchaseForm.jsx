import React, { useState } from "react";
import { Send, Coins } from "lucide-react";

export default function PurchaseForm({ product, onSubmit, isSubmitting }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    quantity: 1,
    note: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      productName: product.name,
      totalPrice: product.price * formData.quantity,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-400 uppercase tracking-wider pl-1 mb-1 block">
            Ism
          </label>
          <input
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none"
            placeholder="Ismingiz"
          />
        </div>
        <div>
          <label className="text-xs text-slate-400 uppercase tracking-wider pl-1 mb-1 block">
            Familiya
          </label>
          <input
            required
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none"
            placeholder="Familiyangiz"
          />
        </div>
      </div>
      <div>
        <label className="text-xs text-slate-400 uppercase tracking-wider pl-1 mb-1 block">
          Soni
        </label>
        <input
          required
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          min="1"
          max="10"
          type="number"
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none"
        />
      </div>
      <div>
        <label className="text-xs text-slate-400 uppercase tracking-wider pl-1 mb-1 block">
          Izoh (Ixtiyoriy)
        </label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          rows="2"
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none resize-none"
          placeholder="O'lcham, rang..."
        ></textarea>
      </div>

      <div className="py-4 flex justify-between items-center border-t border-white/10 mt-4">
        <span className="text-slate-400">Umumiy:</span>
        <span className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
          {product.price * formData.quantity} <Coins className="w-5 h-5" />
        </span>
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
      >
        {isSubmitting ? (
          "Yuborilmoqda..."
        ) : (
          <>
            Tasdiqlash <Send className="w-4 h-4 ml-1" />
          </>
        )}
      </button>
    </form>
  );
}
