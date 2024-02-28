import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen  bg-gray-100">
                <div className="text-center group">
                    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                    <p className="text-gray-600">The page you are looking for does not exist.</p>
                    <Link to={'/'}><p className='p-3 text-xl group-hover:text-3xl font-bold tracking-widest hover:scale-125 text-[#221FB1] duration-500'>Go Back</p></Link>
                </div>
            </div>
        </>
    )
}

export default PageNotFound
