import CourseCategories from "./components/HomePage/CourseCategories/CourseCategories";
import Banner from "./components/HomePage/Banner/Banner";
import FeatureCourse from "./components/HomePage/FeatureCourse/FeatureCourse";


export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <FeatureCourse></FeatureCourse>
        <CourseCategories></CourseCategories>
    </div>
  );
}
