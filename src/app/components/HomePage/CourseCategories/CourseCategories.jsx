import Image from "next/image";
import React from "react";

const CourseCategories = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mb-2">
        Course Categories
      </h1>
      <div className="py-4 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Design */}
        <div className="shadow-md p-2">
          <Image
            src="/images/course (1).jpg"
            alt=""
            width={200}
            height={300}
            className="border border-blue-300 custom-shadow h-30"
          ></Image>
          <h1 className="text-primary text-sm font-semibold mt-2 text-center">
            Design
          </h1>
        </div>
        {/* Marketing */}
        <div className="shadow-md p-2">
          <Image
            src="/images/course (5).jpg"
            alt=""
            width={200}
            height={300}
            className="border border-blue-300  custom-shadow h-30"
          ></Image>
          <h1 className="text-primary text-sm font-semibold mt-2 text-center">
            Marketing
          </h1>
        </div>
        {/* Web Development */}
        <div className="shadow-md p-2">
          <Image
            src="/images/course (8).jpg"
            alt=""
            width={200}
            height={300}
            className="border border-blue-300 custom-shadow h-30"
          ></Image>
          <h1 className="text-primary text-sm font-semibold mt-2 text-center">
            Web Development
          </h1>
        </div>
        {/* IT & Software */}
        <div className="shadow-md p-2">
          <Image
            src="/images/course (11).jpg"
            alt=""
            width={200}
            height={300}
            className="border border-blue-300 custom-shadow h-30"
          ></Image>
          <h1 className="text-primary text-sm font-semibold mt-2 text-center">
            IT & Software
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
