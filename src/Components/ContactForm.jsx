// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/ConcactForm.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [instagram, setInstagram] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/send-message', {
        name,
        phone,
        instagram,
        comment,
      });
      if (response.data.success) {
        setMessage('Повідомлення успішно надіслано!');
      } else {
        setMessage('Щось пішло не так. Спробуйте ще раз.');
      }
    } catch (error) {
      setMessage('Помилка відправки повідомлення.');
    }
  };

  return (
    <section className="ContactForm">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Імʼя:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Телефон:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <label>
          Інстаграм:
          <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} required />
        </label>
        <label>
          Коментар:
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
        </label>
        <button type="submit">Надіслати</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
}

export default ContactForm;
