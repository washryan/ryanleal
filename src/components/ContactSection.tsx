import { useState } from 'react'
import styles from '../styles/ContactSection.module.css'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Form submitted:', { name, email, message })
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Entre em Contato</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>Enviar</button>
        </form>
      </div>
    </section>
  )
}

