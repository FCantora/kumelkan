import { Contacto } from "../Components/Contact/Contacto"
// import { Footer } from "../Components/Footer"
import { Hacemos } from "../Components/Hacemos/Hacemos"
import { Laboratorio } from "../Components/Laboratorio/Laboratorio"
import { Servicios } from "../Components/Servicios/Servicios"
import { Somos } from "../Components/Somos/Somos"
import styles from './Home.module.css'

export const Home = () => {
  return (
    <div className={styles.container}>
        <Hacemos />
        <Servicios />
        <Somos />
        <Laboratorio />
        <Contacto />
        {/* <Footer /> */}
    </div>
  )
}
