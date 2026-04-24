import React from 'react'
import CardCertificaction from '../components/cards/CardCertificaction'
import CardEducation from '../components/cards/CardEducation'
import { Navigate, redirect, useNavigate } from 'react-router-dom'

export default function AboutMe() {
  const navigate = useNavigate()

  return (
    <section className='AboutMe row'>
   <div className="rightAbout  col-lg-5  col-md-7 col-sm-12">
   <img src="https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/color-fondo-imagen-r.png" alt="" />
   </div>
   <div className="leftAbout col-lg-6 col-md-4 col-sm-12">
    <h1>About me</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi reiciendis dicta dolor labore ullam voluptate mollitia, expedita omnis sit repellendus aperiam ratione pariatur nobis fuga id vero iure corrupti officia.</p>

    <button onClick={() =>  navigate('more') }>More About Me 
      <i className="bi bi-arrow-right-circle-fill"></i>
    </button>
   </div>
     
       
      
    </section>
  )
}
