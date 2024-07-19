import React, { useState } from 'react';
import './Login.css';
import { BASE_URL } from '../../../api/baseUrl';
import { useNavigate,Link } from 'react-router-dom';

const Login = ({onLogin}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) {
      setError('Both fields are required');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data && data.cookies) {
          localStorage.setItem('cookies', JSON.stringify(data.cookies));
          onLogin(data.cookies); // Pass user data to App component
          console.log(data.cookies);
          navigate('/');
        } else {
          setError('Invalid login credentials');
        }
      })
      .catch((error) => {
        setLoading(false);
        setError('An error occurred. Please try again.');
        console.error('Error:', error);
      });
  };

  return (
    <div className='loginPage'>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <div className="error-message">{error}</div>}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <div className="register-option">
            <p className='toggle-link'>
            Don't have an account? <Link to='/register'>Register</Link>
          </p>
          </div>
        </form>
      </div>
      <div className="bottom">
      </div>
    </div>
  );
};

export default Login;
