import Image from "next/image";
import Banner from "@/components/Banner";
import CourseDetail from "@/components/CourseDetail";

export default function Home() {
  return (
    <div>
      <Banner></Banner>

      <CourseDetail></CourseDetail>
    </div>
  );
}
