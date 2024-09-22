import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Collection from './pages/Collection'
import Home from './pages/Home'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Cart from './pages/Cart'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
