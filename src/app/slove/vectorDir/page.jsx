"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Page = () => {
  function radToDeg(rad) {
    return rad * (180.0 / Math.PI);
  }

  const [mag, setMag] = useState(null);
  const [alpha, setAlpha] = useState(null);
  const [beta, setBeta] = useState(null);
  const [gama, setGama] = useState(null);

 
  

  const x = useRef(null);
  const y = useRef(null);
  const z = useRef(null);

  function clearValues() {
    x.current.value = "";
    y.current.value = "";
    z.current.value = "";
  }
  useEffect(() => {
      setAlpha(radToDeg(Math.acos(x.current.value/ mag)).toFixed(2));
      setBeta(radToDeg(Math.acos(y.current.value / mag)).toFixed(2));
      setGama(radToDeg(Math.acos(z.current.value / mag)).toFixed(2));
      
    });
    function getMag(e) {
        e.preventDefault();
        let equation = Math.sqrt(
            Math.pow(x.current.value, 2) +
            Math.pow(y.current.value, 2) +
            Math.pow(z.current.value, 2)
            );
            setMag(equation);
            
  }

  return (
    <div className="mt-28 w-[90%] mx-auto">
      <div className="text-center">
        <h1 className="capitalize text-4xl text-red-700 font-bold">
          Find the vector directions 
        </h1>
      </div>
      <div className="mt-8 flex flex-col w-[90%] md:w-[600px] mx-auto">
        <h1 className="text-2xl my-4 capitalize text-gray-800">
          enter the Vector&apos;s value
          <span className="text-red-600 normal-case text-sm md:text-xl">
            {" "}
            ( x , y , z )
          </span>
        </h1>
        <form action="">
          <div className="flex mt-2 justify-between mx-auto text-2xl font-bold">
            <div className="flex ">
              ( &nbsp;
              <label className="mr-2" htmlFor="">
                X:{" "}
              </label>
              <input
                
                ref={x}
                className="border-2 outline-none  border-gray-500 rounded text-xl px-1 w-10 md:w-20"
                placeholder=" x"
                type="number"
              />
            </div>
            ,
            <div>
              <label className="mr-2" htmlFor="">
                y:{" "}
              </label>
              <input
                ref={y}
                className="border-2 outline-none text-xl border-gray-500 rounded px-1 w-10 md:w-20"
                placeholder=" y"
                type="number"
              />
            </div>
            ,
            <div>
              <label className="mr-2" htmlFor="">
                z:{" "}
              </label>
              <input
                ref={z}
                className="border-2 outline-none text-xl border-gray-500 rounded px-1 w-10 md:w-20"
                placeholder="z "
                type="number"
              />
              &nbsp;)
            </div>
          </div>

          <div className="mt-7">
            <button
              onClick={getMag}
              className="bg-[#202c3a] w-full text-white text-center py-2 rounded"
            >
              Find directions
            </button>
          </div>
          <div className="">
            <Link className="mx-1" href="/laws/5">
              <div className="bg-[#202c3a] text-red-700 md:text-1xl text-xl font-bold text-center py-2 cursor-pointer hover:border-solid hover:border-1 hover:bordr-red-700 hover:text-white shadow-md transition duration-500">
                <h1 className="capitalize">more info about directions </h1>
              </div>
            </Link>
          </div>
        </form>
        <div className="my-3 text-center">
          {Math.floor(mag) ? (
            <div>
              <h1 className="text-red-700 text-3xl">
                The directions  {" "}
              </h1>
              <table class="text-2xl border-separate border-spacing-2    mx-auto ">
                <thead>
                  <tr>
                    <th class="text-red-600  px-2 py-1  ...">Angle</th>
                    <th class=" text-red-600  px-2 py-1...">degree</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class=" text-red-700 px-2 py-1 ...">alpha</td>
                    <td class="text-red-700 px-2 py-1  ...">{alpha} &#xb0;</td>
                  </tr>
                  <tr>
                    <td class="text-red-700 px-2 py-1 ...">beta</td>
                    <td class="text-red-700 px-2 py-1 ...">{beta} &#xb0;</td>
                  </tr>
                  <tr>
                    <td class="text-red-700 px-2 py-1 ...">gamma</td>
                    <td class="text-red-700 px-2 py-1  ...">{gama} &#xb0;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <h1> </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
