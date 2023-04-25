"use client"
import Link from "next/link";
import React, { useEffect, useRef,useState }from "react";

const Page = () => {

    
    const [xsum,setXSum]=useState(null);
    const [ysum,setYSum]=useState(null);
    const [zsum,setZSum]=useState(null);
    const [mul,setMul]=useState(null);
  const x1 = useRef(null);
  const y1 = useRef(null);
  const z1 = useRef(null);

  const x2 = useRef(null);
  const y2 = useRef(null);
  const z2 = useRef(null);
  function clearValues(){
    x1.current.value=''
    y1.current.value=''
    z1.current.value=''
    x2.current.value=''
    y2.current.value=''
    z2.current.value=''
  }
 
    function getSum(e){
        setMul(Number(x1.current.value) * Number(x2.current.value)+Number(y1.current.value) * Number(y2.current.value) + Number(z1.current.value) * Number(z2.current.value) )
      e.preventDefault();
      clearValues();
    }
  return (
    <div className="mt-28 w-[90%] mx-auto">
      <div className="text-center">
        <h1 className="capitalize text-4xl text-red-700 font-bold">
          Vector scalar multiplication
        </h1>
      </div>
      <div className="mt-8 flex flex-col w-[90%] md:w-[600px] mx-auto">
        <h1 className="text-2xl my-4 capitalize text-gray-800">
          enter the Vectors&apos; value
          <span className="text-red-600 normal-case text-sm md:text-xl">
            {" "}
            ( i , k , j )
          </span>
        </h1>
        <form action="">
          <div className="flex mt-2 justify-between mx-auto text-2xl font-bold">
            <div className="flex ">
             <p className="text-red-600"> x<sub>1</sub>: </p> ( &nbsp;
              <label className="mr-2" htmlFor="">
                i:{" "}
              </label>
              <input
              ref={x1}
                className="border-2 outline-none  border-gray-500 rounded text-xl px-1 w-10 md:w-20"
                placeholder=" x"
                type="number"
              />
            </div>
            ,
            <div>
              <label className="mr-2" htmlFor="">
                k:{" "}
              </label>
              <input
              ref={y1}
                className="border-2 outline-none text-xl border-gray-500 rounded px-1 w-10 md:w-20"
                placeholder=" y"
                type="number"
              />
            </div>
            ,
            <div>
              <label className="mr-2" htmlFor="">
                j:{" "}
              </label>
              <input
              ref={z1}
                className="border-2 outline-none text-xl border-gray-500 rounded px-1 w-10 md:w-20"
                placeholder="z "
                type="number"
              />
              &nbsp;)
            </div>
          </div>
          <div className="flex mt-2 justify-between mx-auto text-2xl font-bold">
            <div className="flex ">
             <p className="text-red-600"> x<sub>2</sub>: </p> ( &nbsp;
              <label className="mr-2" htmlFor="">
                i:{" "}
              </label>
              <input
              ref={x2}
                className="border-2 outline-none  border-gray-500 rounded text-xl px-1 w-10 md:w-20"
                placeholder=" x"
                type="number"
              />
            </div>
            ,
            <div>
              <label className="mr-2" htmlFor="">
                k:{" "}
              </label>
              <input
              ref={y2}
                className="border-2 outline-none text-xl border-gray-500 rounded px-1 w-10 md:w-20"
                placeholder=" y"
                type="number"
              />
            </div>
            ,
            <div>
              <label className="mr-2" htmlFor="">
                j:{" "}
              </label>
              <input
              ref={z2}
                className="border-2 outline-none text-xl border-gray-500 rounded px-1 w-10 md:w-20"
                placeholder="z "
                type="number"
              />
              &nbsp;)
            </div>
          </div>

          <div className="mt-7">
            <button onClick={getSum} className="bg-[#202c3a] w-full text-white text-center py-2 rounded">
              Find multiplication
            </button>
          </div>
          <div className="">
            <Link className="mx-1" href="/laws/8">
              <div className="bg-[#202c3a] text-red-700 md:text-1xl text-xl font-bold text-center py-2 cursor-pointer hover:border-solid hover:border-1 hover:bordr-red-700 hover:text-white shadow-md transition duration-500">
                <h1 className="capitalize">more info about multiplication</h1>
              </div>
            </Link>
          </div>
        </form>
        <div className="my-3 text-center">
          {mul===0 || mul? (
            <div>
                <h1 className="text-red-700 text-3xl">The multiplication</h1>
                <p className="text-red-700 text-3xl">V = {mul}</p>
            </div>
          ) : (
            <h1 className="text-red-700 text-2xl"></h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
