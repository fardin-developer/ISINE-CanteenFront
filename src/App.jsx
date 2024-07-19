import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Menu from './pages/Menu/Menu'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Payment from './pages/Payment/Payment'
import Feedback from './pages/Feedback/Feedback'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import { CartProvider } from './components/context/cartContext'
import Profile from './components/profile/Profile'
import OrderHistory from './pages/OrderHistory/OrderHistory'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const location = useLocation()

  const showNavbar = () => {
    const noNavbarRoutes = ['/login', '/register', '/profile','/order']
    return !noNavbarRoutes.includes(location.pathname)
  }

  return (
    <CartProvider>
      <div className='app' style={{ marginTop: showNavbar() ? '80px' : '0px' }}>
        {showNavbar() && <Navbar isLoggedIn={isLoggedIn} />}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/order' element={<OrderHistory />} />
        </Routes>
    {
      showNavbar()&&     <Footer />
    }
      </div>
    </CartProvider>
  )
}

export default App
