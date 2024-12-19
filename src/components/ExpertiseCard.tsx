import styles from '../styles/ExpertiseCard.module.css'

interface ExpertiseCardProps {
  title: string
  description: string
  icon: string
}

export default function ExpertiseCard({ title, description, icon }: ExpertiseCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
