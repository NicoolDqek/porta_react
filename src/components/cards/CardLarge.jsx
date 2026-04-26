import React, { useState } from 'react'
import styles from './Card.module.css'
import logo from '../../assets/img/education.png'
import EducationModal from '../modal/EducationModal'
import stylesM from '../../components/modal/modal.module.css' 


export default function CardLarge() {
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
            <span>ver Mas</span>
          </button>
        </div>
      </article>

      <EducationModal open={open} onClose={() => setOpen(false)}> 
        <>
          <div className={`${stylesM.EdModal} row`}>
            <div className={`${stylesM.imgG} col-lg-7`}>
              <button className={`${stylesM.btnP} ${stylesM.btnAntes}`}><i class="bi bi-arrow-left-circle-fill"></i></button>
            <img src="https://res2.weblium.site/site/60ba356b4f789e0021d15ae8/preview1600_1000" alt="" className={`${stylesM.imgP}`} />
            <button className={`${stylesM.btnP} ${stylesM.btnDespues}`}><i class="bi bi-arrow-right-circle-fill"></i></button>
              
            </div>
        
        <div className={`col-lg-5 ${stylesM.inforE}`}>
           <h4 className='text-center mb-4'>Nombre Proyecto</h4>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam fugit dolore enim velit optio eligendi inventore cupiditate iste consequatur beatae dolor sunt voluptate, vitae quam magnam voluptas modi, laboriosam sit.</p>
           <div className={`${stylesM.tecnologias}`}>
                <ul className='m-0 p-0'>
                  <i class="bi bi-github" title="GitHub"></i>
                   <i class="bi bi-github"></i>
                    <i class="bi bi-github"></i>
                     <i class="bi bi-github"></i>
                </ul>
              </div>
          </div>   

      <div className='row'>
          <div className={`col-lg-10 ${stylesM.inforE} `}>
           <h4 className='mt-3'>Aprendizaje</h4>
           <p className=' '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam fugit dolore enim velit optio eligendi inventore cupiditate iste consequatur beatae dolor sunt voluptate, vitae quam magnam voluptas modi, laboriosam sit.</p>
          </div>  
          <div className={`col-lg-2 ${stylesM.git}`}>
          <button>
          <i class="bi bi-github"></i>
          </button>
          </div>
      </div>
          
    </div></>
</EducationModal>
 
    </>
  )
}