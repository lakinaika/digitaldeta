import React from 'react'
import { Link } from 'react-router-dom'

const SliderCard = ({ data }) => {
    return (
        <>
            <Link to={`/work/${data.slug}`} className="group main-wrapper relative cursor-pointer overflow-hidden">
                <div className="image w-52 h-36 group-hover:opacity-15 overflow-hidden rounded-lg duration-500">
                    <img src={data.img} alt={data.title} className='w-full h-full object-cover' />
                </div>
                <div className="title text-2xl absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-lg  text-center text-white bg-black opacity-70 scale-0 group-hover:scale-100 translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
                    {data.title}
                </div>
            </Link>
        </>
    )
}

export default SliderCard
