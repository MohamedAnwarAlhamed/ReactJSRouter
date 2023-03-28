import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ORDER_SUMMARY = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>OrderSummary</div>
      <button onClick={() => navigate('/')}>Back</button>
    </>
  )
}
