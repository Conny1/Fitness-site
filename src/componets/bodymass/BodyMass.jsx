import React, {  useState } from 'react'
import './BodyMass.css' 

const BodyMass = () => {
    const [showbmi, setshowbmi] = useState(false)
    const [bmi, setBmi] = useState(0)
    const [val, setvals] = useState({
        height:0,
        weight:0
    })
    const [healthState, setHealthState] = useState('')
    // collect input
     const getInput=(e)=>{
        setvals({...val, [e.target.name]:e.target.value})
     }
    // claculate BMI
    const calculate =()=>{
        if(!val.height || !val.weight ){
            alert('Enter all valid inputs')
            return
        }
        let calc = 0
        calc =  val.weight / val.height
        calc = calc.toFixed(2)
        setBmi(calc)
        if ( calc < 18.50 ){
            setHealthState('Underweight')
        }else if(calc>18.5 && calc < 24.99){
            setHealthState('Healthy Weight')

        }else if(calc > 25.00 && calc < 29.99){
            setHealthState('Overweight')
            
        }else{
            setHealthState('Obese')
        }
        setshowbmi(!showbmi)
        
    }
  
    
  return (
    <div className='bodymass' >
        <div className='leftContainer' >
            <p>Calculate BMI</p>
            <h3> Calculate your Body mass index </h3>
        </div>
        <div className='rightContainer' >
            <div className='inputs' >
                <input type="number"  onChange={getInput} name="height" placeholder='Enter height in Meters(M)'  />
                <input type="number"  onChange={getInput} name="weight" placeholder='Enter weight in Kilograms(Kg)'  />
                <button onClick={calculate} >Calculate</button>

            </div>
            { showbmi && <div className='bmi' >
                <p>Your BMI is {bmi}</p>
                <p><b>{healthState}</b></p>

                
                 </div> }


        </div>

      
    </div>
  )
}

export default BodyMass
