import React from 'react'
import './Footer.css'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DMATTOS</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#portfolio">Portifólio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https;//instagram.com/danimattos91/"><FiInstagram /></a>
        <a href="https;//twitter.com/atomicnft_"> <IoLogoTwitter /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DMATTOS. Todos direitos reservados.</small>
      </div>
    </footer>

    
  )
}

export default Footer