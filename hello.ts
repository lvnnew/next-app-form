import { token, chat_id } from "./config.json";
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(token, { polling: true });

// TS_NODE_PROJECT='./tsconfig-ts-node.json' ts-node hello.ts

const app = () => {
  return bot.sendMessage(chat_id, "Hello)");
};

app();

export default app;
