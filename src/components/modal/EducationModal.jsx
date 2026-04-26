import React from 'react'
import { createPortal } from 'react-dom'
import styles from './modal.module.css'

export default function EducationModal({ open, onClose, children }) {

     if (!open) return null
   
       return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        {children}   
      </div>
    </div>,
    document.body
  )
}
