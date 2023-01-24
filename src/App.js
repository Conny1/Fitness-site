import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import {Nav} from './componets';
import { Exercise, Exercises, Home } from './pages';

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

  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
