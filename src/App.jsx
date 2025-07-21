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
// import Login_Compnent from './pages/Login/Login'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'




function App() {
  const [count, setCount] = useState(0)
  const authStatus = useSelector(state => state.auth.status)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Hero />}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/dashboard' element={authStatus? <Dashboard/> : <Login/>}/>
    </Routes>
      
    <Footer/>
    </>
  )
}

export default App
