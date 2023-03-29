import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const filter = searchParams.get('filter') === 'Active'
  return (
    <div>
      <h1>User1</h1>
      <h1>User2</h1>
      <h1>User3</h1>
      <button onClick={() => setSearchParams({ filter: 'Active' })}>
        Active Users
      </button>
      <button onClick={() => setSearchParams({})}>Reaet Filter</button>
      {filter ? <h1>Active Users</h1> : <h1>All Users</h1>}
    </div>
  )
}

export default Users
