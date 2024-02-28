import React from "react";

const StudentReviewCard = () => {
  return (
    <>
      <div className="student-review-card border rounded-md shadow-md relative max-w-[17rem] min-h-48 pt-12 p-5 text-center bg-white text-black">
        <div className="student-image w-20 h-20 rounded-full border absolute -top-10 left-[36%] bg-black">
          <img src="" alt="" />
        </div>
        <div className="text-wrapper">
          <h2 className="student-name text-2xl font-bold mb-4">
            student name
          </h2>
          <blockquote class="relative ps-1 font-serif text-3.2xl font-semibold text-gray-700">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae vel totam quos repellendus obcaecati! Ea velit, et
              volupta
            </p>
            <span class="absolute left-0 -top-3 text-6xl font-normal leading-0.1em text-blue-300">
              “
            </span>
            <span class="absolute right-14 -bottom-10 text-6xl font-normal leading-0.1em text-blue-300">
              ”
            </span>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default StudentReviewCard;
