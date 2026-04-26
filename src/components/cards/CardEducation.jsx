import React, { useState } from 'react'
import styles from './Card.module.css'
import logo from '../../assets/img/education.png'
import EducationModal from '../modal/EducationModal'
import stylesM from '../../components/modal/modal.module.css' 


export default function CardEducation() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <article className={`${styles.cardEducation} row`}>
        <div className={`${styles.lefte} col-4`}>
          <img src={logo} alt="logo educacion" className={styles.imgeducation}/>
        </div>
        <div className={`${styles.right} col-8`}>
          <h4 className={styles.curso}>nombre curso</h4>
          <p className={styles.curso_description}>Lorem ipsum dolor sit amet consectetur</p>
          <h6 className={styles.date}><strong>Fecha inicio:</strong> 34235</h6>
          <h6 className={styles.date}><strong>Fecha Culminacion:</strong> 34235</h6>
          <button className={styles.diploma} onClick={() => setOpen(true)}>  {/* ← abre */}
            <i className="bi bi-caret-right-fill"></i>
            <span>ver diploma</span>
          </button>
        </div>
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