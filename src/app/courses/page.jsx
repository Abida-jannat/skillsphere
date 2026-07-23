import Link from "next/link";

const CoursesPage = async ({ searchParams }) => {
  const res = await fetch(
    "https://skillsphere-murex.vercel.app/data.json",
    {
      cache: "no-store",
    }
  );

  const courses = await res.json();

  const params = await searchParams;
  const search = (params?.search || "").toLowerCase();

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search)
  );

  return (
    <div className="max-w-7xl mx-auto py-16 px-5">

      {/* Heading */}

      <div className="text-center mb-14">

        <h1 className="text-5xl font-bold">
          📚 All Courses
        </h1>

        <p className="text-gray-500 mt-3">
          Choose the course that matches your career goal.
        </p>

      </div>

      {/* Search */}

      <form className="flex justify-center mb-10">
        <input
          type="text"
          name="search"
          defaultValue={search}
          placeholder="Search courses by title..."
          className="input input-bordered w-full max-w-md"
        />

        <button
          type="submit"
          className="btn btn-primary ml-3"
        >
          Search
        </button>
      </form>

      {/* Course Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (

            <div
              key={course.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl duration-300"
            >

              <figure>

                <img
                  src={course.image}
                  alt={course.title}
                  className="h-56 w-full object-cover"
                />

              </figure>

              <div className="card-body">

                <div className="flex justify-between">

                  <span className="badge badge-primary">
                    {course.category}
                  </span>

                  <span className="badge badge-outline">
                    {course.level}
                  </span>

                </div>

                <h2 className="card-title">
                  {course.title}
                </h2>

                <p>
                  👨‍🏫 {course.instructor}
                </p>

                <div className="flex items-center w-full mt-4">

                  <div className="flex items-center gap-1">
                    <span>⭐</span>
                    <span>{course.rating}</span>
                  </div>

                  <div className="ml-auto flex items-center gap-1">
                    <span>⏱️</span>
                    <span>{course.duration}</span>
                  </div>

                </div>

                <Link href={`/courses/${course.id}`}>
                  <button className="btn btn-primary w-full mt-5">
                    Details
                  </button>
                </Link>

              </div>

            </div>

          ))
        ) : (
          <div className="col-span-full text-center text-xl text-gray-500">
            No courses found.
          </div>
        )}

      </div>

    </div>
  );
};

export default CoursesPage;