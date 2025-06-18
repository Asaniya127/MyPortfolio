import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Service from './Components/Services/Service'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <MyWork/>
      <Contact/>
    </div>
  )
}

export default App
