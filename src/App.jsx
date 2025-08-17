import React from 'react'
import './index.css'
import SplashScreen from './components/SplashScreen'
import HomePage from './pages/HomePage'
const App = () => {
  return (
    <div className='bg-black h-screen'>
      <SplashScreen />
      <HomePage />
    </div>
  )
}

export default App