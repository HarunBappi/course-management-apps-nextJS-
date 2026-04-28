"use client"
import courses from '@/app/Data/courses';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import { AiTwotoneLike } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const Page = () => {
    const params = useParams()
    const coursesId = params?.id;
    const courseDetails = courses;
    const singleCourse= courseDetails.find(course => course.id === Number(coursesId))
    return (
        <div className="bg-gray-50">
      <div className="w-11/12 mx-auto pt-8 pb-6">
        <div className="flex flex-col md:flex-row gap-5">
          <div>
           <Image
        src={singleCourse.image}
        alt=""
        width={300}
        height={300}
      />
          </div>
          {/* Right Side */}
          <div className="flex-1">
            <div className="">
              <h1></h1>
              <p className="text-gray-400 text-xs">
                Developed By{" "}
                <span className="gradient-color"></span>
              </p>
            </div>
            {/* 3 Items of Download, rating and reviews */}
            <div className="border-t border-gray-300 mt-4 flex flex-row gap-10 items-center">
              <div className="mt-5 flex flex-col gap-1">
                <MdOutlineFileDownload className="text-green-500 text-xl"></MdOutlineFileDownload>
                <p className="text-sm  text-gray-400">Downloads</p>
                <h1 className="font-bold"></h1>
              </div>
              <div className="mt-5 flex flex-col gap-1">
                <FaStar className="text-orange-500 text-xl"></FaStar>
                <p className="text-sm  text-gray-400">Average rating</p>
                <h1 className="font-bold"></h1>
              </div>
              <div className="mt-5 flex flex-col gap-1">
                <AiTwotoneLike className="text-blue-400 text-xl"></AiTwotoneLike>
                <p className="text-sm  text-gray-400">Total Reviews</p>
                <h1 className="font-bold"></h1>
              </div>
            </div>
            {/* <button
              onClick={handleInstallButton}
              disabled={isInstalled}
              className={`btn mt-2 text-white ${isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390]"}`}
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button> */}
          </div>
        </div>
        
      </div>
    </div>
    );
};

export default Page;