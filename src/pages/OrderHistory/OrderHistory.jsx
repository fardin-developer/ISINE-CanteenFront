import React, { useEffect, useState } from 'react';
import './OrderHistory.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const handleBackClick = () => {
    window.location.href = '/profile';
  }

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('cookies'));
        const response = await fetch('http://localhost:8000/api/v1/orders/showAllMyOrders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setOrders(data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className='order-history-container'>
      <div className='profileNav'>
            <div className='profileNavLeft' id='orderNav' onClick={handleBackClick}>
              <img src='arrow.png' alt='' srcSet='' width='20px' />
            </div>
            <div className='profileNavRight'></div>
          </div>
          <h2>Order History</h2>

      <div className='orderMain'>
        {orders.map(order => (
          order.orderItems.map(item => (
            <div className='orderItem' key={item._id}>
              <div className='orderLeft'>
                <img src={item.image} alt={item.name} />
              </div>
              <div className='orderRight'>
                <h3>{item.name}</h3>
                <p>{item.description || 'No description available'}</p>
                <p className='category'>Category</p>
                <div className='bottomOrder'>
                  <h3 className='price'>₹{item.price}</h3>
                  <button className='reorder-button'>{new Date(order.createdAt).toLocaleDateString()}</button>
                </div>
              </div>
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
