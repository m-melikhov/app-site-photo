// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/ContactForm.css'; // Виправлений шлях до стилів

export default function ContactForm() { // Виправлена назва компонента
  const TOKEN = "7111363762:AAEf795-szr9fGDGwjVJvBLcrTjQ2zQKaE8";
  const CHAT_ID = "7102789163";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [instagram, setInstagram] = useState('');
  const [comment, setComment] = useState('');
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Імʼя: </b> ${name}\n`;
    message += `<b>Номер телефону: </b> ${phone}\n`;
    message += `<b>Інстаграм: </b> ${instagram}\n`;
    message += `<b>Повідомлення: </b> ${comment}`;

    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        setName('');
        setPhone('');
        setInstagram('');
        setComment('');
        setSuccessMessage("Повідомлення надіслано");
      })
      .catch((err) => {
        console.warn(err);
        setSuccessMessage("Помилка відправки повідомлення.");
      });
  };

  return (
    <section className="ContactForm">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Імʼя:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Телефон:
          <input type="tel" name="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <label>
          Інстаграм:
          <input type="text" name="inst" value={instagram} onChange={(e) => setInstagram(e.target.value)} required />
        </label>
        <label>
          Коментар:
          <textarea name="textarea" value={comment} onChange={(e) => setComment(e.target.value)} required />
        </label>
        <button type="submit">Надіслати</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </section>
  );
}
