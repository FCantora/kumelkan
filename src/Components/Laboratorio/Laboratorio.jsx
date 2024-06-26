import styles from './Laboratorio.module.css'


export const Laboratorio = () => {

  const url = 'https://drive.google.com/file/d/1bDKhJBrKTnTJ7YC_4o_hMeFMiY5VDIce/view';
  const linkText = 'Informe mayo 2024 : situacion comedores y merenderos comunitarios.';

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Laboratorio comunitario</h1>
        <p>Desde Kumelkan creamos el Laboratorio Comunitario, donde llevamos adelante investigaciones y reportes  que tengan como protagonistas a las personas que habitan en barrios populares.
          <br />
          <br />
          Nuestro objetivo es brindar información para incidir en la agenda pública, visibilizar las problemáticas y miradas desde los barrios populares y ser de utilidad para el desarrollo de proyectos sociales en general y/o políticas públicas en particular.
        </p>
      </div>
      <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer">
        {linkText}
      </a>
    </div>
  )
}