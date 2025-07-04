import React from 'react'
import styles from './styles.module.css'
import Image from '../Image/image.jsx'

const NewsBanner = ({item}) => {
  return (
    <div>
        <div className={styles.banner}>
          <Image image = {item?.image}/></div>
         <h3 className={styles.title}>{item.title}</h3>
         <p className={styles.title}>
          {item.published} by {item.author}
          </p>

    </div>
  )
}

export default NewsBanner