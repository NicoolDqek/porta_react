import React from 'react';
import styles from "./Card.module.css"

export default function CardAbjetive({card}) {
  return (
    <article className={`${styles.caracteristicas} col-lg-3 col-md-4 col-sm-5`}>
      <i className={`${styles.iconocaract} ${card.icon}`}></i>
       <h6 className={`${styles.titlecard}`}>{card.title}</h6>
       <p  className={`${styles.descriptioncard}`}>{card.description}</p>
    </article>
  )
}
