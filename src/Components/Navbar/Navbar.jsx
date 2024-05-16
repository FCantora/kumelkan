import styles from './Navbar.module.css'
export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <>
        <button>Home</button>
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
