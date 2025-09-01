import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export const Home = () => {
  const navigate = useNavigate()

  const handleDashboardClick = () => {
    navigate('/dashboard')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  return (
    <div className="home-container">
      {/* Navbar */}
      <div className='navbar'>
        <img src="/assets/logo.png" alt="logo" className='logo'/>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">About</a></li>
          <li><a href="#about">Services</a></li>
          <li><a href="#contact" id="gap">Contact</a></li>
           <li><a href="/Login">Login</a></li>
        </ul>
        {/* <button className="login-btn" onClick={handleLoginClick}>Login</button> */}
        <button className="donate">Donate Now</button>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">AidResQ</h1>
          <p className="hero-description">
            Revolutionary blockchain-based tracking system for disaster relief supplies, 
            preventing resource hoarding and ensuring direct aid delivery to those in need.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Features</button>
            <button className="btn-secondary" onClick={handleDashboardClick}>View Dashboard</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Problem Section */}
        <div className="section">
          <div className="section-header">
            <h2>The Problem We Solve</h2>
            <p className="section-subtitle">
              During natural disasters and calamities, critical resources often don't reach those who need them most.
            </p>
          </div>
          
          <div className="cards-grid">
            <div className="problem-card">
              <h3>Resource Hoarding Crisis</h3>
              <ul className="problem-list">
                <li>Middlemen intercept government aid supplies</li>
                <li>Resources sold at exponentially higher prices</li>
                <li>Vulnerable populations left without essential aid</li>
                <li>Lack of transparency in aid distribution</li>
              </ul>
            </div>
            
            <div className="problem-card">
              <h3>Impact on Disaster Victims</h3>
              <p>
                When resources are hoarded, families affected by disasters face increased suffering, 
                delayed recovery, and in some cases, preventable loss of life. Our solution ensures 
                that every resource reaches its intended recipient.
              </p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="section">
          <div className="section-header">
            <h2>Our Blockchain Solution</h2>
            <p className="section-subtitle">
              Leveraging blockchain technology and Aadhaar integration to create a transparent, 
              tamper-proof system for disaster relief resource tracking.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Resource Traceability</h3>
              <p>Track every resource from government dispatch to final recipient using blockchain technology</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Person-to-Person Supply</h3>
              <p>Direct supply and demand matching without middlemen interference</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Real-time Updates</h3>
              <p>Live inventory tracking and status updates for all relief operations</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💝</div>
              <h3>Donation Traceability</h3>
              <p>Complete transparency in donation flow from donor to beneficiary</p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="section">
          <div className="section-header">
            <h2>How It Works</h2>
          </div>
          
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Government Dispatch</h3>
              <p>Resources are tagged with unique blockchain identifiers</p>
            </div>
            
            <div className="step-connector"></div>
            
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Aadhaar Verification</h3>
              <p>Recipients verified through secure Aadhaar integration</p>
            </div>
            
            <div className="step-connector"></div>
            
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Direct Delivery</h3>
              <p>Resources delivered directly to verified beneficiaries</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="section">
          <div className="section-header">
            <h2>Secure & Transparent</h2>
            <p className="section-subtitle">
              Every transaction is recorded on the blockchain, providing complete transparency 
              and preventing any manipulation of the aid distribution process.
            </p>
          </div>
          
          <div className="benefits-container">
            <div className="benefits-card">
              <h3>Key Benefits</h3>
              <p>Our solution transforms disaster relief by ensuring efficiency, transparency, and accountability.</p>
              <ul className="benefits-list">
                <li>Eliminates resource hoarding by middlemen</li>
                <li>Ensures fair distribution of aid</li>
                <li>Prevents price gouging during disasters</li>
                <li>Provides real-time accountability</li>
                <li>Secures supply chain integrity</li>
                <li>Enables direct government-to-citizen aid</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="section">
          <div className="cta-container">
            <h2>Ready to Transform Disaster Relief?</h2>
            <p>Join us in creating a more efficient, transparent, and effective disaster response system.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Explore Features</button>
              <button className="btn-secondary" onClick={handleDashboardClick}>Join Community</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
