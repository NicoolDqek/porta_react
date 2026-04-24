import React from 'react'
import CardEducation from '../components/cards/CardEducation'

export default function Education() {
  return (
     <div className='container section_render education'>
      
      <i class="bi bi-backpack4-fill m-3 fw-ligth fs-4"> Educacion</i>

      <div className="row educationCards">
        <div className='col'>
  <CardEducation/>
        <CardEducation/>
        <CardEducation/>
        </div>
      
      </div>
      <i></i>
    </div>
  )
}
