"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message || "Invalid email or password.");
      return;
    }

    router.push(redirect);
  }

  async function handleGoogleLogin() {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: redirect,
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-6 py-10">

      <div className="max-w-6xl w-full bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl grid lg:grid-cols-2 overflow-hidden">

        {/* Left Side */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-14">

          <h1 className="text-5xl font-bold leading-tight">
            Welcome Back
            <br />
            to SkillSphere
          </h1>

          <p className="mt-6 text-lg text-indigo-100">
            Continue your learning journey. Access your enrolled courses,
            complete lessons, and achieve your goals.
          </p>

        </div>

        {/* Right Side */}

        <div className="p-10 md:p-14">

          <h2 className="text-4xl font-bold text-gray-800">
            Sign In
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Login to continue learning.
          </p>

          {/* Error Message */}

          {error && (
            <div className="alert alert-error mb-6">
              <span>{error}</span>
            </div>
          )}

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full h-14 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="relative">

              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full h-14 rounded-xl pr-20"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-5 top-4 text-sm font-semibold text-indigo-600"
              >
                {show ? "Hide" : "Show"}
              </button>

            </div>

            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm"
                />
                Remember me
              </label>

              <a
                href="#"
                className="text-indigo-600 hover:underline"
              >
                Forgot Password?
              </a>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn w-full h-14 rounded-xl bg-indigo-600 hover:bg-indigo-700 border-none text-lg disabled:opacity-70"
            >
              {loading ? "Signing In..." : "Sign In"}
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
            {"Don't have an account?"}

            <Link
              href="/register"
              className="text-indigo-600 font-semibold ml-2 hover:underline"
            >
              Create Account
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}