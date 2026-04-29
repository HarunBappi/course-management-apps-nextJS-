"use client";
import courses from "@/app/Data/courses";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { FaStar } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";

const Page = () => {
  const params = useParams();
  const coursesId = params?.id;
  const courseDetails = courses;
  const singleCourse = courseDetails.find(
    (course) => course.id === Number(coursesId),
  );
  return (
    <div className="bg-gray-50 py-10">
      <div className="w-11/12 mx-auto pt-8 pb-6">
        <div className="flex flex-col md:flex-row gap-5">
          <div>
            <Image src={singleCourse.image} alt="" width={310} height={0} className="h-66.25" />
          </div>
          {/* Right Side */}
          <div className="flex-1">
            <div className="">
              <p className="bg-primary text-[10px] flex items-center w-fit px-2 py-1 rounded-full text-white">
                <GoDotFill></GoDotFill>
                {singleCourse.category}</p>
              <h1 className="text-xl font-semibold mt-2">
                {singleCourse.courseName}
              </h1>
              <p className="text-gray-400 text-xs mt-1">
                By{" "}
                <span className="text-primary font-semibold">
                  {singleCourse.instructor}
                </span>
              </p>
            </div>
            {/*  rating  */}
            <div className="border-t border-blue-300 mt-2 pt-5">
              <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-3 lg:gap-10">
                <p className="flex items-center  text-gray-500 text-xs rounded gap-1 mt-1">
                  <FaStar className="text-primary"></FaStar>
                  {singleCourse.rating} (138 reviews)
                </p>
                <p className="flex items-center  text-gray-500 text-xs rounded gap-1 mt-1">
                  <MdCastForEducation className="text-primary"></MdCastForEducation>
                  Total Lectures: {singleCourse.totalLectures}
                </p>
                <p className="flex items-center  text-gray-500 text-xs rounded gap-1 mt-1">
                  <GiDuration className="text-primary"></GiDuration>
                  Duration: {singleCourse.duration}
                </p>
              </div>
            </div>
            {/* Descriptions */}
             <div className="border-t border-blue-300 mt-5 pt-4">
              <div className="text-gray-500 text-sm">
                {singleCourse.description}
              </div>
            </div>
            {/* Apply Button */}
            <div className="mt-4">
            <button className="btn bg-slate-300 text-black rounded-md border-0 hover:bg-slate-400">
              Apply
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
