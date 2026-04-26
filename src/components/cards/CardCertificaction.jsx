import React, { useState } from 'react'
import styles from './Card.module.css'
import EducationModal from '../modal/EducationModal'
import stylesM from '../../components/modal/modal.module.css' 


export default function CardCertificaction() {
  const [open, setOpen] = useState(false)
  
  return (
    <>
    <article className={styles.cardCertification}>

  <div className={styles.iconWrapper}>
    <i className={`${styles.icon} bi bi-backpack2-fill`}></i>
  </div>
  <div  className={styles.info}>
  <p className={`${styles.description} m-5 p-1`}>diplomado en ciencias de la computacion</p>

  </div>
  <button onClick={() => setOpen(true)} className={styles.buttonCard}>Ver</button>

</article>
  <EducationModal open={open} onClose={() => setOpen(false)}> 
          <div className={`${stylesM.EdModal} row`}>
            <div className={`${stylesM.imgG} col-lg-7`}>
          
               <img src="https://marketplace.canva.com/EAGGt0QFdOw/1/0/1600w/canva-diploma-t%C3%ADtulo-curso-profesional-acuarela-azul-Ky3b7DDIM5Y.jpg" alt="diploma" className={`${stylesM.diplomaimg}`}/>  
                    <h6><strong>Fecha inicio:</strong> 22 dediciembre, 2022</h6>
        <h6><strong>Fecha culminación:</strong> 22 dediciembre, 2022</h6>
       
            </div>
        
        <div className={`col-lg-5 ${stylesM.inforE}`}>
            <h3>Bachiller Academico</h3>                    
        <p><strong>Institución: </strong>Universidad X</p>         
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolores laudantium vitae ad nisi temporibus fugiat nemo molestias id a deserunt voluptatum quidem explicabo veritatis illo numquam, molestiae facilis excepturi?</p>
        <h6><strong>Duración:</strong> 40 horas</h6>
        <h6><strong>Modalidad:</strong> Virtual</h6>
          
          </div>   
      
          
    </div>
</EducationModal>
</>
  )
}
