import React from 'react'
import styles from './Card.module.css'
import logo from '../../assets/img/education.png'
export default function CardEducation() {
  return (
    <article 
      className={`${styles.cardEducation} row`}
    > 

   <div className={`${styles.lefte} col-4`}>
  <img src={logo} alt="logo educacion" className={`${styles.imgeducation}`}/>

   </div>
   <div className={`${styles.right} col-8`}>
   <h4 className={`${styles.curso}`}>nombre curso</h4> 
    
    <p className={`${styles.curso_description}`} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro autem odio recusandae perferendis quaerat </p>
    <h6 className={`${styles.date}`}>
      <strong>Fecha inicio:</strong> 34235
    </h6>

    <h6 className={`${styles.date}`}>
      <strong>Fecha Culminacion:</strong> 34235
    </h6>
  <button className={styles.diploma}>
    <i className="bi bi-caret-right-fill"></i>
    <span>ver diploma</span>
</button>
   </div>

      
    </article>
  )
}