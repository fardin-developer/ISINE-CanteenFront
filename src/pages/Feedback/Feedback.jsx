import React, { useState } from 'react';
import './Feedback.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic (e.g., send data to a server)
  };

  return (
    <div className="feedback-form-container">
     
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group horizontal">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group-1">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
             placeholder="Write a subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-2">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Write your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
