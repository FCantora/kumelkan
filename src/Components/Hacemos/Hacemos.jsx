import styles from './Hacemos.module.css'
import img from '../../assets/hacemos_img.JPG'

export const Hacemos = () => {
  return (
    <div className={styles.container}>
      <img src={img} alt="hacemos-background" className={styles.img} />
      <div className={styles.text}>
        <h1>¿Qué hacemos?</h1>
        <p>Brindamos servicios especializados en formulación, gestión y evaluación de programas y proyectos, buscando potenciar el impacto de organizaciones, empresas y gobiernos. A su vez, generamos información que permite comprender los aspectos sociales de la realidad  para accionar. </p>
      </div>
    </div>
  )
}
