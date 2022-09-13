import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import './assets/css/fonts.css'
import './assets/css/index.css'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Header from "./components/Header/Header";
import Accueil from "./pages/Accueil";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Header />
    <Routes>
      <Route path="/" element={<Accueil />}></Route>
      <Route path="blog" element={<Blog />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>
)
