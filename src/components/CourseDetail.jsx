import Link from "next/link";

const CourseDetail = async () => {
  const res = await fetch(
    "https://skillsphere-murex.vercel.app/data.json",
    {
      cache: "no-store",
    }
  );

  const courses = await res.json();

  // Top 3 Highest Rated
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  // Unique instructors
  const instructors = [
    ...new Map(
      courses.map((course) => [course.instructor, course])
    ).values(),
  ].slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto py-20 px-5">

      {/*Popular Courses*/}

      <div className="text-center mb-14">

        <h2 className="text-5xl font-bold">
          🔥 Popular Courses
        </h2>

        <p className="text-gray-500 mt-3">
          Learn from our highest-rated courses.
        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {topCourses.map((course) => (

          <div
            key={course.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300"
          >
            <img
              src={course.image}
              className="h-60 w-full object-cover"
              alt={course.title}
            />

            <div className="p-6">

              <span className="badge badge-primary">
                {course.category}
              </span>

              <h3 className="text-2xl font-bold mt-4">
                {course.title}
              </h3>

              <p className="text-gray-500 mt-3">
                👨‍🏫 {course.instructor}
              </p>

              <div className="flex justify-between mt-5">
                <p>⭐ {course.rating}</p>

                <p>{course.duration}</p>

              </div>
              <Link href={`/courses/${course.id}`}>
                <button className="btn btn-primary w-full mt-6 rounded-full">
                  View Details
                </button>
              </Link>

            </div>

          </div>

        ))}

      </div>

      {/*Learning Tips */}

      <div className="mt-28">
        <h2 className="text-5xl font-bold text-center">
          📌 Learning Tips
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-12">
          Simple habits to become a better learner.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-blue-50 rounded-2xl p-8">

            <div className="text-5xl">📅</div>

            <h3 className="font-bold text-2xl mt-5">
              Plan Your Study
            </h3>
            <p className="mt-3 text-gray-600">
              Set a daily learning schedule and stay consistent.
            </p>

          </div>
          <div className="bg-purple-50 rounded-2xl p-8">
            <div className="text-5xl">💻</div>

            <h3 className="font-bold text-2xl mt-5">
              Practice Projects
            </h3>

            <p className="mt-3 text-gray-600">
              Build projects after every course to improve your skills.
            </p>

          </div>

          <div className="bg-green-50 rounded-2xl p-8">

            <div className="text-5xl">🎯</div>
            <h3 className="font-bold text-2xl mt-5">
              Stay Focused
            </h3>
            <p className="mt-3 text-gray-600">
              Use the Pomodoro technique for productive study sessions.
            </p>

          </div>

        </div>

      </div>

      {/*Top Instructors */}

      <div className="mt-28">

        <h2 className="text-5xl font-bold text-center">
          🏆 Meet Our Top Instructors
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-12">
          Learn from experienced professionals.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {instructors.map((teacher, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg text-center p-8 hover:-translate-y-2 duration-300"
            >

              <img
                src={`https://i.pravatar.cc/200?img=${index + 10}`}
                className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500"
                alt={teacher.instructor}
              />

              <h3 className="text-2xl font-bold mt-6">
                {teacher.instructor}
              </h3>

              <p className="text-blue-600 mt-2">
                {teacher.category}
              </p>

              <div className="badge badge-outline mt-5">
                Expert Instructor
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default CourseDetail;