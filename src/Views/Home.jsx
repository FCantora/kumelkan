import { Contacto } from "../Components/Contacto"
import { Footer } from "../Components/Footer"
import { Hacemos } from "../Components/Hacemos/Hacemos"
import { Nosotros } from "../Components/Nosotros"
import { Servicios } from "../Components/Servicios"
import { Somos } from "../Components/Somos"
import styles from './Home.module.css'

export const Home = () => {
  return (
    <div className={styles.container}>
        <Hacemos />
        <Servicios />
        <Somos />
        <Nosotros />
        <Contacto />
        <Footer />
    </div>
  )
}
