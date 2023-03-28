import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const PRODUCTS = () => {
  return (
    <>
      <div>Products</div>
      <input type="text" placeholder="Search" />
      <nav>
        <Link to="/feature">Features</Link>
        <Link to="/new">New </Link>
      </nav>
      <Outlet/>
    </>
  )
}
