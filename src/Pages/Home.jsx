import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import Slider from "../Components/Slider";
const Home = () => {
    // const [scrollStep, setScrollStep] = useState(0);
    // const [fontSize, setFontSize] = useState("9rem");
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Determine the scroll position
            const scrollY = window.scrollY || window.pageYOffset;

            // Set showContent to true when scroll position is greater than a certain value (e.g., 100)
            setShowContent(scrollY > 310);
        };

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Detach the scroll event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollY = window.scrollY || window.pageYOffset;

    //         // Determine the scroll step based on your design
    //         const newScrollStep = Math.floor(scrollY / 20); // Adjust as needed

    //         // Update the font size only if the scroll step changes
    //         if (newScrollStep !== scrollStep) {
    //             const newFontSize = `calc(9rem - ${newScrollStep * 0.4}rem)`;
    //             setFontSize(newFontSize);
    //             setScrollStep(newScrollStep);
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, [scrollStep]);

    return (
        <Layout>
            <div className="sticky top-0 left-0 ">
                <Slider />
            </div>

            <div className="w-full bg-red-500">
                <div
                    className={`fixed top-1 left-10 w-28 h-28 flex justify-center items-center  -z-10 ${showContent ? "block" : "hidden"
                        }`}
                >
                    {/* <img src={logo} alt="logo" /> */}
                </div>
            </div>
            {/* <div className={"title font-semibold -z-10 text-white text-center h-screen flex items-center justify-center"} style={{ fontSize }}>
                <p className={`${showContent ? 'hidden' : 'block'}`}>Digital Deta</p>
            </div> */}

            <div className="">
                {/* About us */}
                <div className="aboutus sticky top-14 left-0 h-screen text-4xl lg:text-6xl px-3 pt-16 scrollshadow bg-[#221fb1] lg:mt-96">
                    obcaecati hic quod quos quo, excepturi in sunt deserunt ad, numquam
                    unde dignissimos veritatis totam facilis eligendi laboriosam enim,
                    velit libero tempora ipsam possimuslit. Cumque in nobis quae incidunt!
                    Numquam impedit earum atque labore, ea odio nobis vitae, laboriosam
                    aliquam facere excepturi est
                </div>

                <div className="main-content bg-white relative top-96 scrollshadowwhite">
                    <p className="text-4xl">
                        provident aut fugit, tempora non perspiciatis, repellat aliquam quam
                        dolorem odit. Consequuntur ut, harum qui eaque ullam molestias et
                        impedit aliquam dignissimos. Omnis rerum adipisci, similique ullam
                        soluta amet perspiciatis a odit illo animi itaque iusto repudiandae
                        ipsam dignissimos eveniet dolore laboriosam aspernatur voluptatem
                        officiis vero libero nostrum. Libero est impedit consequuntur
                        aspernatur quae nostrum, officiis rem quas aliquam veritatis harum
                        ad, eos nulla, debitis labore qui ex. Tenetur doloribus vel
                        recusandae dolorum voluptatibus! Voluptatem eum facere earum minus.
                        Laudantium voluptatum et enim atque repellendus quo ratione, officia
                        perspiciatis velit ipsa amet esse corrupti, quisquam necessitatibus
                        optio aut ut, numquam harum. Provident excepturi in at reprehenderit
                        nemo maxime veniam vel, odio unde, veritatis rem, delectus itaque ab
                        libero! Odio, iusto voluptatem deleniti eaque eius hic assumenda?
                        Quae aperiam repudiandae vero recusandae odit nam odio voluptates
                        officiis eum maxime inventore quisquam harum voluptas iure totam sit
                        beatae non, obcaecati delectus quibusdam deserunt nulla fugiat
                        facilis. Eligendi id doloribus temporibus animi unde iste dolor
                        neque itaque voluptates voluptatibus, labore tempora aperiam. Error
                        accusantium modi ipsa eligendi aliquid dolorem voluptatum, sunt
                        corrupti itaque alias! Asperiores vero alias vel aut perspiciatis
                        soluta expedita! Laborum repellendus odit nisi amet quam!
                        Asperiores, temporibus deserunt. Unde deserunt nemo quis possimus
                        exercitationem mollitia dolore nesciunt ducimus? Accusantium,
                        recusandae. Iusto animi molestiae eum possimus beatae adipisci
                        obcaecati saepe earum quam! Adipisci earum nam ad quas voluptate
                        reiciendis repudiandae! Necessitatibus soluta enim quia alias culpa
                        excepturi, esse quaerat, recusandae sed, cumque consequatur officia
                        nam eius laudantium dolor quisquam iusto eum totam consequuntur illo
                        nihil.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
