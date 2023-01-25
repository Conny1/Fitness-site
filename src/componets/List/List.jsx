import React from 'react'
import { NavLink } from 'react-router-dom'
import './List.css'
import { useDispatch } from 'react-redux'
import { singleExercise } from '../../redux/slice/exerciseSlice'

const List = ({ equipment, bodyPart, id, name,gifUrl }) => {
  const dispatch = useDispatch()
  
  return (
    <div className='list' onClick={()=>dispatch(singleExercise({id}))}   >
        <NavLink to ={`/exercise/:${id}`}>
            <div className='gif' >
                <img src={gifUrl} alt={name} loading= 'lazy' />
            </div>
            <div className='Exerciseinfo' >
                <p >Name: {name} </p>
                <p>Equipment: {equipment }</p>
                <p>Bodypart: {bodyPart}</p>
                
            </div>
        </NavLink>
      
    </div>
  )
}

export default List
