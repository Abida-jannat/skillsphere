"use client";

import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa";

export default function Navbar() {
  const user = false;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <div className="w-12 h-12 bg-blue-600 rounded-xl flex justify-center items-center">

            <FaGraduationCap className="text-white text-2xl"/>

          </div>

          <div>

            <h1 className="text-2xl font-bold text-gray-900">
              SkillSphere
            </h1>

            <p className="text-sm text-gray-500">
              Learn Beyond Limits
            </p>

          </div>

        </Link>

        {/* Menu */}

        <ul className="hidden lg:flex items-center gap-10 font-medium text-gray-700">

          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          <li>
            <Link href="/courses" className="hover:text-blue-600">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-blue-600">
              My Profile
            </Link>
          </li>
        </ul>
        {/* Buttons */}

        <div className="flex gap-3">
          {user ? (
            <button className="btn btn-primary">
              Logout
            </button>

          ) : (
            <>
              <Link href="/login">
                <button className="btn btn-ghost">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="btn btn-primary rounded-full x px-6">
                 Register
                </button>
              </Link>
            </>
          )}

        </div>

      </div>

    </nav>
  );
}