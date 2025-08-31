import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './My_components/Home1'
import AidResQDashboard from './My_components/Dashboard'
import { Login } from './My_components/Login'
import { Request } from './My_components/Request'

export default function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<AidResQDashboard />} />
          <Route path="/requests" element={<Request />} />
        </Routes>
      </div>
    </Router>
  )
}