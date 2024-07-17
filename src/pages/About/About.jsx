import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About This App</h1>
        <p>Welcome to the ISINE Canteen website, your go-to platform for booking delicious meals at the Indian Statistical Institute North-East (ISINE). Our aim is to provide a seamless and convenient way for students, staff, and visitors to order their favorite food items from the canteen.</p>
        <p>The Indian Statistical Institute, North-East Centre, is renowned for its academic excellence and vibrant campus life. Our canteen plays a crucial role in offering a variety of meals to fuel the minds and bodies of our community.</p>
        <h2>Key Features</h2>
        <ul>
          <li><strong>Easy Ordering:</strong> Browse through our diverse menu and place your order with just a few clicks.</li>
          <li><strong>Secure Payments:</strong> We use Razorpay for fast and secure online payments.</li>
          <li><strong>Real-time Updates:</strong> Stay updated with the latest menu items and offers.</li>
          <li><strong>User-Friendly Interface:</strong> Our intuitive design ensures a smooth user experience.</li>
        </ul>
        <p>Visit our main website at <a href="https://www.isine.ac.in/" target="_blank" rel="noopener noreferrer">isine.ac.in</a> for more information about the institute.</p>
        <p>We are committed to providing the best service to our users and continuously improving our platform based on your feedback. Thank you for choosing the ISINE Canteen website for your dining needs!</p>
      </div>
    </div>
  );
};

export default About;
