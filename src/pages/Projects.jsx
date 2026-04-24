import React from 'react'
import CardProject from '../components/cards/CardProject'

export default function Projects() {
  return (
    <section className='projects section_render container'>
      
       <div className='encabezado mt-3'>
    <h3> Mis Proyectos</h3>
    <button className='btn-more'>Ver mas<i class="bi bi-arrow-right"></i></button>
    </div> 
    
    <div className="row Proyectos ">
       <CardProject/>
       <CardProject/>
       <CardProject/>
       
    </div>
     <div className='encabezado mt-3 pt-4'>
    <h3> En proceso</h3>
    <button className='btn-more'>Ver mas<i class="bi bi-arrow-right"></i></button>
    </div> 
    <div className="row oncoming">
       <CardProject/>
       <CardProject/>
    </div>
    </section>
  )
}
