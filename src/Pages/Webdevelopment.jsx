import React, { useRef } from "react";
import webdevImg from "../images/webdev-1.jpg";
import Layout from "../Components/Layout/Layout";
import htmlIcon from "../images/html-5.png";
import cssIcon from "../images/css-3.png";
import jsIcon from "../images/js.png";
import bootstrapIcon from "../images/bootstrap-5-logo-icon.png";

const Webdevelopment = () => {
  const courseDetailRef = useRef();

  const handleScroll = () => {
    courseDetailRef.current?.scrollIntoView({ top: "0", behavior: "smooth" });
  };
  const webDevelopmentBenefits = [
    {
      id: 1,
      point: "Versatility",
      description:
        "Web development offers a wide range of opportunities to create diverse projects, from simple static websites to complex web applications and e-commerce platforms. This versatility allows developers to continuously expand their skill set and explore various technologies and frameworks.",
    },
    {
      id: 2,
      point: "High Demand",
      description:
        "With the increasing digitization of businesses and the growing importance of online presence, the demand for skilled web developers remains consistently high. This demand translates into abundant job opportunities and competitive salaries in the industry.",
    },
    {
      id: 3,
      point: "Creativity",
      description:
        "Web development provides a platform for creative expression through design, user experience optimization, and innovative problem-solving. Developers have the freedom to experiment with different layouts, styles, and interactions to create engaging and visually appealing web experiences.",
    },
    {
      id: 4,
      point: "Remote Work Opportunities",
      description:
        "The nature of web development allows professionals to work remotely, providing flexibility and autonomy in managing their work-life balance. Remote work opportunities are particularly appealing for those who value location independence and the ability to work from anywhere with an internet connection.",
    },
    {
      id: 5,
      point: "Continuous Learning",
      description:
        "The field of web development is constantly evolving with new technologies, tools, and best practices emerging regularly. This dynamic environment encourages developers to engage in lifelong learning, staying updated with the latest trends and honing their skills to remain competitive in the industry.",
    },
    {
      id: 6,
      point: "Impact and Reach",
      description:
        "Websites and web applications have the potential to reach a global audience instantly, enabling developers to have a significant impact on a large scale. Whether building platforms for social impact, e-commerce solutions, or educational resources, web developers have the opportunity to contribute to projects that can make a difference in people's lives.",
    },
    {
      id: 7,
      point: "Collaboration and Community",
      description:
        "Web development fosters a vibrant community of developers who collaborate, share knowledge, and support each other through forums, online communities, and open-source projects. This sense of camaraderie creates opportunities for networking, mentorship, and personal growth within the industry.",
    },
  ];

  return (
    <>
      <Layout>
        <section className="hero-section h-screen relative">
          <div className="img-wrapper w-full h-full absolute after:content-[''] after:w-full after:h-full after:bg-gradient-to-t from-[#000000ef] to-[#0000006b] after:absolute after:top-0 after:left-0 after:z-10">
            <img
              src={webdevImg}
              alt=""
              className="w-full h-full object-cover "
            />
          </div>
          <div className="absolute z-20 w-full h-full flex flex-col justify-center items-center">
            <h1 className="md:text-8xl text-2xl text-transparent md:font-semibold font-bold bg-gradient-to-r from-blue-700 to-white bg-clip-text">
              Web Development
            </h1>
            <h4 className="md:text-2xl text-slate-400 font-semibold mt-4 text-center">
              "Unlock Your Potential: Become a Web Developer Extraordinaire!"
            </h4>
            <button
              className="px-3 py-2 bg-blue-700 text-white md:text-xl mt-4 rounded-md hover:bg-blue-400 duration-300"
              onClick={handleScroll}
            >
              Exlpore the program
            </button>
          </div>
        </section>
        <section
          className="course-details w-full min-h-screen md:px-12 py-10 bg-blue-950 text-white"
          ref={courseDetailRef}
        >
          <h1 className="text-4xl text-center font-bold ">
            Why Choose Web Development
          </h1>
          {webDevelopmentBenefits.map((elem, index) => {
            return (
              <>
                <div key={index} className="mb-10">
                  <h2 className="md:text-2xl font-bold first-letter:text-5xl">
                    {elem.point}
                  </h2>
                  <p className="text-lg">{elem.description}</p>
                </div>
              </>
            );
          })}
        </section>
        <section className="min-h-screen  w-full md:px-12 py-10">
          <h1 className="text-4xl text-center font-bold">What You'll Learn</h1>
          <div className="flex mt-10">
            <div className="card p-4 max-w-md text-center border rounded-sm shadow-sm">
              <div className="imgwrapper w-40">
                <img src={htmlIcon} alt="html" className="relative inset-0" />
              </div>
              <div>
                <p className="bg-black text-white text-center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  velit repudiandae ipsam sequi! Ut blanditiis dolor non
                  quibusdam cum odit?
                </p>
              </div>
            </div>
          </div>

       
          <section
      class="bg-gray-900 h-screen flex justify-center items-center gap-x-16 text-white"
    >
      <div
        class="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective"
      >
        <div
          class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
        >
          <div class="absolute backface-hidden border-2 w-full h-full">
            <img src="./assets/kingsman.jpg" class="w-full h-full" />
          </div>
          <div
            class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
          >
            <div
              class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
            >
              <h1 class="text-3xl font-semibold">The King's Man</h1>
              <p class="my-2">9.0 Rating</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>
              <button
                class="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
              >
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

        </section>
      </Layout>
    </>
  );
};

export default Webdevelopment;
