import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>OrderSummary</div>
      <button onClick={() => navigate('/')}>Back</button>
    </>
  )
}

export default OrderSummary
