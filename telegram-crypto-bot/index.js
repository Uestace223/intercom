const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id,
    "🚀 Stac Price Bot Active!\n\nUse:\n/price bitcoin\n/price ethereum"
  );
});

bot.onText(/\/price (.+)/, async (msg, match) => {
  const coin = match[1].toLowerCase();

  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;
    const res = await fetch(url);
    const data = await res.json();

    if (!data[coin]) {
      return bot.sendMessage(msg.chat.id, "❌ Coin not found.");
    }

    bot.sendMessage(msg.chat.id,
      `💰 ${coin.toUpperCase()} Price: $${data[coin].usd}`
    );

  } catch (err) {
    console.log(err);
    bot.sendMessage(msg.chat.id, "⚠️ Error fetching price.");
  }
});

console.log("Stac Price Bot running...");
