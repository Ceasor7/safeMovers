'use client';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    text: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success) {
      alert('Email Send Successfully');
    } else {
      alert('Error sending email:' + data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:
        <input
          type="email"
          name="to"
          value={formData.to}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default ContactForm;
