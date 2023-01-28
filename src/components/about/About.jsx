import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {BsPatchCheckFill} from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
      <h5>Me conheça</h5>
      <h2>Sobre mim</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experiencia</h5>
              <small>1+ Ano de Estudo</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projetos</h5>
              <small>15+ projetos pessoais</small>
            </article>
            <article className="about__card">
              <BsPatchCheckFill className='about__icon' />
              <h5>Certificados</h5>
              <small>2 Certificados</small>
            </article>
          </div>
          <p>
            Sou um desenvolvedor web fullstack iniciante com habilidades em PHP e JavaScript. Sempre fui apaixonado por tecnologia e programação, 
            e estou ansioso para continuar aprendendo e crescendo na minha carreira. Possuo boa capacidade de aprendizado e estou pronto 
            para enfrentar desafios e trabalhar em projetos complexos. Estou ansioso para juntar-me a uma equipe dinâmica e contribuir para o sucesso de projetos
            </p>
            <a href="#contact" className='btn btn-primary'>Vamos conversar!</a>
        </div>
      </div>
    </section>
  )
}

export default About