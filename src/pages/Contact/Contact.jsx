import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="info-part">
      <h2>We're here to help!</h2>
      <h5>
        We're here to help with any questions or concerns you might have.
        Contact us through any of the following ways:
      </h5>
      <p>
        <b>Phone:</b> +91 1234567890<br />
        <b>Email:</b> xyz@gmail.com<br />
        <b>WhatsApp: </b>
        <a href="https://wa.me/YourWhatsAppNumber" className="whatsapp-link">Send us a message on WhatsApp here</a>.<br />
        <b>Address:</b><br />
        [Your Restaurant Address]<br />
        <b>Opening Hours:</b><br />
        Monday - Friday: [Opening Hours]<br />
        Saturday - Sunday: [Opening Hours]
      </p>
      <h5>
        We look forward to hearing from you and assisting you with any inquiries!
      </h5>
    </div>
  );
};

export default Contact;
