"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();

    setError("");

    if (!name || !email || !image || !password) {
      setError("Please fill in all fields.");
        toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
      });

      console.log(data);

    if (error) {
    setError(error.message || "Registration Failed");
    toast.error(error.message || "Registration Failed");
    return;
  }

toast.success("Registration Successful!");

setTimeout(() => {
  router.push("/login");
}, 1000);

    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-6 py-10">

      <div className="max-w-6xl w-full bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl grid lg:grid-cols-2 overflow-hidden">

        {/* Left Side */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-14">

          <h1 className="text-5xl font-bold leading-tight">
            Welcome to
            <br />
            SkillSphere
          </h1>

          <p className="mt-6 text-lg text-indigo-100">
            Learn new skills, build amazing projects, and grow your career with
            expert instructors.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            className="w-72 mt-10"
            alt="Learning"
          />

        </div>

        {/* Right Side */}

        <div className="p-10 md:p-14">

          <h2 className="text-4xl font-bold text-gray-800">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Start your learning journey today.
          </p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-5 text-sm">
              {error}
            </div>
          )}

          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full h-14 rounded-xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full h-14 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="url"
              placeholder="Photo URL"
              className="input input-bordered w-full h-14 rounded-xl"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <div className="relative">

              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full h-14 rounded-xl pr-20"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-5 top-4 text-sm font-semibold text-indigo-600"
              >
                {show ? "Hide" : "Show"}
              </button>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn w-full h-14 rounded-xl bg-indigo-600 hover:bg-indigo-700 border-none text-lg text-white"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          <div className="divider my-8">
            OR
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full h-14 rounded-xl"
          >
            Continue with Google
          </button>

          <p className="text-center mt-8 text-gray-600">
            Already have an account?

            <Link
              href="/login"
              className="text-indigo-600 font-semibold ml-2 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}