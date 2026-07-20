import { notFound } from "next/navigation";

const CoursePage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://skillsphere-murex.vercel.app/data.json",
    {
      cache: "no-store",
    }
  );

  const courses = await res.json();

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    notFound();
  }

  console.log(course);

  return (
    <div className="max-w-5xl mx-auto py-20 px-5">

      <img
        src={course.image}
        alt={course.title}
        className="rounded-3xl w-full h-[450px] object-cover"
      />

      <div className="mt-10">

        <span className="badge badge-primary">
          {course.category}
        </span>

        <h1 className="text-5xl font-bold mt-4">
          {course.title}
        </h1>

        <p className="mt-4 text-lg">
          👨‍🏫 <strong>Instructor:</strong> {course.instructor}
        </p>
     <p>
     ⭐ <strong>Rating:</strong> {course.rating}
    </p>

   <p>
    📖 <strong>Level:</strong> {course.level}
   </p>

   <p>
     ⏳ <strong>Duration:</strong> {course.duration}
   </p>

     <div className="mt-3">
       📖 <strong>Level:</strong> {course.level}
     </div>

        {/* Description */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-3">
            Course Description
          </h2>

          <p className="text-gray-600 leading-8">
            {course.description || "No description available."}
          </p>
        </div>

        <button className="btn btn-primary mt-10">
          Enroll Now
        </button>

      </div>

    </div>
  );
};

export default CoursePage;