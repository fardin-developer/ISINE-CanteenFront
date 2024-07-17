import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div id="footer">

        <footer class="footer">
          <div class="container">
            <div class="col1">
              <img src="/isineLogo.png" width='30px' alt="" />
              <h2>Contact Us</h2>
              <p>9864972356</p>
              
            </div>
            <div class="col2">
              <ul class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Feedback</a></li>
              </ul>
            </div>
            <div class="col3">
              <div className="subCol3">
              <h2>Social Links</h2>
              <ul class="services-icons">
                <li>
                  <a href="#"><i class="ri-facebook-circle-fill"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ri-instagram-fill"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ri-mail-fill"></i></a>
                </li>

              </ul>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis officia odio placeat nesciunt ex.</p>
                
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="mekk">
              <p>&copy; isinemess 2024 - All Rights Reserved</p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default Footer
