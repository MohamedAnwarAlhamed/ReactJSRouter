import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate, useLocation } from 'react-router-dom'

const Login = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const location = useLocation()
  const redicrectPath = location.state?.Path || '/'
  const handleLogin = () => {
    auth.login(user)
    navigate(redicrectPath, { replace: true })
  }
  return (
    <div>
      <label>
        Username:
        <input
          type="text"
          value={user}
          placeholder="Enter your username"
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
