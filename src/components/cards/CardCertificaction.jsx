import React from 'react'
import styles from './Card.module.css'
export default function CardCertificaction() {
  return (
    <article className={styles.cardCertification}>

  <div className={styles.iconWrapper}>
    <i className={`${styles.icon} bi bi-backpack2-fill`}></i>
  </div>
  <div  className={styles.info}>
  <p className={`${styles.description} m-5 p-1`}>diplomado en ciencias de la computacion</p>

  </div>
  <button className={styles.buttonCard}>Ver</button>
</article>

  )
}
