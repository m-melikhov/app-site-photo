// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import reactLogo from './assets/react.svg'
// eslint-disable-next-line no-unused-vars
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Price from './Components/Price'
import ContactForm from './Components/ContactForm'

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Portfolio />
      <Price />
      <ContactForm />
    </div>
  )
}

export default App
