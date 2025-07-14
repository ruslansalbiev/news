import React from 'react'
import { useEffect ,useState} from 'react'
import styles from './styles.module.css'
import NewsBanner from '../../component/newsBanner/newsBanner.jsx'
import { getNews } from '../../api/apiNews.js'
import NewsList from '../../component/NewsList/newsList.jsx'
import Skeleton from '../../component/Skeleton/Skeleton.jsx'
import Pagination from '../../api/Pagination/Pagination.jsx'

const Main = () => {
const [news, setNews] = useState([])
const [isLoading, setisLoading] = useState(true)
const [currentPage, setcurrentPage] = useState(1)
const totalPage = 10
const pagesize = 10

 const fetchNews = async(currentPage)=>{
        try {
           setisLoading(true)
       const res = await getNews (currentPage,pagesize)

       setNews(res.news);
       setisLoading(false)
     } catch (error) {
        console.log('2',error);
        
     } 
     }
    useEffect(() => {
    
    
     fetchNews(currentPage) 
    }, [currentPage])

    
    
  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ?(<NewsBanner item = {news[0]}/>):(<Skeleton count={1} type={'banner'}/>)}
      <Pagination totalPage = {totalPage} currentPage={currentPage} setcurrentPage={setcurrentPage}/>
      {!isLoading? <NewsList news = {news}/> : <Skeleton count={10} type={'item'}/>}
      <Pagination totalPage = {totalPage} currentPage={currentPage} setcurrentPage={setcurrentPage}/>
      
      </main>
  )
}

export default Main