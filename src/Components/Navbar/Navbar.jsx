import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

import homeImage from '../../assets/Kumelkan - logo fondo transparente.png'
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/">
          <img src={homeImage} alt="Home" className={styles.homeButton} />
        </Link>
        <div className={`${styles.links} ${isMenuOpen ? styles.show : ''}`}>
          <button className={styles.button}>Qué hacemos</button>
          <button className={styles.button}>Servicios</button>
          <button className={styles.button}>Quiénes somos</button>
          {/* <Link to="/laboratorio"> */}
            <button className={styles.button}>Laboratorio comunitario</button>
          {/* </Link> */}
          <button className={styles.button}>Contacto</button>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  );
}
