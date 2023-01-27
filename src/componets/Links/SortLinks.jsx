import React from 'react'
import './Links.css' 
import { getData } from '../../utils/FetchData'
import { useDispatch } from 'react-redux'
import { sorteddataaction } from '../../redux/slice/Sortslice'

const SortLinks = ({item, showequip, showbodyPart}) => {
  const dispatch = useDispatch()
  const  fetchSortedexercises= async (val) =>{
    const url1 ='https://exercisedb.p.rapidapi.com/exercises/bodyPart'
    const url2 ='https://exercisedb.p.rapidapi.com/exercises/equipment'
  
     await getData(showequip && !showbodyPart ?`${url2}/${val}`:`${url1}/${val}`)
    .then((resp)=>dispatch(sorteddataaction(resp.data))  )
  
  }
 
  return (
    <div className='links' >
      <button onClick={()=>{
        fetchSortedexercises(item)
        
        } } >{item}</button>

    </div>
  )
}

export default SortLinks
