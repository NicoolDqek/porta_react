import React from 'react'
import styles from "./banner.module.css"
import bannerImg from "../../assets/img/banner.png"
export default function Banner() {
  return (
    <header className={`row ${styles.banner}`}>
        <div className={`${styles.overlay} overlay`}></div>
     <div className={`${styles.left} col-lg-6 col-md-8 col-sm-12`}>

    
  <h4 className={styles.date}>
  {new Date().toLocaleDateString('es-CO', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })}
</h4>
  <div className={styles.redes}>
  <ul>
    <li>
      <a href="#" className={styles.Ricons}>
        <i className="bi bi-github"></i>
      </a>
    </li>
    <li>
      <a href="#" className={styles.Ricons}>
        <i className="bi bi-linkedin"></i>
      </a>
    </li>
    <li>
      <a href="#" className={styles.Ricons}>
        <i className="bi bi-envelope-at-fill"></i>
      </a>
    </li>
  </ul>
  <h3 className={styles.welcome}>¡Bienvenido, Mi Portafolio!</h3>
</div>
 
</div>
      <div className={`${styles.right} col-lg-6 col-md-3 col-sm-12`}>
        <img src={bannerImg} alt="3d girl" className={styles.headerImg} />
      </div>
    </header>
  )
}
