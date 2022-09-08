const TelegramBot = require("node-telegram-bot-api");
import type { NextApiRequest, NextApiResponse } from "next";

const TOKEN = process.env.token;
const CHAT_ID = process.env.chat_id;
const bot = new TelegramBot(TOKEN, { polling: true });

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  if (!body.name || !body.phone) {
    return res.status(400).json({ data: "Забыли ввести имя или телефон" });
  }

  const text = "Имя: " + body.name + " Телефон: " + body.phone;

  bot.sendMessage(CHAT_ID, text);

  res.status(200).end;
};

export default handler;
