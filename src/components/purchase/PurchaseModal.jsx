import React, { useState } from "react";
import { X, CheckCircle, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PurchaseForm from "./PurchaseForm";
import { sendOrderToTelegram } from "../../services/telegram";

export default function PurchaseModal({
  isOpen,
  onClose,
  product,
  onOrderSuccess,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOrderSubmit = async (orderData) => {
    setIsSubmitting(true);
    try {
      await sendOrderToTelegram(orderData);
      setSuccess(true);

      // LocalStorage ga saqlash uchun asosiy sahifaga uzatamiz
      if (onOrderSuccess) {
        onOrderSuccess({
          id: Date.now(),
          productName: product.name,
          image: product.image,
          price: product.price,
          quantity: orderData.quantity,
          totalPrice: orderData.totalPrice,
          date: new Date().toLocaleDateString("uz-UZ"),
          status: "Yuborildi",
        });
      }

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2500);
    } catch (error) {
      alert("Xatolik! Internet yoki Telegram sozlamalarini tekshiring.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={!isSubmitting ? onClose : undefined}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        ></motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden z-10"
        >
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-cyan-400" />
              Xaridni rasmiylashtirish
            </h2>
            <button
              onClick={onClose}
              disabled={isSubmitting}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            {success ? (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mb-4 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Buyurtma qabul qilindi!
                </h3>
                <p className="text-slate-400">
                  Ma'lumotlar botga muvaffaqiyatli jo'natildi.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="flex gap-4 mb-6 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <img
                    src={product.image}
                    alt="product"
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{product.name}</h4>
                    <p className="text-yellow-400 font-bold text-sm mt-1">
                      {product.price} Coin
                    </p>
                  </div>
                </div>
                <PurchaseForm
                  product={product}
                  onSubmit={handleOrderSubmit}
                  isSubmitting={isSubmitting}
                />
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
