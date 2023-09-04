import { useState } from 'react'
import './App.css'
import Intro from './Components/intro/Intro'
import About from './Components/about/About'
import Education from './Components/education/Education'
import Portfolio from './Components/portfolio/Portfolio'
import Footer from './Components/footer/Footer'


function App() {


  return (
    <div className='container'>
      <Intro />
      <About />
      <Education />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
