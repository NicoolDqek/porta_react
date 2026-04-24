import React from 'react'
import styles from "../../components/cards/Card.module.css"
import html from "../../assets/img/html.png";
 



export default function CardSkill({skill}) {
  return (
    <article className={`${styles.skillCard} col-lg-2 col-md-4 col-sm-6`}>
      <div className={styles.color} style={{ '--Color': skill.color }}>
       <img className={`${styles.imgtec}`}  src={skill.icon} alt="" />
      </div>
      <div className={`${styles.tecnology}`}>
        <h6>{skill.name}</h6>
      <span className={styles.progressBar}>
    <span className={styles.barContainer}>
        <div className={styles.bar} style={{ '--progress': `${skill.progress}%`, '--Color':`${skill.color}` }}></div>
    </span>
    <p>{skill.progress}%</p>
</span>
      </div>
    </article>
  )
}
