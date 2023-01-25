import React from 'react'
import { useParams } from 'react-router-dom'
import './Exercise.css'
import {  useSelector } from 'react-redux'

const Exercise = () => {
  const single = useSelector((state)=>state.exercise?.singleexercise[0])
  // console.log(single)
  return (
    <>
    <div className='exercise' >
       <div className='exercisegif' >
                <img src={single?.gifUrl} alt={single.name} loading= 'lazy' />
            </div>
            <div className='exerciseinfo' >
                <p >Name: {single?.name} </p>
                <p>Equipment: {single?.equipment }</p>
                <p>Bodypart: {single?.bodyPart}</p>
                 
            </div>
            
    </div>
    
    </>
  )
}

export default Exercise
