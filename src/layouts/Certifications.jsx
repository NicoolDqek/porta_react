import React from 'react'
import CardCertificaction from '../components/cards/CardCertificaction'

export default function Certifications() {
  return (
    <aside className='certifications'>
      
         <div className='encabezado'>
    <h5>Certficados</h5>
    <button className='btn-more'>Ver mas<i class="bi bi-arrow-right"></i></button>
    </div> 
       <CardCertificaction/>
       <CardCertificaction/>
       <CardCertificaction/>
      
    </aside>
  )
}
