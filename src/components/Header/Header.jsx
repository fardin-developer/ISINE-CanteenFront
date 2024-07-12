import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const handleNavigate= ()=>{
    navigate('/payment')
  }
  return (
    <div className='header'>
      <div className="header-content">
        <h1>Best food for <br></br> your taste</h1>
        <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
        <button className='homepage-button' onClick={handleNavigate} > Explore Menu</button>
      </div>
    </div>
  )
}

export default Header
