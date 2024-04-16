import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './LoginPage';


function RegistrationPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Store data in local storage upon successful registration
    localStorage.setItem('userData', JSON.stringify(formData));

    console.log('User data saved successfully');
    alert('YOU HAVE REGISTERED SUCCESSFULLY');

    // Clear form data
    setFormData({
      username: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <center>
      <div>
        <div className= "registration-container">
          <div className="row">
            <div >
              <div>
                <form onSubmit={handleSubmit} className="mt-5 border p-4 bg-lightred shadow"> {/* Apply bg-lightred class for light red background */}
                  <hr />
                  <h4 className="mb-3 text-secondary">Create Your Account</h4>
                  <div className="row">
                    <div className="mb-3 col-md-12">
                      <label>Username<span className="text-danger">*</span></label>
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Enter Your Username"
                        value={formData.username}
                        onChange={handleChange}
                        style={{ outline: 'none' }}
                        required
                      />
                    </div>

                    <div className="mb-3 col-md-12">
                      <label>Password<span className="text-danger">*</span></label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 col-md-12">
                      <label>Confirm Password<span className="text-danger">*</span></label>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn btn-primary float-end">
                        Register Now
                      </button>
                    </div>
                  </div>
                </form>
                <p className="text-center mt-3 text-secondary">
                  Already have an account? <Link to="/LoginPage">Login Now</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}
export default RegistrationPage;