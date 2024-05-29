import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

import homeImage from '../../assets/Kumelkan - logo fondo transparente.png'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <>
        <Link to="/">
          <img src={homeImage} alt="Home" className={styles.homeButton} />
        </Link>
      </>
      <div>
        <button className={styles.button}>Qué hacemos</button>
        <button className={styles.button}>Servicios</button>
        <button className={styles.button}>Quiénes somos</button>
        <button className={styles.button}>Contacto</button>
      </div>
    </div>
  )
}
