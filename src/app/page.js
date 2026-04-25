import CourseCategories from "./components/CourseCategories/CourseCategories";
import Banner from "./components/HomePage/Banner/Banner";
import FeatureCourse from "./components/HomePage/FeatureCourse/FeatureCourse";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";


export default function Home() {
  return (
    <div>
       
        <Navbar></Navbar>
        <Banner></Banner>
        <FeatureCourse></FeatureCourse>
        <CourseCategories></CourseCategories>
       <Footer></Footer>
    </div>
  );
}
