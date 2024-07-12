import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
          <div id="footer">
            
            <footer class="footer">
                <div class="container">
                  <div class="col1">
                    <a href="#" class="brand">Isine Mess</a>
                  </div>
                  <div class="col2">
                    <ul class="menu">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Menu</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Feedback</a></li>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem excepturi ipsam unde obcaecati iusto velit labore consequuntur officiis aut neque?</p>
                    </ul>
                  </div>
                  <div class="col3">
                    <p>Contact Us</p>
                    {/* <form>
                      <div class="input-wrap">
                        <input type="email" placeholder="Write here.." /><button type="submit"><i class="ri-send-plane-fill"></i></button>
                      </div>
                    </form> */}
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
                  </div>
                </div>
                <div class="footer-bottom">
                  <div class="mekk">
                    <p>@isinemess 2024 - All Rights Reserved</p>
                  </div>
                </div>
    </footer>
        
</div>
    </div>
  )
}

export default Footer
