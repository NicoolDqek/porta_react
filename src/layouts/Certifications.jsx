import React from 'react'
import CardCertificaction from '../components/cards/CardCertificaction'

export default function Certifications() {
  return (
    <aside className='certifications'>
      
         <div className='encabezado'>
    <h5>Certficados</h5>
    </div> 
       <CardCertificaction/>
       <CardCertificaction/>
       <CardCertificaction/>
      
    </aside>
  )
}
