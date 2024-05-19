// server.js
// eslint-disable-next-line no-undef
require('dotenv').config();
import express from 'express';
import { json } from 'body-parser';
import { post } from 'axios';

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
// eslint-disable-next-line no-undef
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
// eslint-disable-next-line no-undef
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

app.use(json());

app.post('/send-message', async (req, res) => {
  const { name, phone, instagram, comment } = req.body;

  const message = `
    Ім'я: ${name}
    Телефон: ${phone}
    Інстаграм: ${instagram}
    Коментар: ${comment}
  `;

  try {
    await post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
