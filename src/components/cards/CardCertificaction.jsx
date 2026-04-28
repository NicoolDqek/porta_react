import React, { useState } from 'react'
import styles from './Card.module.css'
import EducationModal from '../modal/EducationModal'
import stylesM from '../../components/modal/modal.module.css' 


export default function CardCertificaction({certificado}) {
  const [open, setOpen] = useState(false)
  
  return (
    <>
    <article className={styles.cardCertification}>

  <div className={styles.iconWrapper}>
    <i className={`${styles.icon} bi bi-backpack2-fill`}></i>
  </div>
  <div  className={styles.info}>
  <p className={`${styles.description} m-5 p-1`}>{certificado.nombre_curso}</p>

  </div>
  <button onClick={() => setOpen(true)} className={styles.buttonCard}>Ver</button>

</article>
  <EducationModal open={open} onClose={() => setOpen(false)}> 
          <div className={`${stylesM.EdModal} row`}>
            <div className={`${stylesM.imgG} col-lg-7`}>
          
               <img src={certificado.diploma_img} alt="diploma" className={`${stylesM.diplomaimg}`}/>  
                    <h6><strong>Fecha inicio:</strong>{certificado.fecha_inicio}</h6>
        <h6><strong>Fecha culminación:</strong>{certificado.fecha_culminacion}</h6>
       
            </div>
        
        <div className={`col-lg-5 ${stylesM.inforE}`}>
            <h3>{certificado.nombre_curso}</h3>                    
        <p><strong>Institución: </strong> {certificado.institucion}</p>         
        <p>{certificado.descripcion_larga}</p>
        <h6><strong>Duración:</strong> 40 horas</h6>
        <h6><strong>Modalidad:</strong>{certificado.modalidad}</h6>
          
          </div>   
      
          
    </div>
</EducationModal>
</>
  )
}
