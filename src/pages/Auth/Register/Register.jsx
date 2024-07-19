import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [registerFormData, setRegisterFormData] = useState({
    name: '',
    email: '',
    password: '',
    rollNo: '',
    department: '',
    idProof: null
  });

  const navigate = useNavigate();

  const handleRegisterChange = e => {
    const { name, value, files } = e.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: files ? files[0] : value
    });
  };

  const handleRegisterSubmit = e => {
    e.preventDefault();
    console.log(registerFormData);
    navigate('/login'); 
  };

  return (
    <div className='auth-container'>
      <div className='auth-form slide-in-right'>
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
          <p className='toggle-link'>
            Already have an account? <Link to='/login' id='loginlink'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
