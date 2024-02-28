import React, { useRef, useState } from "react";
import "../App.css";
import logo from "../images/logo_white.png";
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

import ApplyForm from "../Components/ApplyForm";
import ProgramCard from "../Components/Cards/ProgramCard";
import ProjectCard from "../Components/Cards/ProjectCard";
import StudentReviewCard from "../Components/Cards/StudentReviewCard";

import webdevImg from "../images/webdev-1.jpg"
import marketingImg from "../images/marketing-1.jpg"

const Academy = () => {
  const section2 = useRef();
  const [openForm, setOpenForm] = useState(false);
  const [bookingForm, setBookingForm] = useState(false);

  const handleScroll = () => {
    section2.current?.scrollIntoView({ top: "0px", behavior: "smooth" });
  };
  return (
    <>
      <main>
        <div
          className={`fixed left-0 top-0 z-[99999] w-screen h-screen bg-white ${
            openForm ? "translate-y-0" : "translate-y-full"
          } duration-500`}
        >
          <ApplyForm />
          <div>
            <button
              className="bg-blue-400 p-2 text-black absolute top-6 right-6"
              onClick={() => setOpenForm(!openForm)}
            >
              close
            </button>
          </div>
        </div>
        <header className="fixed right-4 top-6">
          <div className="flex items-center justify-end">
            <button
              className="text-white px-4 py-1 border rounded-full font-semibold text-lg bg-blue-700"
              onClick={() => setOpenForm(!openForm)}
            >
              APPLY
            </button>
          </div>
        </header>
        <section className="first-section h-screen bg-black text-white p-4">
          <div className="flex justify-center gap-28 lg:p-20 md:p-12">
            <div className="logo-wrapper w-2/5">
              <img
                src={logo}
                alt="logo"
                className="logo object-contain h-full scale-150"
              />
            </div>
            <div className="text-wrapper">
              <h1 className="md:text-7xl font-bold">
                MAKE <br />A <span className="text-blue-500">CAREER </span>
                <br />
                OUTTA <br />
                <span className="text-orange-400">CREATIVITY</span>
              </h1>
            </div>
          </div>
          <div
            className="flex items-center justify-center ms-44 cursor-pointer"
            onClick={handleScroll}
          >
            <div className="down-arrow-icons-wrapper text-6xl opacity-30">
              <HiOutlineArrowLongDown />
            </div>
            <div>
              <h1 className="sm:text-2xl font-bold text-white">
                School <br />
                For a year <br />
                For Free
              </h1>
            </div>
          </div>
        </section>
        <section ref={section2} className="section_2 min-h-screen pt-16">
          <h1 className="text-6xl text-center font-semibold text-slate-800 mb-20 ibm-sans">
            Explore The Programs
          </h1>
          <div className="flex flex-wrap gap-10 justify-center">
            <ProgramCard title={"Web Development"}
            slug={"web-development"}/>
            <ProgramCard title={"Graphic Design"}
              slug={"graphic-design"}
            />
            <ProgramCard title={"Strategic Marketing using AI"}
            slug={"strategic-marketing-using-ai"}
            />
            <ProgramCard title={"Web Design"}
            slug={"web-design"}/>
          </div>
        </section>
        {/* =================Projects=============== */}

        <section className="px-14 mb-10">
          <h1 className="text-5xl text-center font-semibold text-slate-800 mb-20 ibm-sans w-96 mx-auto">
            Modern Work Experience-Based Learning Approach
          </h1>
          <div className="my-10 flex justify-center gap-10">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>

        {/* ==============Free trial============ */}

        <section className="mt-10">
          <div className="flex justify-center items-center">
            <button className="bg-blue-600 text-white border-b-4 border-r-4 shadow-md p-3 text-xl rounded-xl shadow-blue-600 border-white group" onClick={()=>setBookingForm(true)}>
              Book Your Free Trial, Now{" "}
              <FaAngleRight className="group-hover:ms-2 inline-block duration-300" />
            </button>
          </div>
          <div className={` justify-center items-center overlay fixed bg-[#000000e3] top-0 left-0 h-screen w-full z-[999] ${bookingForm ? "flex": "hidden"} duration-300`}>
            <div className="form-wrapper w-72 h-52 bg-white relative">
              <button
                className="bg-red-500 w-8 h-8 flex justify-center items-center rounded-full absolute -right-3 -top-3 group"
                onClick={() => setBookingForm(false)}
              >
                <AiOutlineClose className="text-2xl text-white font-bold group-hover:rotate-180 duration-300" />
              </button>
            </div>
          </div>
        </section>

        {/* ============Why Digidaldeta============= */}

        <section className="why-digital-deta min-h-screen md:px-28 md:py-10 mt-32 bg-blue-950 text-white">
          <div className="ibm-sans flex">
            <div className="w-[30rem]">
              <h2 className="text-5xl font-semibold my-4">Why Digitaldeta?</h2>
              <p className="text-2xl font-semibold">
                Focus on real-world applications, learning through action, and
                community building
              </p>
            </div>
            <div></div>
          </div>
          <div>
            <div className="grid grid-cols-5 gap-10 w-full h-80 mt-20">
              <div className="bg-white border shadow-md rounded-md col-span-2 h-full"></div>
              <div className="backdrop-blur-sm bg-white/30 rounded-xl p-6">
                <h2 className="text-2xl font-semibold">Career Opportunities</h2>
                <p className="mt-4">
                  Discover career opportunities within our network.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/30 rounded-xl p-6">
                <h2 className="text-2xl font-semibold">Practical Approach</h2>
                <p className="mt-4">
                  Learn by doing by solving real-life problems from real
                  companies.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/30 rounded-xl p-6">
                <h2 className="text-2xl font-semibold">
                  Community at the Center
                </h2>
                <p className="mt-4">
                  Join the curated community of other learners, alumni, and
                  mentors.
                </p>
              </div>
            </div>
          </div>
          <div className="my-40">
            <StudentReviewCard />
          </div>
        </section>
      </main>
    </>
  );
};

export default Academy;
