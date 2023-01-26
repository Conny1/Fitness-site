import React, { useEffect, useMemo, useState } from 'react'
import './Exercises.css'
import { useDispatch, useSelector } from 'react-redux'
import { List, SortLinks } from '../../componets'
import { allExercie } from '../../redux/slice/exerciseSlice'
import { getData } from '../../utils/FetchData'
import { setExercise, sortedEquipment, sorteBbodyParts } from '../../redux/slice/Sortslice'



const url = 'https://exercisedb.p.rapidapi.com/exercises'

const Exercises = () => {
  const [links, setLinks] = useState({})
  const [showbodyPart, setShowbodyPart] = useState(false)
  const [showequip, setShowequip] = useState(false)
  const exercises = useSelector((state=>state.exercise.exercise))
  const dispatch = useDispatch()
  const Sorted =()=>{
     dispatch(sorteBbodyParts())
     dispatch(sortedEquipment() )
  }
  // sorted dynamic Links
  const data = useSelector((state)=>state.sort)

  
   
  
  
useEffect (()=>{
  dispatch(setExercise(exercises))
  Sorted()
  setLinks(data)

},[exercises])
  // sort
  const sort = async (val)=>{
    if (val === 'all' ){
      await  getData(url)
      .then((resp)=> dispatch(allExercie(resp.data)))
    }else if( val === 'name' ){
      await  getData(`${url}/name`)
      .then((resp)=> dispatch(allExercie(resp.data)))
    }
  }
  
  return (
    <div className='exercises'  >
    <div className='sort' >
      <div className='btns' >
        <div><button>All</button></div>
       <div > <button onClick={()=>{
        setShowbodyPart(!showbodyPart)
        setShowequip(false)
        }}  >BodyPart</button>
       { showbodyPart && <div className='bodypart' >
        {
          links?.bodyPart?.map((item, index)=>{
            return <SortLinks key={index} item={item} />
          })
        }
       </div>}
       </div>
        <div><button  onClick={()=>{
        setShowbodyPart(false)
        setShowequip(!showequip)
        }} >Equipment</button>
        { showequip && <div className='bodypart' >
        {
          links?.equipment?.map((item, index)=>{
            return <SortLinks key={index} item={item} />
          })
        }
       </div>}
        </div>
        
        
      </div>
     
    </div>
    <div className='exercisesList' >
      {
        exercises?.map((item)=>{
          return <List key={item.id} {...item} />
        })
      }
    </div>
    </div>
  )
}

export default Exercises
