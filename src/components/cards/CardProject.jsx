import React from 'react'
import styles from "../../components/cards/Card.module.css"


export default function CardProject() {
  return (
    <article className={`${styles.cardProject} col-3`}>
        <div className={styles.imgcard} >
<img src="https://media.istockphoto.com/id/2121959053/photo/3d-render-cartoon-orange-corgi-puppy-in-sitting-pose.jpg?s=612x612&w=0&k=20&c=_dI_vZeITfsw3JPhoNL5UO0deIPwcQbNVldTM4qFRn0=" className={styles.cardimg} alt="" />
        </div>
      <div className={styles.infoP}>
        <h6 className={styles.tittleProject}>
       Smart Bazzart
      </h6>
     <p>descripcion corta de proyecto</p>
       
      </div>
   
    </article>
  )
}
