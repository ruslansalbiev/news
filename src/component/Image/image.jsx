import React from 'react'
import styles from './styles.module.css'

const Image = ({image}) => {
  return (
    <div className={styles.wrapper}>
        {image?<img src = {image}  className={styles.image}/>:null}
    </div>
  )
}

export default Image