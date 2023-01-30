import React from 'react'
import About from './components/About/About.jsx'


import Contact from './components/Contact/Contact.jsx'
import Experience from './components/Experience/Experience.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import Portfolio from './components/Portfolio/Portfoliojsx'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App