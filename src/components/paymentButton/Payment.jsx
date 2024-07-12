import React from 'react';

const PaymentButton = () => {
  const upiId = '9864972356@jupiteraxis';
  const amount = 100;
  const payeeName = 'Your Name'; // Optional, replace with the actual name if needed
  const transactionNote = 'Payment for services'; // Optional, replace with your actual note if needed
 const upiUrl = `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=INR&tn=${transactionNote}`;
  
  const tryOpenUrl = (url, fallbackUrl) => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    iframe.src = url;

    setTimeout(() => {
      document.body.removeChild(iframe);
      if (fallbackUrl) {
        tryOpenUrl(fallbackUrl);
      }
    }, 1000); // wait for 1 second before trying the next URL
  };

  const handlePaymentClick = () => {
    const isAndroid = /android/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isAndroid || isIOS) {
      const gpayUrl = `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=INR&tn=${transactionNote}&pn=Google Pay&tr=gpay`;
      const phonepeUrl = `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=INR&tn=${transactionNote}&pn=PhonePe&tr=phonepe`;
      const whatsappUrl = `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=INR&tn=${transactionNote}&pn=WhatsApp&tr=whatsapp`;

      tryOpenUrl(gpayUrl, phonepeUrl, whatsappUrl);
    } else {
      alert("UPI payment is only supported on Android and iOS devices.");
    }
  };

  return (
    <button onClick={handlePaymentClick}>
      Pay ₹{amount} via UPI
    </button>
  );
};

export default PaymentButton;