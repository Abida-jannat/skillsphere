"use client";

import Link from "next/link";

export default function Banner() {
  return (

    <section className="bg-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
              🚀 Online Learning Platform
            </span>
                      
            <h1 className="text-6xl font-bold leading-tight mt-8 text-gray-900">
              Build Your
              <br />
              Dream Career
              <span className="text-blue-700">
                {" "}One Skill <span className="text-gray-900">at a Time.</span>
              </span>            
           </h1>
                      
            <p className="text-gray-600 text-lg mt-8 leading-8">

              Learn Web Development, Artificial Intelligence,
              UI/UX Design, Data Science and Digital Marketing
              through project-based learning from expert instructors.
            </p>
            <div className="flex gap-5 mt-10">
             <Link href="/courses">

                <button className="btn btn-primary rounded-full px-8">
                  Browse Courses
                </button>

              </Link>

              <Link href="/about">

                <button className="btn btn-outline rounded-full px-8">

                  Learn More

                </button>

              </Link>

            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-16">
              <div>
                <h2 className="text-4xl font-bold text-blue-600">
                  300+
               </h2>
                <p className="text-gray-500">
                  Courses
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-blue-600">
                  12K+
                </h2>
                <p className="text-gray-500">
                  Students
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-blue-600">
                  95%
                </h2>
                <p className="text-gray-500">
                  Success Rate
               </p>
              </div>
            </div>
          </div>
          {/* Right */}
          <div>
              <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200"
              alt="Programming"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

  );
}