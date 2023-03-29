import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home';
import { Header } from './components/Header'
const LazyLoading = React.lazy(() => import('./components/About'));
import { Contact } from './components/Contact'
// import { ABOUT } from './components/About'
import { OrderSummary } from './components/OrderSummary'
import { Products } from './components/Products'
import { Feature } from './components/Features'
import { New } from './components/New'
import { Users } from './components/Users'
import { UserDetails } from './components/UserDetails'
import { AdminDetails } from './components/AdminDetails'
import { Profile } from './components/Profile'
import { ContextProvider } from './components/Auth'
import { Login } from './components/Login'
import RequireAuth from './components/RequireAuth'

function App() {
  return (
    <Router>
      <ContextProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Header />
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
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>NO FOUND</h1>} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/product" element={<Products />}>
            <Route index element={<Feature />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/new" element={<New />} />
          </Route>
          <Route path="/user" element={<Users />}>
            <Route path="/:userId" element={<UserDetails />} />
            <Route path="/admin" element={<AdminDetails />} />
          </Route>
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ContextProvider>
    </Router>
  )
}

export default App
