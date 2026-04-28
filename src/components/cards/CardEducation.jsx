import React, { useState } from 'react'
import styles from './Card.module.css'
import logo from '../../assets/img/education.png'
import EducationModal from '../modal/EducationModal'
import stylesM from '../../components/modal/modal.module.css' 


export default function CardEducation({card}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <article className={`${styles.cardEducation} row`}>
        <div className={`${styles.lefte} col-4`}>
          <img src={logo} alt="logo educacion" className={styles.imgeducation}/>
        </div>
        <div className={`${styles.right} col-8`}>
          <h4 className={styles.curso}>{card.nombre_curso}</h4>
          <p className={styles.curso_description}>{card.descripcion}</p>
          <h6 className={styles.date}><strong>Fecha inicio:</strong> {card.fecha_inicio}</h6>
          <h6 className={styles.date}><strong>Fecha Culminacion:</strong> {card.fecha_culminacion}</h6>
          <button className={styles.diploma} onClick={() => setOpen(true)}>  {/* ← abre */}
            <i className="bi bi-caret-right-fill"></i>
            <span>ver diploma</span>
          </button>
        </div>
      </article>

      <EducationModal open={open} onClose={() => setOpen(false)}> 
          <div className={`${stylesM.EdModal} row`}>
            <div className={`${stylesM.imgG} col-lg-7`}>
          
               <img src={card.diploma_img} alt="diploma" className={`${stylesM.diplomaimg}`}/>  
                    <h6><strong>Fecha inicio:</strong> {card.fecha_inicio}</h6>
        <h6><strong>Fecha culminación:</strong> {card.fecha_culminacion}</h6>
       
            </div>
        
        <div className={`col-lg-5 ${stylesM.inforE}`}>
            <h3>Bachiller Academico</h3>                    
        <p><strong>Institución: </strong>{card.institucion}</p>         
        <p>{card.descripcion_larga}</p>
        <h6><strong>Duración:</strong> 40 horas</h6>
        <h6><strong>Modalidad:</strong> Virtual</h6>
          
          </div>   
      
          
    </div>
</EducationModal>
 
    </>
  )
}