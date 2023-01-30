import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Twitter Clone',
    github:'https://github.com/danielmattos91/twitter_clone',
    demo: 'https://alphagods.000webhostapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Site Portfólio',
    github:'https://github.com/danielmattos91/site_portifolio',
    demo: 'https://github.com/danielmattos91/todo_react'
  },
  {
    id: 3,
    image: IMG3,
    title: 'App Dashboard',
    github:'https://github.com/danielmattos91/app_dashboard',
    demo: 'https://aptosllamas.000webhostapp.com/#'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Jogo Palavra Secreta',
    github:'https://github.com/danielmattos91/estudo-react',
    demo: 'https://scretword.000webhostapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Todo React Typescript',
    github:'https://github.com/danielmattos91/todo_react',
    demo: 'https://todoreact-production.up.railway.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'App Super Gestão',
    github:'https://github.com/danielmattos91',
    demo: 'https://github.com/danielmattos91'
  }
]

const Portfolio = () => {
  return (

    <section id='portfolio'>
      <h5>Meu porjetos recentes</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' >Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio