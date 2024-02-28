import React from 'react'
import Layout from '../Components/Layout/Layout'
import logo from '../images/logo_white.png'
import WorkCard from '../Components/Cards/WorkCard'
import workDB from '../WorkDatabase'
import { Link } from 'react-router-dom'

const Work = () => {
    return (
        <Layout>
            <Link to={'/'} className="w-full pt-1 h-20 flex items-center justify-end lg:pt-3 pe-4 lg:pe-14 bg-[#1E2326] cursor-pointer">
                <img src={logo} alt="logo" className="w-24 lg:w-36 lg:pt-6 z-[9999]" />
            </Link>
            <div className="heading sticky top-0 -z-10 h-screen w-full bg-[#1E2326] text-white flex flex-col justify-center items-center">
                <p className='text-[27vw] lg:text-[20vw] font-semibold mt-4 mb-4 antonfont tracking-wider'>WORK</p>
            </div>
            <div className="flex flex-wrap">
                {workDB.map((data, index) => {
                    return (
                        <WorkCard key={index} data={data} />
                    )
                })}
            </div>
        </Layout>
    )
}

export default Work
