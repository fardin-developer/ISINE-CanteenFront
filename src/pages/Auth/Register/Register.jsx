import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import heic2any from 'heic2any';

const Register = () => {
  const [registerFormData, setRegisterFormData] = useState({
    name: '',
    email: '',
    password: '',
    rollNo: '',
    department: '',
    idProof: null
  });
  const [loading, setLoading] = useState(false); // Added loading state

  const navigate = useNavigate();

  const handleRegisterChange = async e => {
    const { name, value, files } = e.target;

    if (name === 'idProof' && files.length > 0) {
      const file = files[0];

      if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
      }

      if (file.name.toLowerCase().endsWith('.heic')) {
        try {
          setLoading(true); // Start loading
          console.log('Starting conversion for file:', file.name);

          const convertedBlob = await heic2any({
            blob: file,
            toType: 'image/jpeg'
          });

          const convertedFile = new File([convertedBlob], file.name.replace(/\.heic$/i, '.jpg'), {
            type: 'image/jpeg'
          });

          console.log('Converted file:', convertedFile);

          setRegisterFormData({
            ...registerFormData,
            [name]: convertedFile
          });
        } catch (error) {
          console.error('Error converting HEIC file:', error);
          alert('Error converting HEIC file. Please try again.');
        } finally {
          setLoading(false); // End loading
        }
      } else {
        setRegisterFormData({
          ...registerFormData,
          [name]: file
        });
      }
    } else {
      setRegisterFormData({
        ...registerFormData,
        [name]: files ? files[0] : value
      });
    }
  };

  const handleRegisterSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', registerFormData.name);
    formData.append('email', registerFormData.email);
    formData.append('password', registerFormData.password);
    formData.append('rollno', registerFormData.rollNo);
    formData.append('dept', registerFormData.department);

    if (registerFormData.idProof) {
      formData.append('idProof', registerFormData.idProof);
    }

    try {
      console.log('Submitting form data');
      const response = await axios.post('http://localhost:8000/api/v1/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Registration successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }
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
            {loading && <div className="loading-spinner">Converting to JPG...</div>}
          </div>
          {
            loading ? (
              <button
                type='button' id='regBtn'
                style={{
                  cursor: 'not-allowed',
                }}
                disabled
              >
                Converting HEIC to JPG
              </button>
            ) : (
              <button type='submit'>Register</button>
            )
          }

          <p className='toggle-link'>
            Already have an account? <Link to='/login' id='loginlink'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
