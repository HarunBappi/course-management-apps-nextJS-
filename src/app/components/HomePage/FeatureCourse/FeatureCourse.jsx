"use client";
import courses from "@/app/Data/courses";
import featuredCourses from "@/app/Data/featuredCourses";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const FeatureCourse = () => {
  return (
    <div className="py-10">
      <h1 className="text-center text-xl md:text-4xl font-semibold mb-4">
        Our Feature Courses
      </h1>
      <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {featuredCourses.map((course) => (
          <div key={course.id} className="card card-primary shadow-sm">
            <figure>
              <Image
                src={course.image}
                alt="Feature-Course"
                width={400}
                height={400}
                className="h-36"
              ></Image>
            </figure>
            <div className="px-3 py-3">
              <h2 className="text-primary text-xs font-semibold">
                {course.category}
              </h2>
              <h1 className="font-bold mt-1">{course.courseName}</h1>
              <p className="text-[10px] text-gray-500 mt-1">
                By {course.instructor} - {course.totalLectures} Lecture -{" "}
                {course.duration}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {course.rating} (138 reviews)
              </p>

              <div className="relative inline-block group mt-2">
                <div className="cursor-not-allowed">
                  <button
                    disabled
                    className="btn bg-slate-300 text-black rounded-md border-0 pointer-events-none"
                  >
                    Apply
                  </button>
                </div>

                {/* Tooltip */}
                <span
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
    opacity-0 group-hover:opacity-100 transition duration-200
    bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10"
                >
                  Its not available.
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCourse;
