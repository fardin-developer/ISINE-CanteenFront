import React from 'react'
import './OrderHistory.css'

const OrderHistory = () => {
  const orders = [
    {
      id: 1,
      name: 'Chicken Tikka Biryani',
      price: 360,
      date: '29/02/2024',
      description:
        'Afghani Chicken Tikka Biryani Boneless for 1 Cheeral Eats | Malad West',
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 2,
      name: 'Chicken Pulao',
      price: 410,
      date: '16/02/2024',
      description:
        'Afghani Chicken Tikka Biryani Boneless for 1 Cheeral Eats | Malad West',
      imageUrl: 'path/to/image2.jpg'
    },
    {
      id: 3,
      name: 'Shahi Murgh Biryani',
      price: 350,
      date: '02/02/2024',
      description:
        'Afghani Chicken Tikka Biryani Boneless for 1 Cheeral Eats | Malad West',
      imageUrl: 'path/to/image3.jpg'
    },
    {
      id: 4,
      name: 'Pot Egg Biryani',
      price: 380,
      date: '25/01/2024',
      description:
        'Afghani Chicken Tikka Biryani Boneless for 1 Cheeral Eats | Malad West',
      imageUrl: 'path/to/image4.jpg'
    },
    {
      id: 5,
      name: 'Prawn Biryani',
      price: 430,
      date: '20/01/2024',
      description:
        'Afghani Chicken Tikka Biryani Boneless for 1 Cheeral Eats | Malad West',
      imageUrl: 'path/to/image5.jpg'
    }
  ]

  return (
    <div className='order-history-container'>
      <h2>Order History</h2>

      <div className='orderMain'>
       
        <div className='orderItem'>
          <div className='orderLeft'>
            <img src='isineLogo.png' alt='' srcset='' />
          </div>
          <div className='orderRight'>
            <h3>Shahi Murgh Biryani</h3>
            <p>Afgani Chicken biriyani boneless</p>
            <p className='category'>Launch</p>
            <div className='bottomOrder'>
              <h3 className='price'>$400</h3>
              <button className='reorder-button'>24/032002</button>
            </div>{' '}
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default OrderHistory
