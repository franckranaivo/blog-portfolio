import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import App from './App'
import './index.css'
import Apropos from './pages/a-propos'
import Contact from './pages/contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="a-propos" element={<Apropos />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>
)
