import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import {Routes, Route} from 'react-router-dom'
import Projects from './pages/Projects/Projects'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Hero />}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    </>
  )
}

export default App
