import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HOME = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate('/order-summary')}>order</button>
    </>
  )
}
