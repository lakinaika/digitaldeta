import React from 'react'
import { Link } from 'react-router-dom'
import { HiArrowNarrowRight } from "react-icons/hi";
import webDevImg from "../../images/webdev-1.jpg"


const ProgramCard = ({title,slug,icon}) => {
  return (
    <>
    <div className="program-card w-[18rem] rounded-xl border-b-4 border-r-4 border-white shadow-md shadow-blue-700 overflow-hidden">
        <div className="image-wrapper h-40 w-full">
            <img src={webDevImg} alt="program-title" className='w-full object-cover'/>
        </div>
        <div className="text-wrapper mt-8 px-5 pt-2 pb-4">
            <h1 className="my-4 text-2xl font-bold h-14">{title}</h1>
            <Link to={`/program/${slug}`} className='inline cursor-pointer group text-lg font-semibold'>See Program <HiArrowNarrowRight className='inline group-hover:translate-x-3 duration-300'/>
            </Link>
        </div>
    </div>
    </>
  )
}

export default ProgramCard