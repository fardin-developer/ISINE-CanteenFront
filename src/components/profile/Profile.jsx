import React, { useEffect } from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <>
      <div>
        <div className='profile-container'>
          <div className='profileNav'>
            <div className='profileNavLeft' onClick={handleBackClick}>
              <img src='arrow.png' alt='' srcset='' width='20px' />
            </div>
            <div className='profileNavRight'></div>
          </div>
          <div className='profilebottom'>
            <div className='profileData'>
              <div className='profImg'>
                <img
                  className='profile-image'
                  src='/payment.jpg'
                  alt='Profile'
                />
              </div>
              <div className='profile-header'>
                <h2 className='profile-name'>Arian Zesan</h2>
                <p className='profile-activity'>View activity</p>
              </div>
              <div className='profileReport'>
                <div className='profileReportLeft'>100</div>
                <div className='profileReportRight'>100</div>
              </div>
            </div>
            <div className='profmenu'>
              <div className='profile-options'>
                <div className='profile-option'>
                  <div className='profile-optionLeft'>
                    <span className='icon'>💰</span>
                    <p>Payments</p>
                  </div>
                  <span>
                    {' '}
                    <img
                      className='rightarrow'
                      src='/right-arrow.png'
                      alt=''
                    />{' '}
                  </span>
                </div>
                <div className='profile-option'>
                  <div className='profile-optionLeft'>
                    <span className='icon'>⚙️</span>
                    <p>Profile Settings</p>
                  </div>
                  <span> <img className='rightarrow' src="/right-arrow.png" alt="" /> </span>

                </div>
                <div className='profile-option'>
                  <div className='profile-optionLeft'>
                    <span className='icon'>🛒</span>
                    <p>Order History</p>
                  </div>
                  <span> <img className='rightarrow' src="/right-arrow.png" alt="" /> </span>

                </div>
                <div className='profile-option'>
                <div className='profile-optionLeft'>
                  <span className='icon'>📅</span>
                  <p>Booking</p>
                  </div>
                  <span> <img className='rightarrow' src="/right-arrow.png" alt="" /> </span>

                </div>
              </div>
              <button className='sign-out'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
