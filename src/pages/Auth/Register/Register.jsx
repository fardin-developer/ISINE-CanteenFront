import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [registerFormData, setRegisterFormData] = useState({
    name: '',
    email: '',
    password: '',
    rollNo: '',
    department: '',
    idProof: null
  });

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });

  const handleRegisterChange = e => {
    const { name, value, files } = e.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: files ? files[0] : value
    });
  };

  const handleLoginChange = e => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value
    });
  };

  const handleRegisterSubmit = e => {
    e.preventDefault();
    // Handle register form submission
    console.log(registerFormData);
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    // Handle login form submission
    console.log(loginFormData);
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className='auth-container'>
      <div className={`auth-form ${isRegister ? 'slide-in-right' : 'slide-in-left'}`}>
        <form className='register-form' onSubmit={handleRegisterSubmit}>
          <h2>Register</h2>
          <div className='form-group'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              value={registerFormData.name}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              name='email'
              value={registerFormData.email}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              value={registerFormData.password}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Roll No</label>
            <input
              type='text'
              name='rollNo'
              value={registerFormData.rollNo}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Department</label>
            <input
              type='text'
              name='department'
              value={registerFormData.department}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>ID Proof</label>
            <input
              type='file'
              name='idProof'
              onChange={handleRegisterChange}
              required
            />
          </div>
          <button type='submit'>Register</button>
          <p  className='toggle-link'>
            Already have an account? <Link to='/login' onClick={toggleForm}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
