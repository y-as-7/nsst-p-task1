"use client";
import Link from "next/link";
import React from "react";
import { RevealList, RevealWrapper } from "next-reveal";
export default function page() {
  return (
    // the container of the slove section
    <div className="pt-28">
      <RevealWrapper origin="left">
        <div className="w-full text-center">
          <h1 className="capitalize text-4xl">
            <span className="capitalize text-red-700">S</span>l
            <span className="text-red-700 capitalize">o</span>ve
          </h1>
        </div>
      </RevealWrapper>

      {/* cards  */}
      <div className="w-[90%] md:w-[700px] my-10 mx-auto ">
        <RevealList
          origin="right"
          delay={500}
          duration={2000}
          distance="500px"
          reset={true}
          rotate={{ x: 12, y: 40, z: 0 }}
        >
          <Link className="m-10" href="slove/newtonsecondlaw">
            <div className="bg-[#202c3a] text-red-700 md:text-3xl text-xl font-bold py-5 pl-5 pr-1 cursor-pointer hover:border-solid hover:border-1 hover:bordr-red-700 hover:text-white shadow-md transition duration-500">
              <h1>2nd newtwon law: find the force</h1>
            </div>
          </Link>
          <Link className="m-10" href="slove/vectorMagnitude">
            <div className="bg-[#202c3a] text-red-700 md:text-3xl text-xl font-bold py-5 pl-5 pr-1 cursor-pointer hover:border-solid hover:border-1 hover:bordr-red-700 hover:text-white shadow-md transition duration-500">
              <h1>Vector Magnitude</h1>
            </div>
          </Link>
          <Link className="m-10" href="slove/vectorDir">
            <div className="bg-[#202c3a] text-red-700 md:text-3xl text-xl font-bold py-5 pl-5 pr-1 cursor-pointer hover:border-solid hover:border-1 hover:bordr-red-700 hover:text-white shadow-md transition duration-500">
              <h1>Vector direction</h1>
            </div>
          </Link>
          <Link className="m-10" href="slove/vectorSummation">
            <div className="bg-[#202c3a] text-red-700 md:text-3xl text-xl font-bold py-5 pl-5 pr-1 cursor-pointer hover:border-solid hover:border-1 hover:bordr-red-700 hover:text-white shadow-md transition duration-500">
              <h1>summation of Vectors </h1>
            </div>
          </Link>
          <Link className="m-10" href="slove/vectorSubtraction">
            <div className="bg-[#202c3a] text-red-700 md:text-3xl text-xl font-bold py-5 pl-5 pr-1 cursor-pointer hover:border-solid hover:border-1 hover:bordr-red-700 hover:text-white shadow-md transition duration-500">
              <h1>Subtraction of Vectors </h1>
            </div>
          </Link>
          <Link className="m-10" href="slove/mulvector">
            <div className="bg-[#202c3a] text-red-700 md:text-3xl text-xl font-bold py-5 pl-5 pr-1 cursor-pointer hover:border-solid hover:border-1 hover:bordr-red-700 hover:text-white shadow-md transition duration-500">
              <h1>Scale multiplication of vectors </h1>
            </div>
          </Link>
          <Link className="m-10" href="slove/vecmul">
            <div className="bg-[#202c3a] text-red-700 md:text-3xl text-xl font-bold py-5 pl-5 pr-1 cursor-pointer hover:border-solid hover:border-1 hover:bordr-red-700 hover:text-white shadow-md transition duration-500">
              <h1>directional multiplicationof vectors </h1>
            </div>
          </Link>
          <Link className="m-10" href="slove/derVel">
            <div className="bg-[#202c3a] text-red-700 md:text-3xl text-xl font-bold py-5 pl-5 pr-1 cursor-pointer hover:border-solid hover:border-1 hover:bordr-red-700 hover:text-white shadow-md transition duration-500">
              <h1>deriving velocity from distance</h1>
            </div>
          </Link>
          <Link className="m-10" href="slove/deracc">
            <div className="bg-[#202c3a] text-red-700 md:text-3xl text-xl font-bold py-5 pl-5 pr-1 cursor-pointer hover:border-solid hover:border-1 hover:bordr-red-700 hover:text-white shadow-md transition duration-500">
              <h1>deriving acceleration from velocity</h1>
            </div>
          </Link>
          <Link className="m-10" href="slove/dervacc2">
            <div className="bg-[#202c3a] text-red-700 md:text-3xl text-xl font-bold py-5 pl-5 pr-1 cursor-pointer hover:border-solid hover:border-1 hover:bordr-red-700 hover:text-white shadow-md transition duration-500">
              <h1>deriving acceleration from distance</h1>
            </div>
          </Link>
        </RevealList>
      </div>
    </div>
  );
}
