import React from 'react'

const ProjectCard = () => {
  return (
    <>
    <div className="ProjectCard max-w-[20rem] rounded-lg px-7 py-4 bg-blue-50 text-center relative border drop-shadow-lg">
        <div className="absolute top-2 left-[20%] px-4 rounded-full border-2 border-blue-700 bg-blue-700 text-white"> Independent Project</div>
    <div className="image-wrapper w-32 my-6 mt-8 mx-auto">
            <img src="https://assets-global.website-files.com/624194472db3153002097068/64121f4cf60b7d5b232239c3_Group%2048098116.webp" alt="program-title" className='w-full object-cover filter saturate-0'/>
        </div>
        <div className="text-wrapper mt-8">
            <h1 className="my-2 text-2xl font-bold">Build an OTT platform like Netflix Engineers</h1>
            <p className="description">Build a highly responsive, seamless video streaming service.</p>
        </div>
        <div className="tools flex  flex-wrap justify-center mt-6">
            <div className="px-6 m-1 border-2 border-black rounded-full">HTML</div>
            <div className="px-6 m-1 border-2 border-black rounded-full">HTML</div> 
            <div className="px-6 m-1 border-2 border-black rounded-full">HTML</div>
            <div className="px-6 m-1 border-2 border-black rounded-full">HTML</div>
        </div>
    </div>
    </>
  )
}

export default ProjectCard