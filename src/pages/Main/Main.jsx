import React from 'react'
import { useEffect ,useState} from 'react'
import styles from './styles.module.css'
import NewsBanner from '../../component/newsBanner/newsBanner.jsx'
import { getNews } from '../../api/apiNews.js'
import NewsList from '../../component/NewsList/newsList.jsx'

const Main = () => {
const [news, setNews] = useState([])
    useEffect(() => {
     const fetchNews = async()=>{
        try {
       const res = await getNews ()
       setNews(res.news);
       
     } catch (error) {
        console.log('2',error);
        
     } 
     }
    
     fetchNews() 
    }, [])
    
  return (
    <main className={styles.main}>
      {news.length > 0 ?<NewsBanner item = {news[0]}/>:null}
      <NewsList news = {news}/>
      
      </main>
  )
}

export default Main