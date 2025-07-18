import axios from 'axios'

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY



export const getNews =async (page_number = 1, page_size = 10)=> {
    try {
      const response = await axios.get('/api',{
        params:{ 
            apiKey : API_KEY,
            page_size,
            page_number
      }})
      return response.data 
    } catch (e) {
        console.log('1',e);
        
    }
}