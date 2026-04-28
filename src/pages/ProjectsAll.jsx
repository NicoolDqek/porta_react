import React from 'react'
import CardEducation from '../components/cards/CardEducation'
import CardLarge from '../components/cards/CardLarge'
import { useNavigate } from 'react-router-dom'
import  projects from '../mock/projects.mock.json'

export default function ProjectsAll() {
  const navigate = useNavigate()
 
   return (
      <div className='container section_render projesctsall'>
       <button className='btn-back'  onClick={() => navigate('/projects')}><i class="bi bi-arrow-left"></i></button>
          <i className="bi bi-book-half m-3 fw-ligth fs-4 text-center  fw-bold"> Proyectos</i>
    
          <div className="row ProjectsCards">
            <div className='col'>

              {projects.map(p =>(
              <CardLarge key={p.id} project={p}/>
              ))}
    
          
            </div>
          </div>  
        </div>
  )
}
