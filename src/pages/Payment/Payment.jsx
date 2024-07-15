import React from 'react'
import PaymentButton from '../../components/paymentButton/Payment'
import './payment.css'

const Payment = () => {
  return (
    <div className='payment'>
      <div className='paymentBox'>
        <h1>Amount ₹100</h1>

        <div className='paymentImg'>
          <img src='payment.jpg' alt='' draggable ="false"/>
        </div>
        <span>
          <h2>Or</h2>
        </span>
        <div className='payBtn'>
          <PaymentButton />
        </div>
      </div>
    </div>
  )
}

export default Payment
