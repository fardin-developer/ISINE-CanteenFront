import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import heic2any from 'heic2any';
import { BASE_URL } from '../../../api/baseUrl';

const Register = () => {
  const [registerFormData, setRegisterFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    rollNo: '',
    department: '',
    idProof: null
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateInput = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value) {
          error = 'Please provide name';
        } else if (value.length < 3 || value.length > 30) {
          error = 'Name must be between 3 and 30 characters';
        }
        break;
      case 'email':
        if (!value) {
          error = 'Please provide email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = 'Please provide valid email';
        }
        break;
      case 'phone':
        if (!value) {
          error = 'Please provide phone number';
        } else if (!/^\d{10}$/.test(value)) {
          error = 'Please provide a valid 10-digit phone number';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Please provide password';
        } else if (value.length < 6) {
          error = 'Password must be at least 6 characters';
        }
        break;
      case 'rollNo':
        if (!value) {
          error = 'Please provide roll number';
        }
        break;
      case 'department':
        if (!value) {
          error = 'Please provide department';
        }
        break;
      case 'idProof':
        if (!value) {
          error = 'Please provide ID proof';
        }
        break;
      default:
        break;
    }
    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };

  const handleRegisterChange = async e => {
    const { name, value, files } = e.target;
    validateInput(name, files ? files[0] : value);

    if (name === 'idProof' && files.length > 0) {
      const file = files[0];

      if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
      }

      if (file.name.toLowerCase().endsWith('.heic')) {
        try {
          setLoading(true);
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
          setLoading(false);
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

  useEffect(() => {
    localStorage.setItem('fromRegister', 'true');
  }, []);

  const handleRegisterSubmit = async e => {
    e.preventDefault();

    // Check for errors before submitting
    let formValid = true;
    Object.keys(registerFormData).forEach(key => {
      validateInput(key, registerFormData[key]);
      if (errors[key]) {
        formValid = false;
      }
    });

    if (!formValid) {
      alert('Please fix the errors in the form.');
      return;
    }

    const formData = new FormData();
    formData.append('name', registerFormData.name);
    formData.append('email', registerFormData.email);
    formData.append('phone', registerFormData.phone);
    formData.append('password', registerFormData.password);
    formData.append('rollno', registerFormData.rollNo);
    formData.append('dept', registerFormData.department);

    if (registerFormData.idProof) {
      formData.append('idProof', registerFormData.idProof);
    }

    try {
      console.log('Submitting form data');
      const response = await axios.post(`${BASE_URL}/auth/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      });
      console.log('Registration successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error);
      alert(error.response.data.message);
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
            {errors.name && <span className="error">{errors.name}</span>}
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
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className='form-group'>
            <label>Phone No. </label>
            <input
              type='tel'
              name='phone'
              value={registerFormData.phone}
              onChange={handleRegisterChange}
              required
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
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
            {errors.password && <span className="error">{errors.password}</span>}
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
            {errors.rollNo && <span className="error">{errors.rollNo}</span>}
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
            {errors.department && <span className="error">{errors.department}</span>}
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
            {errors.idProof && <span className="error">{errors.idProof}</span>}
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
