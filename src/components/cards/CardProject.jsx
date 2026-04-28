import React, { useState } from 'react'
import styles from "../../components/cards/Card.module.css"
import EducationModal from '../modal/EducationModal'
import stylesM from '../../components/modal/modal.module.css'

export default function CardProject({ project }) {

  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [principal, setPrincipal] = useState(project.images[0])

  const handlePrev = () => {
    const newIndex = (index - 1 + project.images.length) % project.images.length
    setIndex(newIndex)
    setPrincipal(project.images[newIndex])
  }

  const handleNext = () => {
    const newIndex = (index + 1) % project.images.length
    setIndex(newIndex)
    setPrincipal(project.images[newIndex])
  }

  return (
    <>
      <article onClick={() => setOpen(true)} className={`${styles.cardProject} col-3`}>
        <div className={styles.imgcard}>
          <img src={project.mainImage} className={styles.cardimg} alt={project.title} />
        </div>
        <div className={styles.infoP}>
          <h6 className={styles.tittleProject}>{project.title}</h6>
        </div>
      </article>

      <EducationModal open={open} onClose={() => setOpen(false)}>
        <div className={`${stylesM.EdModal} row`}>

          <div className={`${stylesM.imgG} col-lg-7`}>
            <button className={`${stylesM.btnP} ${stylesM.btnAntes}`} onClick={handlePrev}>
              <i className="bi bi-arrow-left-circle-fill"></i>
            </button>
            <img src={principal} alt={project.title} className={stylesM.imgP} />
            <button className={`${stylesM.btnP} ${stylesM.btnDespues}`} onClick={handleNext}>
              <i className="bi bi-arrow-right-circle-fill"></i>
            </button>
          </div>

          <div className={`col-lg-5 ${stylesM.inforE}`}>
            <h4 className="text-center mb-4">{project.title}</h4>
            <p>{project.description}</p>
            <div className={stylesM.tecnologias}>
              <ul className="m-0 p-0">
                {project.technologies.map((t, i) => (
                  <i key={i} className={t.icon} title={t.title}></i>
                ))}
              </ul>
            </div>
          </div>

          <div className="row">
            <div className={`col-lg-9 ${stylesM.inforE}`}>
              <h4 className="mt-3">Aprendizaje</h4>
              <p>{project.learning}</p>
            </div>
            <div className={`col-lg-3 ${stylesM.git}`}>
              <button>
                <i className="bi bi-github"></i>
              </button>
              <button>
                <i className="bi bi-arrow-up-right-circle-fill"></i>
              </button>
            </div>
          </div>

        </div>
      </EducationModal>
    </>
  )
}