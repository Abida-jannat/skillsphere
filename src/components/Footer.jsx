"use client";

import Link from "next/link";
import {
  FaGraduationCap,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>

            <div className="flex items-center gap-3 mb-4">

              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <FaGraduationCap className="text-white text-2xl" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  SkillSphere
                </h2>

                <p className="text-sm text-gray-400">
                  Learn Beyond Limits
                </p>
              </div>

            </div>

            <p className="text-gray-400 leading-7">
              SkillSphere is an online learning platform where
              students can explore courses, learn new skills,
              and build their dream careers.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/courses" className="hover:text-blue-400">
                  Courses
                </Link>
              </li>

              <li>
                <Link href="/profile" className="hover:text-blue-400">
                  My Profile
                </Link>
              </li>

              <li>
                <Link href="/register" className="hover:text-blue-400">
                  Register
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact Info */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <span>support@skillsphere.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500" />
                <span>+880 1234-567890</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>Sylhet, Bangladesh</span>
              </div>

            </div>

          </div>

          {/* Social Links */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 mb-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center duration-300"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center duration-300"
              >
                <FaGithub />
              </a>

            </div>

            <div className="space-y-2">

              <Link
                href="/terms"
                className="block hover:text-blue-400"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/privacy"
                className="block hover:text-blue-400"
              >
                Privacy Policy
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-slate-700">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-400">
            © 2026 SkillSphere. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            Designed with ❤️ for learners.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;