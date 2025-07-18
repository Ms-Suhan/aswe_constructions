import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import {Routes, Route} from 'react-router-dom'
import Projects from './pages/Projects/Projects'
import AboutUs from './pages/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'
import ContactUs from './pages/ContactUs/ContactUs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Hero />}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
