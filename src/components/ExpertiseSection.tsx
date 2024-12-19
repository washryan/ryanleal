import Image from 'next/image'
import styles from '../styles/ExpertiseSection.module.css'

const itensExpertise = [
  {
    titulo: 'Desenvolvimento Web',
    descricao: 'Experiência em HTML, CSS, JavaScript e frameworks modernos como React.',
    icone: '/icons/web-dev.svg'
  },
  {
    titulo: 'Java',
    descricao: 'Conhecimento em programação orientada a objetos e desenvolvimento back-end com Java.',
    icone: '/icons/java.svg'
  },
  {
    titulo: 'React',
    descricao: 'Habilidade para criar interfaces de usuário interativas e responsivas com React.',
    icone: '/icons/react.svg'
  }
]

export default function ExpertiseSection() {
  return (
    <section id="expertise" className={styles.expertise}>
      <div className={styles.container}>
        <h2 className={styles.title}>Minhas Habilidades</h2>
        <div className={styles.grid}>
          {itensExpertise.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image src={item.icone} alt={item.titulo} width={48} height={48} />
              </div>
              <h3 className={styles.cardTitle}>{item.titulo}</h3>
              <p className={styles.cardDescription}>{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

