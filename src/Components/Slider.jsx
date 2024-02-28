import React from 'react'
import Marquee from 'react-fast-marquee'
import SliderCard from './Cards/SliderCard'
import SliderData from '../SliderDatabase'

const Slider = () => {

    return (
        <>
            <div className="bg-[#221FB1] w-full h-screen pt-16">
                <Marquee
                    pauseOnHover={true}
                >
                    <div className="flex flex-col gap-y-20 justify-center gap-x-28 flex-wrap h-[90vh] p-3 items-center">
                        {SliderData.map((data, index) => {
                            return (
                                <SliderCard key={index} data={data} />
                            )
                        })}
                    </div>
                </Marquee>
            </div>
        </>
    )
}

export default Slider
