import React from 'react'
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import react from "../assets/img/react.png";
import node from "../assets/img/node.png";
import mongo from "../assets/img/mongo.png";
import { useNavigate } from 'react-router-dom';

export default function Skills() {

  const navigate=useNavigate()
  return (
    <section className="skillsLateral">
      <div className='encabezado'>
    <h5>Skills</h5>
    <button onClick={()=>navigate('/skills')} className='btn-more'>Ver mas<i class="bi bi-arrow-right"></i></button>
    </div> 
      
      <div className="skills row">
        <article className='skillCard col-lg-4 col-md-6 col-sm-3 '>
        <img src={html} alt="img-html" />           
       </article>
       <article className='skillCard col-lg-4 col-md-6 col-sm-3 '>
        <img src={css} alt="img-html" />           
         
           
       </article>
       <article className='skillCard col-lg-4 col-md-6 col-sm-3 '>
        <img src={js} alt="img-html" />           
            
       </article>
       <article className='skillCard col-lg-4 col-md-6 col-sm-3 '>
        <img src={node} alt="img-html" />           
         
           
       </article>
       <article className='skillCard col-lg-4 col-md-6 col-sm-3 '>
        <img src={mongo} alt="img-html" />           
         
           
       </article>
       <article className='skillCard col-lg-4 col-md-6 col-sm-3 '>
        <img src={react} alt="img-html" />           
           
       </article>
      
      </div>
    </section>
  )
}
