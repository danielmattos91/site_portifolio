import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderScocials from './HeaderScocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Ola eu sou</h5>
        <h1>Daniel Mattos</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderScocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header