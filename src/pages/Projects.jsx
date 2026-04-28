import React from 'react'
import CardProject from '../components/cards/CardProject'
import {  useNavigate } from 'react-router-dom'
import  projects from '../mock/projects.mock.json'
import  ongoing from '../mock/ongoing.module.json'
export default function Projects() {
   const navigate = useNavigate()

  return (
    <section className='projects section_render container'>
      
       <div className='encabezado mt-3'>
    <h3> Mis Proyectos</h3>
   <button className='btn-more' onClick={() => navigate('/all_projects')}>Ver mas<i class="bi bi-arrow-right"></i></button>

    </div> 
    
    <div className="row Proyectos ">

   {projects.slice(0,3).map(p => (
<CardProject key={p.id} project={p} />
))}
       
    </div>
     <div className='encabezado mt-3 pt-4'>
    <h3> En proceso</h3>
    
    </div> 
    <div className="row oncoming">
       {ongoing.map(p => (
<CardProject key={p.id} project={p} />
))}
    </div>
    </section>
  )
}
