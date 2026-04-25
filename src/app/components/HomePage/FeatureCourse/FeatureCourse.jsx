"use client";
import courses from "@/app/Data/courses";
import featuredCourses from "@/app/Data/featuredCourses";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const FeatureCourse = () => {
  return (
    <div className="py-10">
        <h1 className="text-center text-4xl font-semibold mb-3">Our Feature Courses</h1>
      <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {featuredCourses.map((course) => (
          <div key={course.id} className="card card-primary shadow-sm">
            <figure>
              <Image
                src={course.image}
                alt="Feature-Course"
                width={400}
                height={400}
              ></Image>
            </figure>
            <div className="px-3 py-3">
              <h2 className="text-primary text-xs font-semibold">
                {course.category}
              </h2>
              <h1 className="font-bold mt-1">{course.courseName}</h1>
              <p className="text-[10px] text-gray-500 mt-1">By {course.instructor} - {course.totalLectures} Lecture - {course.duration}</p>
              <p className="text-xs text-gray-500 mt-1">{course.rating} (138 reviews)</p>
              
              <div className="mt-2">
                <button className="btn bg-slate-300 text-black rounded-md border-0">Apply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCourse;
