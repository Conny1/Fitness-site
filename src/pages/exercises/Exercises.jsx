import React, { useEffect,useState } from 'react'
import './Exercises.css'
import { useDispatch, useSelector } from 'react-redux'
import { List, SortLinks } from '../../componets'
import { setExercise, sortedEquipment, sorteBbodyParts, } from '../../redux/slice/Sortslice'

const Exercises = () => {
  const [displaySorted , setDisplaySorted] = useState(false)
  const [links, setLinks] = useState({})
  const [sortedexercise, setSortedExercise ] = useState([])
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
  const sortedata = useSelector((state)=>state.sort.sortedData )
  const Showdata =()=>{
    setSortedExercise(sortedata)
    
    setDisplaySorted(true)
  }
  useEffect(()=>{
    Showdata()
    // eslint-disable-next-line
  }, [sortedata])

  
  
   
  
  
useEffect (()=>{
  dispatch(setExercise(exercises))
  Sorted()
  setLinks(data)
  // eslint-disable-next-line
},[exercises])
    
  return (
    <div className='exercises'  >
    <div className='sort' >
      <div className='btns' >
        <div><button onClick={()=>{setDisplaySorted(false)}} >All</button></div>
       <div > <button onClick={()=>{
        setShowbodyPart(!showbodyPart)
        setShowequip(false)
        }}  >BodyPart</button>
       { showbodyPart && <div className='bodypart' >
        {
          links?.bodyPart?.map((item, index)=>{
            return <SortLinks key={index} item={item} showequip={showequip} showbodyPart={showbodyPart} Showdata={Showdata}  />
          })
        }
       </div>}
       </div>
        <div><button  onClick={()=>{
          setShowequip(!showequip)
        setShowbodyPart(false)
        
        }} >Equipment</button>
        { showequip && <div className='bodypart' >
        {
          links?.equipment?.map((item, index)=>{
            return <SortLinks key={index} item={item} showequip={showequip} showbodyPart={showbodyPart}  />
          })
        }
       </div>}
        </div>
        
        
      </div>
     
    </div>
    <div className='exercisesList' >
      {
      (displaySorted?sortedexercise:exercises)?.map((item)=>{
          return <List key={item.id} {...item} />
        })
      }
    </div>
    </div>
  )
}

export default Exercises
