import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import Coffees from './Components/Coffees'
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees]= useState(loadedCoffees)
  
  return (
    <>
      <div className='w-3/4 mx-auto'>
      <div className='text-center mt-10 '>
        <p>---- Sip & Savor ----</p>
        <h1 className='font-bold text-2xl'>Our Popular Products</h1>
        <Link to="/addCoffee"><button className='btn mt-2'>Add Coffee</button></Link>
      </div>
      <h1>Coffees : {coffees.length}</h1>
     <div  className='grid lg:grid-cols-2 gap-2'>
     {
        coffees.map(coffee =><Coffees key={coffee._id} coffee={coffee}
        coffees={coffees} setCoffees={setCoffees}
        ></Coffees>)
      }
     </div>
      
      </div>
    </>
  )
}

export default App
