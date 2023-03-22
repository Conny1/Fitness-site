import React from 'react'
import './Home.css'
import {BodyMass, Featured, Footer} from '../../componets'
import gym from  '../../utils/img/gym.jfif'

const Home = () => {
  return (
    <div className='home' >
     <div className='header' >
     <img src={gym} alt="Man lifting weights" />
    
     <div className='headerInfo' >
      <p  className='a' >Grow your</p>
      <p className='b' >Strength</p>

     </div>
     </div>
     <BodyMass/>
     <Featured/>
     <Footer/>

      
    </div>
  )
}

export default Home
