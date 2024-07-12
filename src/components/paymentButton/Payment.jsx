import React from 'react';

const PaymentButton = () => {
  const upiId = '9864972356@jupiteraxis';
  const amount = 100;
  const payeeName = 'Your Name'; // Optional, replace with the actual name if needed
  const transactionNote = 'Payment for services'; // Optional, replace with your actual note if needed

  const handlePaymentClick = () => {
    const upiUrl = `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=INR&tn=${transactionNote}`;

    // Check if the device is Android or iOS
    const isAndroid = /android/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isAndroid) {
      // Construct intent URL for Android
      const encodedUpiUrl = encodeURIComponent(upiUrl);
      const intentUrl = `intent://${encodedUpiUrl}#Intent;scheme=upi;package=com.phonepe.app;package=com.google.android.apps.nbu.paisa.user;package=com.whatsapp;end`;
      window.location.href = intentUrl;
    } else if (isIOS) {
      // Directly use the UPI URL for iOS
      window.location.href = upiUrl;
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
