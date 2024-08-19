import React from 'react'
import { useParams } from 'react-router-dom';

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

function BusDetails() {

  const {Bus_id} = useParams()
  console.log(Bus_id)

  return (
    <div>
      <h1>Hello Bus</h1>
    </div>
  )
}

export default BusDetails
