"use client";
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import AiOutlinePlus from 'react-icons/ai'
const Page = () => {

const [x5,setX5]=useState(null);
const [x4,setX4]=useState(null);
const [x3,setX3]=useState(null);
const [x2,setX2]=useState(null);
const [x1,setX1]=useState(null);
const [numb,setNumb]=useState(null);

const x5value=useRef(null)
const x4value=useRef(null)
const x3value=useRef(null)
const x2value=useRef(null)
const x1value=useRef(null)
const numbvalue=useRef(null)


function getVelcity (e){
    e.preventDefault();
    setX5(x5value.current.value)
    setX4(x4value.current.value)
    setX3(x3value.current.value)
    setX2(x2value.current.value)
    setX1(x1value.current.value)
}
  return (
    <div className="mt-28 w-[90%] mx-auto">
      <div className="text-center">
        <h1 className="capitalize text-4xl text-red-700 font-bold">
        deriving acceleration  from velocity
        </h1>
      </div>
        <form action="">
      <div className="mt-10 flex  w-[100%] md:w-[600px] mx-auto items-center flex-wrap">

        {/* card */}
        <div className='text-red-700 font-bold text-2xl capitalize mr-1   my-1 '>
            V = 
        </div>
        <div className='items-center flex  my-1'>
            <input ref={x5value} type="number" className='w-8 mr-2 text-center text-xl outline-none border-gray-700 border-2 rounded border'  />
            <label  className='text-red-700 capitalize font-bold text-2xl' htmlFor="">x <sup>5</sup></label>
        </div>
        <span className='mx-1 text-2xl font-bold'>+</span>
        <div className='items-center flex my-1'>
            <input ref={x4value} type="number" className='w-8 mr-2 text-center text-xl outline-none border-gray-700 border-2 rounded border'  />
            <label  className='text-red-700 capitalize font-bold text-2xl' htmlFor="">x <sup>4</sup></label>
        </div>
        <span className='mx-1 text-2xl font-bold'>+</span>
        <div className='items-center flex my-1'>
            <input ref={x3value} type="number" className='w-8 mr-2 text-center text-xl outline-none border-gray-700 border-2 rounded border'  />
            <label  className='text-red-700 capitalize font-bold text-2xl' htmlFor="">x <sup>3</sup></label>
        </div>
        <span className='mx-1 text-2xl font-bold'>+</span>
        <div className='items-center flex my-1'>
            <input ref={x2value} type="number" className='w-8 mr-2 text-center text-xl outline-none border-gray-700 border-2 rounded border'  />
            <label  className='text-red-700 capitalize font-bold text-2xl' htmlFor="">x <sup>2</sup></label>
        </div>
        <span className='mx-1 text-2xl font-bold'>+</span>
        <div className='items-center flex my-1'>
            <input ref={x1value} type="number" className='w-8 mr-2 text-center text-xl outline-none border-gray-700 border-2 rounded border'  />
            <label  className='text-red-700 capitalize font-bold text-2xl' htmlFor="">x </label>
        </div>
        <span className='mx-1 text-2xl font-bold'>+</span>
        <div className='items-center flex my-1'>
            <input ref={numbvalue}  type="number" className='w-8 mr-2 text-center text-xl outline-none border-gray-700 border-2 rounded border'  />
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <button onClick={getVelcity} className='text-2xl text-center my-4 w-[90%] md:w-[600px] mx-auto bg-gray-700 text-red-600  rounded py-1 '>
            Derivite
        </button>
      </div>
        </form>
        <Link className="mx-1 my-1  " href="/laws/11">
              <div className="bg-[#202c3a] text-red-700 w-[90%] md:w-[600px] mx-auto md:text-1xl text-xl font-bold text-center py-2 cursor-pointer hover:border-solid hover:border-1 hover:bordr-red-700 hover:text-white shadow-md transition duration-500">
                <h1 className="capitalize">more info about Deriving acceleration  </h1>
              </div>
            </Link>
        <div className='mt-6 flex  w-[90%] md:w-[600px] mx-auto text-center text-center text-red-700'>
            <div className='flex justify-center items-center text-center mx-auto flex-wrap'>

            {
                x5|| x4||x3|| x2 ||x1 || numb ?(
                    <div className='flex justify-center items-center text-center mx-auto flex-wrap'>
                            <span className='text-red-700 text-2xl  mr-2'>a = </span> 
                            {
                                Number(x5)?(
                                    <div className='flex items-center'>
                                        <span className=' flex items-center justify-center text-2xl'> {5*x5} x <sup>4</sup></span>
                                        {Number(x4) ?(
                                        <span className='mx-2'> + </span>
                                       ):(
                                        <span></span>
                                       )}
                                    </div>
                                ):(
                                    <>
                                    <div className='hidden'></div>
                                    </>
                                )
                            }
                            {
                               Number(x4)?(
                                    <div className='flex items-center'>
                                        <span className=' flex items-center justify-center text-2xl'> {4*x4} x <sup>3</sup></span>
                                        {Number(x3) ?(
                                        <span className='mx-2'> + </span>
                                       ):(
                                        <span></span>
                                       )}
                                    </div>
                                ):(
                                    <>
                                    <div></div>
                                    </>
                                )
                            }
                            {
                               Number(x3)?(
                                    <div className='flex items-center'>
                                        <span className=' flex items-center justify-center text-2xl'> {3*x3} x <sup>3</sup></span>
                                        {Number(x2) ?(
                                        <span className='mx-2'> + </span>
                                       ):(
                                        <span></span>
                                       )}
                                    </div>
                                ):(
                                    <>
                                    <div></div>
                                    </>
                                )
                            }
                            {
                               Number(x2)?(
                                    <div className='flex items-center'>
                                        <span className=' flex items-center justify-center text-2xl'> {2*x2} x <sup>2</sup></span>
                                       {Number(x1) ?(
                                        <span className='mx-2'> + </span>
                                       ):(
                                        <span></span>
                                       )} 
                                    </div>
                                ):(
                                    <>
                                    <div></div>
                                    </>
                                )
                            }
                            {
                               Number(x1)?(
                                    <div className='flex items-center'>
                                        <span className=' flex items-center justify-center text-2xl'> {1*x1} 
                                        </span>
                                    </div>
                                ):(
                                    <>
                                    <div></div>
                                    </>
                                )
                            }
                           
                            
                            
                         
                    </div>
                ) :(
                    <div>
                        
                    </div>
                )
            }
            
            </div>
        </div>
    </div>
  );
};

export default Page;
