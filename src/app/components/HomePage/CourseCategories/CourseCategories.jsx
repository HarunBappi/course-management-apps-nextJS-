import Image from "next/image";
import React from "react";

const CourseCategories = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mb-3">
        Course Categories
      </h1>
      <div className="py-4">
        <div className="shadow-2xl">
          
            <Image src="/images/categories1.jpg" alt="" width={200} height={300}></Image>
            <h1>IT & Software</h1>
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
