import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HOME } from './components/Home'
// import { ABOUT } from './components/About'
const LazyLoading = React.lazy(() => import('./components/About'))
import { CONTACT } from './components/Contact'
import { HEADER } from './components/Header'
import { NavBar } from './components/NavBar'
import { ORDER_SUMMARY } from './components/OrderSummary'
import { PRODUCTS } from './components/Products'
import { FEATURE } from './components/Features'
import { NEW } from './components/New'
import { Users } from './components/Users'
import { UserDetails } from './components/UserDetails'
import { AdminDetails } from './components/AdminDetails'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HOME />
              <HEADER />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading.....">
              <LazyLoading />
            </React.Suspense>
          }
        />
        <Route path="/contact" element={<CONTACT />} />
        <Route path="*" element={<h1>NO FOUND</h1>} />
        <Route path="/order-summary" element={<ORDER_SUMMARY />} />
        <Route path="/product" element={<PRODUCTS />}>
          <Route index element={<FEATURE />} />
          <Route path="/feature" element={<FEATURE />} />
          <Route path="/new" element={<NEW />} />
        </Route>
        <Route path="/user" element={<Users />}>
          <Route path="/:userId" element={<UserDetails />} />
          <Route path="/admin" element={<AdminDetails />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
