import React from 'react'
import { NavLink } from 'react-router-dom'
import './Featured.css'

const Featured = () => {
  return (
    <div className='featured' >
        <div className='topcontainer' >
            <p className='f' >Featured Exercises</p>
            <p className='c'> OUR FEATURED EXERCISES all about</p>
        </div>

        <div className='lowerContainer' >
            <div> <p>Name</p> 
            <img src="https://gymvisual.com/img/p/5/6/6/7/5667.gif" alt="name" />
            </div>
            <div> <p>Body part</p>
            <img src="https://gymvisual.com/img/p/2/4/0/1/5/24015.gif" alt="body parts" />
             </div>
            <div> <p>Equipment</p>
            <img src="https://gymvisual.com/img/p/4/7/5/0/4750.gif" alt="bodyPart" />
             </div>
            <div> <p> Muscle</p>
            <img src="https://gymvisual.com/img/p/2/1/5/7/0/21570.gif" alt="Muscles" />
            
             </div>
            
            
        </div>
      
    </div>
  )
}

export default Featured
