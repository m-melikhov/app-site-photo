// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/ConcactForm.css';

export default function ContactForm() {
  const TOKEN = "6792552927:AAEpRS9u0jwsemwtXVofm6aWnuoEg77dhO0";
  const CHAT_ID = "-1002146868687";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Імʼя: </b> ${e.target.name.value}\n`;
    message += `<b>Номер телефону: </b> ${e.target.tel.value}\n`;
    message += `<b>Iнстаграм: </b> ${e.target.inst.value}\n`;
    message += `<b>Повідомлення: </b> ${e.target.textarea.value}`;

    // eslint-disable-next-line no-undef
    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        e.target.name.value = "";
        e.target.tel.value = "";
        e.target.inst.value = "";
        e.target.textarea.value = "";
        setSuccessMessage("Повідомлення надіслано");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <section className="ContactForm">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Імʼя:
          <input type="text" name="name" />
        </label>
        <label>
          Телефон:
          <input type="tel" name="tel" />
        </label>
        <label>
          Інстаграм:
          <input type="text" name="inst" />
        </label>
        <label>
          Коментар:
          <textarea name="textarea" />
        </label>
        <button type="submit">Надіслати</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </section>
  );
}
