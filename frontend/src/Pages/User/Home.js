import React from 'react'
import Navbar from '../../component/Navbar'
import BusComponent from '../../component/BusComponent'

function Home() {

  const BusArray = [{
    busNumber: "AS02145",
    route: ["collage","nanakpur","pinjore","panchkula","chandigarh"],
    capacity: 50,
    currentLocation: "xyz",
    status: "running"
  },
  {
    busNumber: "AS02145",
    route: ["collage","nanakpur","pinjore","panchkula","chandigarh"],
    capacity: 50,
    currentLocation: "xyz",
    status: "running"
  },
  {
    busNumber: "AS02145",
    route: ["collage","nanakpur","pinjore","panchkula","chandigarh"],
    capacity: 50,
    currentLocation: "xyz",
    status: "running"
  }
]

const handleClick = (e)=>{
  console.log(e)
  
}

  return (
    <div className='w-full flex flex-col lg:flex-row items-center lg:justify-evenly'>
      <div className='flex flex-col md:mb-8 mt-2 justify-center'>
        <h1 className='text-red-700 font-bold text-4xl md:text-6xl'>Hello Name!</h1>
        <h2 className='text-2xl'>Welcome to BusXpert</h2>
      </div>
      <div className='flex-col mr-4'>
      {BusArray.map((e,i)=>{
        return (
          <div key={i} className='mt-4 mb-2 md:mb-8' onClick={()=>handleClick(e)}>
            <BusComponent Bus = {e}/>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Home
