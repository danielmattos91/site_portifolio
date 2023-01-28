import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Me envie uma mensagem</h2>

      <div className="container container__contact">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mattosfacul@gmail.com</h5>
            <a href="mailto:mattosfacul@gmail.com" target="_blank">Envie um email</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>mattosfacul@gmail.com</h5>
            <a href="https://m.me/100085929790041/" target="_blank">Envie uma menssagem</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+14 997756218</h5>
            <a href="https://api.whatsapp.com/send?phone=5514997756218" target="_blank">Envie um whats</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Nome completo' required />
          <input type="email" name='email' placeholder='Seu email' required />
          <textarea name="message" rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'> Envie a mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact