import React from 'react'
import './Home.css'

export const home = () => {
  return (
    <div>
    
    <div className= 'navbar'>

    <img src="/assets/logo.png" alt="logo" className='logo'/>

    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">About</a></li>
         <li><a href="#about">Services</a></li>
        <li><a href="#contact" id= "gap">Contact</a></li>
    </ul>

    <button className="donate">Donate Now</button>

    </div>
     <div className= "hero">
     <div className= "text">
        <h1><span className= "heading">Transparent Disaster Ration Tracking</span></h1>
        
        <p className= "para">Real-time accounting of relief goods from warehouse to each affected person. Prevent loss, accelerate delivery, and audit with confidence</p>
        
        <button className= "explore">Explore Features</button>
        <button className= "dashboard">Open Dashboard</button>
        
     </div>
    </div>
    <div classname="full">
    <div className= "body1">
      <div className="box1">
        <h2 c>Core Capabilities</h2>

        <p className= "line" >Built for government operations with field-ready scanning, live inventory, and end-to-end traceability.</p>

        <ol className="ol">
            <li>Scanning to maintain inventory and proper handover of rations</li>
            <li>Real-time inventory updates</li>
            <li>Supply and demand on a person-to-person basis</li>
            <li>Donation traceability</li>
            <li>Resource traceability</li>
            <li>Blockchain address based on Aadhar</li>
        </ol>
       </div>
      </div>
    </div>
    </div>
  )
}
