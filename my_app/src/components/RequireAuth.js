import React from 'react'
import { useAuth } from './Auth'
import { useLocation, Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
  const auth = useAuth()
  const location = useLocation()
  if (!auth.user) {
    return <Navigate to="/login" state={{ Path: location.pathname }} />
  }
  return children;
}

export default RequireAuth;
