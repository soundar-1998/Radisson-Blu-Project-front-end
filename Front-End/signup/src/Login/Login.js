import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // Admin credentials
  const adminEmail = 'admin@gmail.com';
  const adminPassword = 'Admin@123';

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { email: '', password: '' };

    if (!credentials.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!credentials.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (credentials.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Check if admin credentials are used
      if (
        credentials.email === adminEmail &&
        credentials.password === adminPassword
      ) {
        alert('Admin login successful!');
        navigate('/users'); // Navigate to Admin Dashboard or desired page
      } else {
        // Call the API for other users
        axios
          .post('https://final-project-7f4r.onrender.com/app/signup', credentials)
          .then((response) => {
            console.log(response.data);
            alert('Customer Login successful!');
            navigate('/users'); // Navigate to Booking page
          })
          .catch((error) => {
            console.error('There was an error logging in!', error);
            alert('Login failed. Please check your credentials.');
          });
      }
    }
  };

  return (
    <div className={`login ${darkMode ? 'light-mode' : 'dark-mode'}`}>
      <div className="theme-toggle">
        <button className="btn btn-theme" onClick={toggleTheme}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="login_container">
        <h1 className="login_title">LOGIN</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={credentials.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={credentials.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>

        <div className="login_footer">
          <p>Don't have an account?</p>
          <Link to="/register" className="btn btn-link">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

