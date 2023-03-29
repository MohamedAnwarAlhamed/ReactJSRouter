import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './Auth'


const NavBar = () => {
  const auth = useAuth()
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/product">Order Summary</Link>
      <Link to="/profile">profile</Link>
      {!auth.user && <Link to="/login">Login</Link>}
    </nav>
  )
}

export default NavBar
