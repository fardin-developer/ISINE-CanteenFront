import React from 'react';

const PaymentButton = () => {
  const upiId = '9864972356@jupiteraxis';
  const amount = 100;
  const payeeName = 'Fardin Mustaque'; // Optional, replace with the actual name if needed
  const transactionNote = 'Payment for services'; // Optional, replace with your actual note if needed

  const handlePaymentClick = () => {
    const upiUrl = `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=INR&tn=${transactionNote}`;
    console.log(upiUrl);
    window.location.href = upiUrl;
  };

  return (
    <button onClick={handlePaymentClick}>
      Pay ₹{amount} via UPI
    </button>
  );
};

export default PaymentButton;
