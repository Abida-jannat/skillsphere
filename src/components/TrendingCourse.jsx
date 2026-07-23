import Link from "next/link";

const TrendingCourses = async () => {
  const res = await fetch(
    "https://skillsphere-murex.vercel.app/data.json",
    {
      cache: "no-store",
    }
  );

  const courses = await res.json();

  const trending = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto py-20 px-5">
      <h2 className="text-5xl font-bold text-center mb-12">
        🔥 Trending Courses
      </h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {trending.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
          >
            <img
              src={course.image}
              className="h-60 w-full object-cover"
              alt={course.title}
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {course.title}
              </h3>

              <p className="mt-3">
                ⭐ {course.rating}
              </p>

              <Link href={`/courses/${course.id}`}>
                <button className="btn btn-primary w-full mt-5">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCourses;