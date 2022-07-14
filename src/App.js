import React from 'react'
import './App.scss'

import { Header, About, Projects, Skills, Footer } from './container'
import { Navbar } from './components'

const App = () => {
  return (
    <div className='app' >
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />     
    </div>

  )
}

export default App