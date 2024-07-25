import React, { useState, useEffect, useRef } from 'react';
import ProductsCard from '../../components/MenuCard/Menucard';
import Lottie from 'react-lottie';
import filter from '../../../public/filter.json';
import { BASE_URL } from '../../api/baseUrl';
import './home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: filter,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/meals`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.status === 401) {
          setError('Unauthorized access');
          setLoading(false);
          return;
        }

        const data = await response.json();

        if (Array.isArray(data.meals)) {
          setProducts(data.meals);
        } else {
          setError('Invalid data format');
        }
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (value) => {
    setFilterCategory(value);
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterCategory ? product.category === filterCategory : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="home" style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="menuContainer">
        <div className="home_content">
          <div className="search-filter-container">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <div className="dropdown-container">
              <div className="dropdown-trigger" onClick={toggleDropdown}>
                <Lottie  options={defaultOptions} />
                <span>{filterCategory || 'filter'}</span>
              </div>
              {dropdownVisible && (
                <div ref={dropdownRef} className="custom-dropdown">
                  <div onClick={() => handleFilterChange('')}>All</div>
                  <div onClick={() => handleFilterChange('breakfast')}>Breakfast</div>
                  <div onClick={() => handleFilterChange('lunch')}>Lunch</div>
                  {/* Add more categories as needed */}
                </div>
              )}
            </div>
          </div>
          <div className="main-card--container">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : filteredProducts.length < 1 ? (
              <p>No products available</p>
            ) : (
              filteredProducts.map((product) => (
                <ProductsCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
