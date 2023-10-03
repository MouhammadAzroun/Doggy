import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import HomePage from './components/HomePage'
import DogDetails from './components/DogDetails'

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Welcome />} />


        <Route path='/homepage' 
        element = {<HomePage/>}/>

        <Route path='/dogdetails' 
        element = {<DogDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
