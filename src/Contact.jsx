// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submittedMessages, setSubmittedMessages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = { ...formData };
    setSubmittedMessages([...submittedMessages, newMessage]);
    setFormData({ name: '', email: '', message: '' }); 
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = submittedMessages.filter((_, i) => i !== index);
    setSubmittedMessages(updatedMessages);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-container">
        <div className="contact-card">
          <h2>About Our Company</h2>
          <p>
           Nous somme une entreprise qui répond à vos besoin en terme
          </p>
        </div>

        <div className="contact-card">
          <h2>Notre équipe</h2>
          <p><strong>Laura ASSION:</strong> Developpeuse spécialisé dans les sites web et jeux vidéos</p>
          <p><strong>Mathilde BASSADOU:</strong> Developpeuse web et mobile </p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" color='red'>Envoi du message</button>
      </form>

    
      <div className="submitted-messages">
        <h2>Messages</h2>
        {submittedMessages.length === 0 && <p>Aucun message.</p>}
        {submittedMessages.map((msg, index) => (
          <div key={index} className="message-card">
            <p><strong>Nom:</strong> {msg.name}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Message:</strong> {msg.message}</p>
            <button onClick={() => handleDeleteMessage(index)}>supprimé</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
