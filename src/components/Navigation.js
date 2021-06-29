import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className = 'Nav'>
     <Link to ='/'>Home</Link>
     <Link to ='/'>About</Link>
     <Link to ='/'>Portafolio</Link>
     <Link to ='/'>Contact</Link>
    </div>
  )
}

export default Navigation
