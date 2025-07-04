import React from 'react'
import { formData } from '../helpers/formData.js'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>NEW SAMARA</h1>
        <p>{formData(new Date())}</p>
    </header>
  )
}

export default Header