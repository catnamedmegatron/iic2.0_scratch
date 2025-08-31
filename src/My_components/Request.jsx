import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Request.css'

export const Request = () => {
  const [activeTab, setActiveTab] = useState('pending')
  const navigate = useNavigate()

  const handleBackToDashboard = () => {
    navigate('/dashboard')
  }

  // Sample data for requests
  const requests = {
    pending: [
      {
        id: 'REQ001',
        requester: 'Flood Relief Camp - Mumbai',
        items: ['Water bottles', 'Blankets', 'First aid kits'],
        quantity: '500 units',
        urgency: 'High',
        location: 'Mumbai, Maharashtra',
        date: '2024-01-15',
        status: 'Pending Approval'
      },
      {
        id: 'REQ002',
        requester: 'Cyclone Shelter - Odisha',
        items: ['Food packets', 'Medicines', 'Torches'],
        quantity: '300 units',
        urgency: 'Critical',
        location: 'Bhubaneswar, Odisha',
        date: '2024-01-14',
        status: 'Under Review'
      }
    ],
    approved: [
      {
        id: 'REQ003',
        requester: 'Earthquake Relief - Gujarat',
        items: ['Tents', 'Water tanks', 'Emergency lights'],
        quantity: '200 units',
        urgency: 'High',
        location: 'Ahmedabad, Gujarat',
        date: '2024-01-13',
        status: 'Approved'
      }
    ],
    completed: [
      {
        id: 'REQ004',
        requester: 'Landslide Relief - Uttarakhand',
        items: ['Rescue equipment', 'Food supplies', 'Medical kits'],
        quantity: '150 units',
        urgency: 'Medium',
        location: 'Dehradun, Uttarakhand',
        date: '2024-01-10',
        status: 'Completed'
      }
    ]
  }

  const getUrgencyColor = (urgency) => {
    switch (urgency.toLowerCase()) {
      case 'critical': return 'critical'
      case 'high': return 'high'
      case 'medium': return 'medium'
      case 'low': return 'low'
      default: return 'medium'
    }
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending approval': return 'pending'
      case 'under review': return 'review'
      case 'approved': return 'approved'
      case 'completed': return 'completed'
      default: return 'pending'
    }
  }

  return (
    <div className="request-container">
      {/* Header */}
      <div className="request-header">
        <button className="back-btn" onClick={handleBackToDashboard}>
          ← Back to Dashboard
        </button>
        <h1 className="request-title">Disaster Relief Requests</h1>
      </div>

      {/* Main content */}
      <div className="request-main">
        {/* Tabs */}
        <div className="request-tabs">
          <button 
            className={`tab-btn ${activeTab === 'pending' ? 'active' : ''}`}
            onClick={() => setActiveTab('pending')}
          >
            Pending Requests ({requests.pending.length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'approved' ? 'active' : ''}`}
            onClick={() => setActiveTab('approved')}
          >
            Approved ({requests.approved.length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed ({requests.completed.length})
          </button>
        </div>

        {/* Request cards */}
        <div className="request-grid">
          {requests[activeTab].map((request) => (
            <div key={request.id} className="request-card">
              <div className="request-header-card">
                <div className="request-id">{request.id}</div>
                <div className={`urgency-badge ${getUrgencyColor(request.urgency)}`}>
                  {request.urgency}
                </div>
              </div>
              
              <div className="request-content">
                <h3 className="requester-name">{request.requester}</h3>
                <p className="request-location">📍 {request.location}</p>
                
                <div className="request-items">
                  <h4>Required Items:</h4>
                  <ul>
                    {request.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="request-details">
                  <div className="detail-item">
                    <span className="detail-label">Quantity:</span>
                    <span className="detail-value">{request.quantity}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Date:</span>
                    <span className="detail-value">{request.date}</span>
                  </div>
                </div>
                
                <div className={`status-badge ${getStatusColor(request.status)}`}>
                  {request.status}
                </div>
              </div>
              
              <div className="request-actions">
                {activeTab === 'pending' && (
                  <>
                    <button className="action-btn approve-btn">Approve</button>
                    <button className="action-btn reject-btn">Reject</button>
                  </>
                )}
                {activeTab === 'approved' && (
                  <button className="action-btn complete-btn">Mark Complete</button>
                )}
                <button className="action-btn view-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {requests[activeTab].length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📋</div>
            <h3>No {activeTab} requests</h3>
            <p>There are currently no {activeTab} requests to display.</p>
          </div>
        )}
      </div>

      {/* Quick stats */}
      <div className="request-stats">
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h3>{requests.pending.length}</h3>
            <p>Pending</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>{requests.approved.length}</h3>
            <p>Approved</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <h3>{requests.completed.length}</h3>
            <p>Completed</p>
          </div>
        </div>
      </div>
    </div>
  )
}