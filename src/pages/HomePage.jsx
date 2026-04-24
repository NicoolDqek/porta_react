import React, { useState } from 'react'
import iconHome from '../assets/iconHome.png'
import Sidebar from '../components/navbar/sidebar/Sidebar'
import CardAbjetive from '../components/cards/CardAbjetive'

export default function Home() {

  const [characteristics] = useState([
  {
    id: 1,
    icon: "bi bi-bullseye",
    title: "Compromizo",
    description: "Dedicación total en cada proyecto"
  },
  {
    id: 2,
    icon: "bi bi-rocket-takeoff-fill",
    title: "Aprendizaje Continuo",
    description: "Siempre aprendiendo nuevas tecnologías"
  },
  {
    id: 3,
    icon: "bi bi-people-fill",
    title: "Colaboracion",
    description: "Colaboro y comunico de forma efectiva"
  },
  {
    id: 4,
    icon: "bi bi-lightbulb-fill",
    title: "Creatividad",
    description: "Soluciones únicas para cada problema"
  },
  {
    id: 5,
    icon: "bi bi-puzzle-fill",
    title: "Resolución",
    description: "Analizo y resuelvo con pensamiento lógico"
  },
  {
    id: 6,
    icon: "bi bi-clock-fill",
    title: "Puntualidad",
    description: "Entrego siempre a tiempo sin excusas"
  }
])
  return (
    <div className='container section_render'>
   <div className='encabezado'>
    <h3>Sobre Mi</h3>
    <button className='btn-more'>Ver mas<i class="bi bi-arrow-right"></i></button>
    </div> 

    <div className='perfil'>
  <h6><strong>Fecha nacimiento: </strong>22 Julio 2022</h6>
  <h4>Ingenieria Software</h4>
 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, sapiente error nobis esse exercitationem autem quidem nulla alias quos nemo quas, sint reiciendis ipsum perferendis nostrum recusandae beatae aliquid ea.</p>
 
 <div className="row caracteristicas">
  {characteristics.map(card=>(
    <CardAbjetive key={card.id} card={card}/>
  ))}
 </div>

    </div>
   
   
    </div>
  )
}
