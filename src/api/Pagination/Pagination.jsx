import React from 'react'
import styles from './styles.module.css'


const Pagination = ({totalPage,setcurrentPage,currentPage}) => {
const secondArrow = ()=>{
    if(currentPage <totalPage) {
        setcurrentPage(currentPage+1)
    } 
}

const firstArrow = ()=>{
    if(currentPage >1) {
        setcurrentPage(currentPage-1)
    } 
}




  return (
    <div className={styles.pagination}>
        <button disabled ={ currentPage < 2 ?true:false} className={styles.arrow} onClick={()=>firstArrow()}>{'<'}</button>
        <div className={styles.list}>
   { [...Array(totalPage)].map((_,index)=>{
     return <button className= {currentPage === index+1?styles.focus : styles.pageNumber} 
     key={index}
      onClick={()=>setcurrentPage(index+1)}
      disabled ={ currentPage === index+1?true:false}
      >
        {index+1}
        
        </button>
    })}
        </div>
        <button disabled ={ currentPage >= totalPage ?true:false} className={styles.arrow} onClick={()=>secondArrow()}>{'>'}</button>
    </div>
  )
}

export default Pagination