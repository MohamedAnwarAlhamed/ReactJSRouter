import React from 'react'
import { useParams } from 'react-router-dom'
export const UserDetails = () => {
    const params = useParams()
    const { id } = params.userId
  return (
    <div>UserDetails about {id}</div>
  )
}
