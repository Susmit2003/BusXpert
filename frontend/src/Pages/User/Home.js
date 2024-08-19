import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import BusComponent from "../../component/BusComponent";
import { useNavigate } from "react-router-dom";

const BusArray = [
  {
    _id: "akjsihd5414jan",
    busNumber: "AS02145",
    route: ["collage", "nanakpur", "pinjore", "panchkula", "chandigarh"],
    capacity: 50,
    currentLocation: "xyz",
    status: "running",
  },
  {
    _id: "akjsihtr54ttgyrjan",
    busNumber: "AS02145",
    route: ["collage", "nanakpur", "pinjore", "panchkula", "chandigarh"],
    capacity: 50,
    currentLocation: "xyz",
    status: "running",
  },
  {
    _id: "asree5rh2kjsihdjan",
    busNumber: "AS02145",
    route: ["collage", "nanakpur", "pinjore", "panchkula", "chandigarh"],
    capacity: 50,
    currentLocation: "xyz",
    status: "running",
  },
];

function Home() {
  const navigate = useNavigate();
  const [Busses,setBusses] = useState([])

  const fetchBusData = ()=>{
    //axios request
    setBusses(pre=>BusArray)
  }

  useEffect(()=>{
    fetchBusData()
  },[])

  const handleClick = (e) => {
    navigate(`/user/${e._id}`);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:justify-evenly">
      <div className="flex flex-col md:mb-8 mt-2 justify-center">
        <h1 className="text-red-700 font-bold text-3xl md:text-[55px] mb-4">
          Hello Name!
        </h1>
        <h2 className="text-2xl">Welcome to BusXpert</h2>
      </div>
      <div className="flex-col mr-4">
        {Busses.map((e, i) => {
          return (
            <div
              key={i}
              className="mt-4 mb-2 md:mb-8"
              onClick={() => handleClick(e)}
            >
              <BusComponent Bus={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
