import React, { useState } from 'react'
import './Exercises.css'
import { useDispatch, useSelector } from 'react-redux'
import { List } from '../../componets'
import { searchResluts } from '../../redux/slice/exerciseSlice'
import { allExercie } from '../../redux/slice/exerciseSlice'
import { getData } from '../../utils/FetchData'

const url = 'https://exercisedb.p.rapidapi.com/exercises'

const Exercises = () => {
    const [searchVal, setsearchVal] = useState( '')
    const [count, setCount] = useState(0)
  const exercises = useSelector((state=>state.exercise.exercise))
  const dispatch = useDispatch()

  // ?searchExercise
  const search = ()=>{
    
    
    if(searchVal ===  ''){
      alert( 'Enter search Input')
    }else{
      dispatch( searchResluts(searchVal) )
      setCount((prev)=> prev + 1)
    }
  }

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
        <button>All</button>
        <button>Name</button>
        <button>BodyPart</button>
        <button>Equipment</button>
        <button>Muscle</button>
        
      </div>
      <div className='search' >
        <input type="text"onChange={(e)=> setsearchVal(e.target.value)}  placeholder='Search by Name, Bodypart, Equipment or Muscle ' />
          <button onClick={search} >Search</button>
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
