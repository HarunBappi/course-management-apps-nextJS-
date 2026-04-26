import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const Ourcourses = ({ courses }) => {
  const {
    category,
    image,
    instructor,
    courseName,
    totalLectures,
    duration,
    price,
    rating,
  } = courses;
  return (
    <Link href="">
      <div className="card card-primary shadow-sm">
        <figure>
          <Image
            src={image}
            alt="Feature-Course"
            width={400}
            height={400}
            className="h-36"
          ></Image>
        </figure>
        <div className="px-3 py-3">
          <h2 className="text-primary text-xs font-semibold">{category}</h2>
          <h1 className="font-bold mt-1 truncate" title={courseName}>
            {courseName}
          </h1>
          <p className="text-[10px] text-gray-500 mt-1">
            By {instructor} - {totalLectures} Lecture - {duration}
          </p>
          <p className="flex items-center  text-gray-500 text-xs rounded gap-1 mt-1">
            <FaStar className="text-primary"></FaStar>
            {rating} (138 reviews)
          </p>

          <div className="mt-2">
            <button className="btn bg-slate-300 text-black rounded-md border-0 hover:bg-slate-400">
              Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Ourcourses;
