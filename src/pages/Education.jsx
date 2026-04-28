import React from 'react'
import CardEducation from '../components/cards/CardEducation'
import  eduction from '../mock/certificados.mock.json'

export default function Education() {
  return (
     <div className='container section_render education'>
      
      <i class="bi bi-backpack4-fill m-3 fw-ligth fs-4"> Educacion</i>

      <div className="row educationCards">
        <div className='col'>
          {
            eduction.slice(0,3).map(c=>(
               <CardEducation key={c.id} card={c}/>
            ))
          }
       
       
        </div>
      
      </div>
      
    </div>
  )
}
