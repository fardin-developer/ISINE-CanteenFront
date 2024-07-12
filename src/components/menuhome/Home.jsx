import React, { useState, useEffect } from 'react';
import ProductsCard from '../../components/MenuCard/Menucard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/meals', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZnNkZmQiLCJ1c2VySWQiOiI2NjYzZjQ2NDA4Y2Y1NDVjNDQ5YWE2ZDQiLCJyb2xlIjoidXNlciIsImlhdCI6MTcyMDc3ODgxMSwiZXhwIjoxNzIwODY1MjExfQ.vPudsD8AruA2F9KfFRzr_WTKpQCUHxS2ZUYhd4r0Km0',
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setProducts(data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section id="home" style={{display:'flex',justifyContent:'center'}}>
        <div className="container">
          <div className="home_content">
            <div className="main-card--container">
              {loading ? (
                <p>Loading...</p>
              ) : (
                products.length < 1 ? (
                  <p>No products available</p>
                ) : (
                  products.map((product) => (
                    <ProductsCard key={product.id} product={product} />
                  ))
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
