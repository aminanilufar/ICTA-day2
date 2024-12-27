import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Tabl from './components/Tabl'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>FACEBOOK</h1>
      <Login />
      <Signup />
      <Tabl /> */}
      <Navbar />
      <Routes>
        <Route path="/l" element={<Login />} />
        <Route path="/s" element={<Signup />} />
        <Route path="/t" element={<Tabl />} />
      </Routes>
    </>
  )
}

export default App
