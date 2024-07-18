import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../public/lotti-animation.json'; // Update the path to your Lottie animation JSON file
import './Feedback.css';

const Feedback = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='contaxtUspage'>
      <div className="left">
        <div className="contactBox">
          <h2>Your Suggestion</h2>
          <input type="text" name='name' placeholder="Your Name" />
          <input type="text" name='subject' placeholder="Your Subject" />
          <input type="email" name='email' placeholder="Your Email" />
          <textarea name="message" placeholder="Your Suggestion" cols="30" rows="10"></textarea>
          <button>Send Message</button>
        </div>
      </div>
      <div className="right">
        <img src="/giphy.webp" onClick={() => {
          alert(" In the infinite void, we seek others to understand ourselves. ~Fardin Mustaque")
        }} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Feedback;
