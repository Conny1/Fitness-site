import axios from "axios";
const options = {
    headers: {
      'X-RapidAPI-Key': '3d4d648245mshc0863e3b0caaf09p108d0ejsn122b9d5612ea',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export  const getData=(url)=>{
    const data = axios.get(url,options)
    return data
    
  }
  
  

