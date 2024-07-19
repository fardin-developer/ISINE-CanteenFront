import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div style={{backgroundColor:'white'}}>
      <Header />
      <div className='browse-menu firstHome'>
        <div className='browsemenu-heading'>
          <h1>Browse Our Menu</h1>
        </div>
        <div className='menu-container'>
          <div className='menu-box' >
            <img src={assets.breakfastlogo} alt='' className='menu-image' />
            <div className='menu-details'>
              <h3>Breakfast</h3>
              <p>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
                <Link to='/menu'  className='explore-menu'> Explore Menu</Link>
            </div>
          </div>
          <div className='menu-box' >
            <img src={assets.drinkslogo} alt='' className='menu-image' />
            <div className='menu-details'>
              <h3>Beverages</h3>
              <p>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <a href='#' className='explore-menu'>
                Explore Menu
              </a>
            </div>
          </div>
          <div className='menu-box'>
            <img src={assets.maindisheslogo} alt='' className='menu-image' />
            <div className='menu-details'>
              <h3>Main Course</h3>
              <p>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <a href='#' className='explore-menu'>
                Explore Menu
              </a>
            </div>
          </div>
          <div className='menu-box'>
            <img src={assets.snackslogo} alt='' className='menu-image' />
            <div className='menu-details'>
              <h3>Snacks</h3>
              <p>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <a href='#' className='explore-menu'>
                Explore Menu
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='homepage-info'>
        <div className='info-img'>
          <img src={assets.foodposter} alt='' className='foodposter-img' />
        </div>
        <div className='info-part'>
          <h2 className='h2'>Your healthy choice is here.</h2>
          <h5 className='h5'>
            Established in 2020, Isine Mess was born from a passion for bringing
            delicious and wholesome meals to the Isine community.We believe that
            good food is essential for a healthy and happy life, and that's why
            we take pride in using fresh, high-quality ingredients to create a
            menu that's both satisfying and nourishing.
          </h5>
          <p>
            We're not just your average canteen. We're a team dedicated to
            providing a convenient and enjoyable dining experience.
          </p>
          <button onClick={()=>{navigate('/about')}} className='aboutus-button'> More About Us</button>
        </div>
      </div>
    </div>
  )
}

export default Home
