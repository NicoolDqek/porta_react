import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/navbar/sidebar/Sidebar'
import Banner from '../components/banner/Banner'
import Skills from './Skills'
import Certifications from './Certifications'

export default function RootLayout() {
  const location = useLocation()
  
  const showNavbar = ['/', '/projects','/skills','/education', '/contact'].includes(location.pathname)

  
  const showSkill = ['/', '/projects','/education', '/contact'].includes(location.pathname)

  return (
    <>
      {showNavbar && (
      
          <Sidebar/>
      
      )}
      <main>
      <div className='container'>
        <Banner/>
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8">
            <Outlet/>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-8">
            {showSkill &&
            <Skills/>
            
            }
           
           <Certifications/>
          </div>
          
        </div>
         
      </div>
         
       
      </main>
    </>
  )
}