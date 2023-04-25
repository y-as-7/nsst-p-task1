
import React from "react";
// import { useEffect, useState } from "react";
import members from '../../assets/data.json'

export default function Members() {


  return (
    <>
      <div className=" pt-28 flex flex-col justify-center items-center w-full px-3 ">
        {members.map((m) => (
          <div
            key={m.id}
            className=" my-4 shadow-xl md:w-[600px] rounded-sm py-6 bg-[#202c3a]  flex w-[95%] md:px-9 px-3 items-center  justify-end"
          >
            <h1 className="mr-4 text-xl md:text-2xl text-right text-white font-bold ">
              {m.name}
            </h1>
            <img
              className="rounded-full  border border-red-500 mx-2 "
              width="100px"
              height="100px"
              src={m.img}
              alt="asd"
            />
          </div>
        ))}
      </div>
    </>
  );
}
