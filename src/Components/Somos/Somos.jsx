import styles from './Somos.module.css'

import juli from '../../assets/Juli.jpg'
import fran from '../../assets/Fran.jpg'
import lucas from '../../assets/Lucas.jpg'


export const Somos = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.header}>
                    <h1>¿Quiénes somos?</h1>
                    <p>Jóvenes profesionales con amplio recorrido en temas sociales que queremos contribuir a la sociedad desde nuestra experiencia, seguir construyendo conocimientos y generar proyectos que den respuesta a las distintas necesidades.</p>
                </div>
                <ol className={styles.ol}>
                    <li className={styles.card}>
                        <img src={fran} alt="Fran Ferrario" className={styles.image} />
                        <h2>Francisco Ferrario</h2>
                        <p>Cuenta con formación académica en artes audiovisuales y sociología. Trabajó en el Gobierno de la ciudad de Buenos Aires. Formó parte de TECHO durante 10 años en donde ocupó el rol de Director General de Regiones.</p>
                    </li>
                    <li className={styles.card}>
                        <img src={juli} alt="Juli Gauna" className={styles.image} />
                        <h2>Julia Gauna</h2>
                        <p>Cuenta con formación académica en psicología y educación. Trabajó en diferentes asociaciones de la sociedad civil enfocadas en la salud mental y en la organización social TECHO.</p>
                    </li>
                    <li className={styles.card}>
                        <img src={lucas} alt="Lucas Cardozo" className={styles.image} />
                        <h2>Lucas Roman Cardozo Mirco</h2>
                        <p>Cuenta con formación académica en comunicación social y periodismo. Formó parte de equipos de comunicación empresariales tanto en roles de comunicación interna como externa. Actualmente trabaja en diferentes medios de comunicación en las áreas de producción, prensa y periodismo.</p>
                    </li>
                </ol>
            </div>
        </div>
    );
}
