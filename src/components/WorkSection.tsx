import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/WorkSection.module.css'

const projetoPrincipal = {
  titulo: 'Portfólio Pessoal',
  descricao: 'Meu site de portfólio pessoal desenvolvido com React e Next.js.',
  imagem: '/images/portfolio.svg',
  tags: ['React', 'Next.js', 'CSS Modules'],
  link: 'https://ryanleal.vercel.app'
}

const projetos = [
  {
    titulo: 'Projeto 1',
    descricao: 'Descrição do Projeto 1',
    imagem: '/images/project1.jpg',
    tags: ['React', 'Node.js'],
    link: 'https://github.com/yourusername/project1'
  },
  {
    titulo: 'Projeto 2',
    descricao: 'Descrição do Projeto 2',
    imagem: '/images/project2.jpg',
    tags: ['Java', 'Spring Boot'],
    link: 'https://github.com/yourusername/project2'
  },
  // Adicionar mais projetos aqui
]

export default function WorkSection() {
  const [filtro, setFiltro] = useState('Todos')

  const projetosFiltrados = filtro === 'Todos' 
    ? projetos 
    : projetos.filter(projeto => projeto.tags.includes(filtro))

  return (
    <section id="work" className={styles.work}>
      <div className={styles.container}>
        <h2 className={styles.title}>Meus Projetos</h2>
        
        <div className={styles.mainProject}>
          <Image src={projetoPrincipal.imagem} alt={projetoPrincipal.titulo} width={600} height={400} className={styles.mainProjectImage} />
          <div className={styles.mainProjectContent}>
            <h3 className={styles.mainProjectTitle}>{projetoPrincipal.titulo}</h3>
            <p className={styles.mainProjectDescription}>{projetoPrincipal.descricao}</p>
            <div className={styles.tags}>
              {projetoPrincipal.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <a href={projetoPrincipal.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              Ver Projeto
            </a>
          </div>
        </div>

        <div className={styles.filterContainer}>
          <button onClick={() => setFiltro('Todos')} className={`${styles.filterButton} ${filtro === 'Todos' ? styles.active : ''}`}>Todos</button>
          <button onClick={() => setFiltro('React')} className={`${styles.filterButton} ${filtro === 'React' ? styles.active : ''}`}>React</button>
          <button onClick={() => setFiltro('Java')} className={`${styles.filterButton} ${filtro === 'Java' ? styles.active : ''}`}>Java</button>
        </div>

        <div className={styles.projectsGrid}>
          {projetosFiltrados.map((projeto, index) => (
            <div key={index} className={styles.projectCard}>
              <Image src={projeto.imagem} alt={projeto.titulo} width={300} height={200} className={styles.projectImage} />
              <h3 className={styles.projectTitle}>{projeto.titulo}</h3>
              <p className={styles.projectDescription}>{projeto.descricao}</p>
              <div className={styles.tags}>
                {projeto.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <a href={projeto.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                Ver Projeto
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

