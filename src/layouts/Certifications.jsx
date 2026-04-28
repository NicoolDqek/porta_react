import React from 'react'
import CardCertificaction from '../components/cards/CardCertificaction'
import  eduction from '../mock/certificados.mock.json'

export default function Certifications() {
  return (
    <aside className='certifications'>
      
         <div className='encabezado'>
    <h5>Certficados</h5>
    </div> 
    {eduction.slice(3,6).map(c=>(
 <CardCertificaction key={c.id}  certificado={c}/>
    )
    )}
      
       
      
    </aside>
  )
}
