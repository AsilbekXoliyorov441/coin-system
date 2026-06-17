// O'zingizning Token va Chat ID laringizni kiriting
const BOT_TOKEN = "SIZNING_BOT_TOKENINGIZ";
const CHAT_ID = "SIZNING_CHAT_ID_RAQAMINGIZ";

export const sendOrderToTelegram = async (orderData) => {
  const textMessage = `
🛒 <b>YANGI BUYURTMA (Premium Market)</b>

👤 <b>O'quvchi:</b> ${orderData.firstName} ${orderData.lastName}
🎁 <b>Mahsulot:</b> ${orderData.productName}
🔢 <b>Soni:</b> ${orderData.quantity} ta
💰 <b>Umumiy Qiymat:</b> ${orderData.totalPrice} Coin
📝 <b>Izoh:</b> ${orderData.note || "Yo'q"}
  `;

  const response = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: textMessage,
        parse_mode: "HTML",
      }),
    },
  );

  if (!response.ok) throw new Error("Telegram xatolik");
  return response.json();
};
