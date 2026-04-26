"use client";
import React, { useState } from "react";
import courses from "../Data/courses";
import { GraduationCap, SearchCheckIcon } from "lucide-react";
import Ourcourses from "../components/HomePage/OurCourses/Ourcourses";

const Page = () => {
  const allCourses = courses;
  console.log(allCourses);
  const [searchTitle, setSearchTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const searchFilter = allCourses.filter((course) =>
    course.category.toLowerCase().includes(searchTitle.toLowerCase()) ||
    course.courseName.toLowerCase().includes(searchTitle.toLowerCase())
  ,
  );

  return (
    <div className="w-11/12 mx-auto py-5">
      <div className="text-center mb-8">
        <h1 className="text-xl font-semibold">Explore Our Courses</h1>
        <p className="text-xs text-gray-400">
          Learn new skills and grow your career with our expert-led courses.
        </p>
      </div>
      {/* Seacrh Feild */}
      <div className="flex items-center border border-blue-300 custom-shadow w-4/12 mx-auto rounded-md p-1 gap-1">
        <SearchCheckIcon></SearchCheckIcon>
        <input
          type="text"
          placeholder="Search Courses"
          value={searchTitle}
          onChange={(e) => {
            setLoading(true);
            setSearchTitle(e.target.value);
            setTimeout(() => {
              setLoading(false);
            }, 100);
          }}
        />
      </div>
      {/* All Courses  */}
     <div className="min-h-100">
         {loading ? (
        <div className="flex justify-center items-center bg-white z-50">
          <GraduationCap className="w-10 animate-spin"></GraduationCap>
        </div>
      ) : searchFilter.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {searchFilter.map((course) => (
            <Ourcourses key={course.id} courses={course}></Ourcourses>
          ))}
        </div>
      ) : (
        <div className="text-center mt-10 text-gray-500">No Data Found </div>
      )}
     </div>
    </div>
  );
};

export default Page;
