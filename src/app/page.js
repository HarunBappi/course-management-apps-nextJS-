import CourseCategories from "./components/HomePage/CourseCategories/CourseCategories";
import Banner from "./components/HomePage/Banner/Banner";
import FeatureCourse from "./components/HomePage/FeatureCourse/FeatureCourse";
import courses from "./Data/courses";
import Ourcourses from "./components/HomePage/OurCourses/Ourcourses";
import Link from "next/link";


export default function Home() {
  const ourCourses = courses.slice(0 , 4)
  return (
    <div>
        <Banner></Banner>
        <FeatureCourse></FeatureCourse>
        <CourseCategories></CourseCategories>
        {/* Our Courses */}
        <div className='mt-4 w-11/12 mx-auto'>
            <h1 className="text-center text-4xl font-semibold mb-5">Our Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {ourCourses.map(courses =>(
                  <Ourcourses key={courses.id} courses={courses}></Ourcourses>
                ))}
            </div>
            <div className="py-10 flex items-center justify-center">
              <Link href="/courses">
              <button className="btn bg-slate-300 text-black rounded-md border-0 hover:bg-primary">All Courses</button>
              </Link>
            </div>
        </div>
    </div>
  );
}
