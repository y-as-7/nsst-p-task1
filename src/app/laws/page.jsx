"use client"
import React from 'react'
import getLaws from '../libs/laws';
import Link from 'next/link';
import { RevealList, RevealWrapper } from "next-reveal";
const laws =getLaws()
export default function page() {
  return (
    <div className="pt-28">
      <RevealWrapper origin="left">
        <div className="w-full text-center">
          <h1 className="capitalize text-4xl">
            <span className="capitalize text-red-700">l</span>A
            <span className="text-red-700 capitalize">W</span>S
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
          {laws.map((law) => (
            <Link key={law.id} className="m-10" href={`laws/${law.id}`}>
              <div className="bg-[#202c3a] text-red-700 md:text-3xl text-xl font-bold py-5 pl-5 pr-1 cursor-pointer hover:border-solid hover:border-1 hover:bordr-red-700 hover:text-white shadow-md transition duration-500">
                <h1>{`${law.id}- ${law.title}`}</h1>
              </div>
            </Link>
          ))}
        </RevealList>
      </div>
    </div>
  );
}


