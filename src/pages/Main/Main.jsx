import React from 'react'
import { useEffect ,useState} from 'react'
import styles from './styles.module.css'
import NewsBanner from '../../component/newsBanner/newsBanner.jsx'
import { getNews } from '../../api/apiNews.js'
import NewsList from '../../component/NewsList/newsList.jsx'
import Skeleton from '../../component/Skeleton/Skeleton.jsx'

const Main = () => {
const [news, setNews] = useState([])
const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
     const fetchNews = async()=>{
        try {
           setisLoading(true)
       const res = await getNews ()

       setNews(res.news);
       setisLoading(false)
     } catch (error) {
        console.log('2',error);
        
     } 
     }
    
     fetchNews() 
    }, [])

    
    
  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ?(<NewsBanner item = {news[0]}/>):(<Skeleton count={1} type={'banner'}/>)}
      {!isLoading? <NewsList news = {news}/> : <Skeleton count={10} type={'item'}/>}
      
      </main>
  )
}

export default Main