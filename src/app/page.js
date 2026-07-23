import Image from "next/image";
import Banner from "@/components/Banner";
import CourseDetail from "@/components/CourseDetail";
import TrendingCourses from "@/components/TrendingCourse";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
          <TrendingCourses></TrendingCourses>
      <CourseDetail></CourseDetail>
    </div>
  );
}
