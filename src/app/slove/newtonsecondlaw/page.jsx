"use client";
import Link from "next/link";
import React, { use, useState } from "react";
import { useRef } from "react";
const NewtonSecondLaw = () => {
  const accRef = useRef(null);
  const massRef = useRef(null);
  const [acc, setAcc] = useState(null);
  const [mass, setMass] = useState(null);
  const [force, setForce] = useState(null);
  function getAcc(val) {
    setAcc(val.target.value);
  }
  function getMass(val) {
    setMass(val.target.value);
  }

  function getForce(e) {
    e.preventDefault();
    setForce(mass * acc);
    accRef.current.value = "";
    massRef.current.value = "";
  }
  return (
    <div className="mt-28 w-[100%]">
      <div className="mx-auto w-[90%]">
        <div className="title mx-auto text-center">
          <h1 className="text-4xl capitalize text-red-700 font-bold">
            {" "}
            Find the force{" "}
          </h1>
        </div>

        {/* cards */}
        <div className="w-[100%] mx-auto flex flex-col justify-start p-12 md:w-[600px]">
          <form action="">
            <div className="flex  flex-col my-4">
              <label className="text-2xl capitalize font-bold" htmlFor="">
                enter the value of the acceleration <span className="normal-case text-red-600">( m/s<sup>2</sup> )</span>{" "}
              </label>
              <input
                ref={accRef}
                placeholder="Acceleration"
                onChange={getAcc}
                className="border-gray-500 border-solid border-2 rounded px-4 py-2 outline-none my-1 font-bold"
                type="number"
              />
            </div>

            <div className="flex  flex-col my-4">
              <label className="text-2xl capitalize font-bold" htmlFor="">
                enter the value of the Mass <span className="normal-case text-red-600"> ( Kg )</span>
              </label>
              <input
                ref={massRef}
                placeholder="Mass"
                onChange={getMass}
                className="border-gray-500 border-solid border-2 rounded px-4 py-2 outline-none my-1 font-bold"
                type="number"
              />
            </div>

            <div>
              <button
                className="bg-[#202c3a] w-full text-white text-center py-2 rounded"
                onClick={getForce}
              >
                Find Force
              </button>
            </div>
          </form>
            <div className="my-1">
            <Link  className="mx-1" href='/laws/2'>
              <div className="bg-[#202c3a] text-red-700 md:text-1xl text-xl font-bold text-center py-2 cursor-pointer hover:border-solid hover:border-1 hover:bordr-red-700 hover:text-white shadow-md transition duration-500">
                <h1 className="capitalize">more info about force</h1>
              </div>
            </Link>
            </div>
          <div className="my-3 text-center">
            {force ? (
              <h1 className="text-red-700 text-3xl">The Force is: {force} N</h1>
            ) : (
              <h1 className="text-red-700 text-2xl"></h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewtonSecondLaw;
