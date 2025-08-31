import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle authentication
    console.log('Login attempt:', formData)
    // For demo purposes, navigate to dashboard
    navigate('/dashboard')
  }

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <div className="login-container">
      {/* Header with back button */}
      <div className="login-header">
        <button className="back-btn" onClick={handleBackToHome}>
          ← Back to Home
        </button>
      </div>

      {/* Main login form */}
      <div className="login-main">
        <div className="login-card">
          {/* Logo and title */}
          <div className="login-brand">
            <div className="brand-logo">
              <span>+</span>
            </div>
            <h1 className="brand-name">AidResQ</h1>
          </div>
          
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Sign in to access your disaster relief dashboard</p>

          {/* Login form */}
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
                <div className="input-icon">📧</div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your password"
                  required
                />
                <div className="input-icon">🔒</div>
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-wrapper">
                <input type="checkbox" className="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#forgot-password" className="forgot-link">Forgot Password?</a>
            </div>

            <button type="submit" className="login-btn">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span>or</span>
          </div>

          {/* Alternative login options */}
          <div className="alt-login">
            <button className="alt-btn google-btn">
              <span className="alt-icon">🔍</span>
              Continue with Google
            </button>
            <button className="alt-btn aadhaar-btn">
              <span className="alt-icon">🆔</span>
              Aadhaar Login
            </button>
          </div>

          {/* Sign up link */}
          <div className="signup-prompt">
            <p>Don't have an account? <a href="#signup" className="signup-link">Sign up here</a></p>
          </div>
        </div>

        {/* Right side info */}
        <div className="login-info">
          <div className="info-content">
            <h3>Secure Access to Disaster Relief</h3>
            <p>Login to manage and track relief supplies, donations, and resource distribution across affected areas.</p>
            
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">🔐</div>
                <div>
                  <h4>Secure Authentication</h4>
                  <p>Bank-level security with blockchain verification</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <div>
                  <h4>Multi-Platform Access</h4>
                  <p>Access from any device, anywhere, anytime</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div>
                  <h4>Real-time Updates</h4>
                  <p>Instant access to live relief operation data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

