import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import {Nav} from './componets';
import { Exercise, Exercises, Home } from './pages';
import { allExercie } from './redux/slice/exerciseSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getData} from './utils/FetchData';

const Layout = ()=>{
  return(
    <div className='app' >
      <Nav/>
      <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'exercises',
        element:<Exercises/>
      },
      {
        path:'exercise/:id',
        element:<Exercise/>
      },
    ]
  }
])

function App() {
  const url = 'https://exercisedb.p.rapidapi.com/exercises'
 const dispatch = useDispatch()
//  get the data
const Fetchdata=async()=>{
    await  getData(url)
  .then((resp)=> dispatch(allExercie(resp.data)))
  
 
}
useEffect(()=>{
 Fetchdata()
},[])



  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
