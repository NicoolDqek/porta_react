import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/HomePage'
import AboutMe from './pages/AboutMePage'
import MoreAboutMe from './pages/MoreAboutMe'
import ProjectsAll from './pages/ProjectsAll'
import Projects from './pages/Projects'
import SkillsAll from './pages/SkillsAll'
import Education from './pages/Education'

function App() {
  

  return (
    <Routes>
    <Route element={<RootLayout/>}>
    <Route path="/" element={<Home/>} />
    <Route path="about" element={<AboutMe/>} />
    <Route path="/projects" element={<Projects/>} />
     <Route path="/skills" element={<SkillsAll/>} />
     <Route path="/education" element={<Education/>} />
     <Route path="/all_projects" element={<ProjectsAll/>} />
     
     
     </Route>
    </Routes>
  )
}

export default App
