import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './sideBar.module.css'
import imgPerfil from '../../../assets/img/perfilFoto.jpg'
const navClass = ({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true)
      } else {
        setCollapsed(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize) 
  }, [])

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
               <div className={`${styles.overlay} overlay`}></div>
       
      <ul>
        <li>
          <button className={styles.button} onClick={() => setCollapsed(!collapsed)}>
            {collapsed ?<i className={`${styles.logo} bi bi-arrow-bar-right`}></i> : <i class={`${styles.logo} bi bi-arrow-bar-left`}></i> }
          </button>
        </li>
        {!collapsed && 
          <li className={styles.user}>
          <img src={imgPerfil} alt="" />
          <p className={styles.navText}>Nicool Dayana Cueca Velandia</p>
        </li>  
        }
        
        <li className={styles.navItem}>
          <NavLink to="/" end className={navClass}>
            <i className={`${styles.navIcon} bi bi-house-fill`}></i>
            {!collapsed && <span className={styles.navText}>Home</span>}
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/projects" className={navClass}>
            <i className={`${styles.navIcon} bi bi-journal-code`}></i>
            {!collapsed && <span className={styles.navText}>Projects</span>}
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/skills" className={navClass}>
            <i className={`${styles.navIcon} bi bi-pen-fill`}></i>
            {!collapsed && <span className={styles.navText}>Skills</span>}
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/education" className={navClass}>
            <i className={`${styles.navIcon} bi bi-file-earmark-richtext-fill`}></i>
            {!collapsed && <span className={styles.navText}>Education</span>}
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/contact" className={navClass}>
            <i className={`${styles.navIcon} bi bi-person-lines-fill`}></i>
            {!collapsed && <span className={styles.navText}>Contact</span>}
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}