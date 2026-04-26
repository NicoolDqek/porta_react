import React, { useState } from 'react'
import styles from "../../components/cards/Card.module.css"
import EducationModal from '../modal/EducationModal'
import stylesM from '../../components/modal/modal.module.css'

export default function CardProject() {


    const [open, setOpen] = useState(false)

  return (
    <>
    <article onClick={() => setOpen(true)} className={`${styles.cardProject} col-3`}>
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
