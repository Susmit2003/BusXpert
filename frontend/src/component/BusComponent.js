import React from "react";

function BusComponent(props) {
  return (
    <div className="p-4 md:w-[660px] lg:w-[900px] rounded-sm w-[300px] shadow-lg hover:shadow-md shadow-[#a3a2a2] md:h-[150px] h-[150px] bg-[#d9d8d8] cursor-pointer">
      <div className="flex justify-between">
        <h1 className="font-bold mb-2 text-xl">{`Bus No. ${props.Bus.busNumber}`}</h1>
        <div>
            {props.Bus.status}
        </div>
      </div>
      <div className="">
        <div>
          <h1 className="text-md mb-2 font-semibold">{`From ${props.Bus.route[0]} to ${props.Bus.route[props.Bus.route.length-1]}`}</h1>
          <h1 className="text-md mb-2">via
            {props.Bus.route.slice(1,props.Bus.route.length-1).map((e,i)=>{
              return (
              <span key={i}>{` /${e} `}</span>)
            })}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BusComponent;
