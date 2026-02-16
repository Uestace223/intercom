---

# 📡 Stac Price Bot Agent Skill

## Description

This fork extends Intercom by integrating a Telegram-based cryptocurrency
tracking module. The skill enables agents and users to query live crypto prices
via Telegram interface using CoinGecko public API.

This demonstrates practical agent utility built on Intercom infrastructure.

---

## 🔧 Agent Setup Instructions

1. Ensure Intercom peer is properly initialized.
2. Navigate to the Telegram bot module:

   cd telegram-crypto-bot

3. Install required dependencies:

   npm install

4. Export Telegram Bot Token:

   export TELEGRAM_TOKEN=your_token_here

5. Launch the bot:

   node index.js

---

## 📲 Supported Commands

/price <coin_name>

Example:

/price bitcoin
/price ethereum

---

## 🌐 API Source

Data fetched from:
https://api.coingecko.com/api/v3/simple/price

---

## 🧠 Agent Capability Extension

This skill extends Intercom’s communication layer into
real-world data retrieval functionality.

It showcases:

- External API interaction
- Agent-triggered utility execution
- Telegram integration as control interface
- Modular extension architecture
