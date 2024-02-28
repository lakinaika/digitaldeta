import React, { useEffect, useState } from "react";
import logo from "../images/logo_blue.png";
import { Link, useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import WorkDB from '../WorkDatabase'
import { FaArrowRight } from "react-icons/fa6";
import WorkCard from "./Cards/WorkCard";

const WorkSinglePage = () => {
    const [workDatabase] = useState(WorkDB)
    const [work, setWork] = useState()
    const param = useParams()
    const slug = param.slug

    useEffect(() => {
        const singleWork = workDatabase.find((data) => data.slug === slug)
        setWork(singleWork)
    }, [workDatabase, slug])

    return (
        <>
            {work ?
                <>
                    <div className="w-full h-20 lg:h-32 flex items-center justify-between px-2 lg:my-4">
                        <Link
                            to={"/work"}
                            className="flex items-center gap-1 text-lg lg:text-2xl lg:ps-8 group"
                        >
                            <FaLongArrowAltLeft className="group-hover:text-[#221FB1] translate-x-0 group-hover:-translate-x-4 duration-500" />
                            Our Work
                        </Link>
                        <p className="text-gray-500 font-semibold hidden lg:block lg:text-3xl">
                            Work
                        </p>
                        <Link to={'/'}><img src={logo} alt="logo" className="w-24 lg:w-64" /></Link>
                    </div>
                    <div className="title">
                        <div className="text-5xl text-center font-serif my-32 tracking-wider">{work?.title}</div>
                    </div>
                    <div className="wrapper-image w-full lg:h-96">
                        <img
                            src={work?.mainImage}
                            alt="waasho"
                            className="lg:w-full lg:h-full object-cover"
                        />
                    </div>
                    <div className="content px-5 pt-10 lg:px-24 lg:py-16 w-full flex flex-wrap gap-7 lg:gap-0 ">
                        <div className="company text-2xl w-full lg:w-1/2">
                            <div className="cient">
                                Client: <span className="text-gray-600">{work?.client}</span>
                            </div>
                            <br />
                            <div className="date text-gray-600">{work?.date}</div>
                        </div>
                        <div className="detalis text-2xl w-full lg:w-1/2">
                            <div className="heading text-gray-600">Full Story :-</div>
                            <div className="text-lg lg:text-2xl">
                                <p>{work?.story1}</p><br />
                                <p>{work?.story2}</p><br />
                                <p>{work?.story3}</p><br />
                                <p>{work?.story4}</p>
                            </div>
                        </div>
                    </div>
                    <div className="related-image w-full flex flex-wrap lg:flex-nowrap gap-5 px-4 lg:px-12 rounded-3xl">
                        <div className="left-side lg:h-96 w-full lg:w-1/2">
                            <img src={work.image1} alt="images" className="lg:w-full lg:h-full object-cover" />
                        </div>
                        <div className="right-side lg:h-96 w-full lg:w-1/2">
                            <img src={work.image2} alt="images" className="lg:w-full lg:h-full object-cover" />
                        </div>
                    </div>
                    {/* related projected */}
                    <div className="border-b-2 border-t-2 py-5 group my-4 lg:my-6 px-3 lg:px-9 text-xl lg:text-3xl font-semibold flex justify-between">
                        <div className="left">Other Work</div>
                        <Link to={'/work'} className="right flex items-center gap-2 cursor-pointer">All Work<FaArrowRight className="group-hover:translate-x-3 duration-500" /></Link>
                    </div>
                    {/* for mobile */}
                    <div className="related-work md:hidden w-full flex flex-wrap px-1 gap-10">
                        {workDatabase.slice(0, 2).map((data, index) => {
                            return (
                                <div className="rounded-lg overflow-hidden">
                                    <WorkCard key={index} data={data} />
                                </div>
                            )
                        })}
                    </div>
                    {/* for laptop */}
                    <div className="related-work hidden w-full md:flex px-1 gap-3 rounded-2xl overflow-hidden">
                        {workDatabase.slice(0, 3).map((data, index) => {
                            return (
                                <WorkCard key={index} data={data} />
                            )
                        })}
                    </div>
                </>
                :
                <>
                    <div className="w-full h-20 lg:h-32 flex items-center justify-between px-2 lg:my-4">
                        <Link
                            to={"/work"}
                            className="flex items-center gap-1 text-lg lg:text-2xl lg:ps-8 group"
                        >
                            <FaLongArrowAltLeft className="group-hover:text-[#221FB1] translate-x-0 group-hover:-translate-x-4 duration-500" />
                            Our Work
                        </Link>
                        <p className="text-gray-500 font-semibold hidden lg:block lg:text-3xl">
                            Work
                        </p>
                        <Link to={'/'}><img src={logo} alt="logo" className="w-24 lg:w-64" /></Link>
                    </div>
                    <div className="title animate-pulse w-full flex justify-center py-20">
                        <div className="text-5xl text-center h-4 rounded-full  w-80 bg-slate-500"></div>
                    </div>
                </>
            }
        </>
    );
};

export default WorkSinglePage;
