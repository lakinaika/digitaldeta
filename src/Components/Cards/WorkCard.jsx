import React from 'react'
import { Link } from 'react-router-dom'

const WorkCard = ({ data }) => {
    return (
        <>
            <div className="wrapper w-full lg:w-1/3 group relative overflow-hidden h-64">
                <Link to={`/work/${data.slug}`} className="relative ">
                    <img src={data.thumbnail} alt="" className="w-full h-full object-cover" />
                    <div className="content absolute top-0 left-0 flex justify-center flex-col items-center bg-[#221FB1] opacity-85 text-white w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                        <p className='text-6xl antonfont tracking-wider text-center font-semibold pb-2'>{data.title}</p>
                        <p className='text-2xl antonfont font-normal'>{data.tag}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default WorkCard
