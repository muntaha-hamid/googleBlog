import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import Body from './components/Body'
import Article from './components/Article'
import './App.css'

function App() {
  return (
   <>
   <NavBar />
   <Body />
   <Article />
   </>
  )
}

export default App
