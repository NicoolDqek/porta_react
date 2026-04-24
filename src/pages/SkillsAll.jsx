import React, { useState } from 'react'
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import react from "../assets/img/react.png";
import node from "../assets/img/node.png";
import mongo from "../assets/img/mongo.png";
import CardSkill from '../components/cards/CardSkill';

export default function SkillsAll() {

const [skills] = useState([
  { id: 1, name: "HTML", progress: 90, icon: html, color: "#7a2a1a" },
  { id: 2, name: "CSS", progress: 80, icon: css, color: "#1a3a7a" },
  { id: 3, name: "JavaScript", progress: 75, icon: js, color: "#7a6a1a" },
  { id: 4, name: "React", progress: 70, icon: react, color: "#1a5a6a" },
  { id: 5, name: "Node.js", progress: 60, icon: node, color: "#1a5a2a" },
  { id: 6, name: "MongoDB", progress: 55, icon: mongo, color: "#1a4a2a" },
])

  return (
    <div className='container section_render skillall'>
      <h3>Skills</h3>
      
      <div className="row skills_card">

{      skills.map(skill=> (

     <CardSkill key={skill.id} skill={skill}/>
     ))}
       
      </div>

     
    </div>
  )
}
