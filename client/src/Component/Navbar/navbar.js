import React from 'react'
import { Link } from 'react-router-dom'


function navbar() {
  return (
    <div>
      <h1>Naverbar</h1>
      <Link to="/">Home</Link>
      <Link to="/project">Project</Link>
        <Link to="/About">About</Link>
          <Link to="/Service">Service</Link>
            <Link to="/Contact">Contact</Link>
    </div>
  )
}

export default navbar
