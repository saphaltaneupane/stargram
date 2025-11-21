import React from "react";

// Stargram signup component (Tailwind CSS)
// Removes "Log in with Facebook" and the "People who use..." line
// Footer simplified to "@2025 Stargram"

export default function Signup() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Main card */}
        <div className="bg-[#0b0b0b] border border-gray-800 rounded-md p-8 shadow-lg">
          <header className="flex flex-col items-center mb-6">
            <h1 className="text-4xl font-cursive text-white mb-2">Stargram</h1>
            <p className="text-center text-sm text-gray-300">
              Sign up to see photos and videos from your friends.
            </p>
          </header>

          {/* OR divider + form */}
          <div>
            {/* removed "Log in with Facebook" as requested */}

            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-700" />
              <div className="px-3 text-xs text-gray-400">OR</div>
              <div className="flex-1 h-px bg-gray-700" />
            </div>

            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="email" className="sr-only">
                  Mobile number or email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Mobile number or email address"
                  className="w-full bg-[#0b0b0b] placeholder-gray-400 border border-gray-800 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full bg-[#0b0b0b] placeholder-gray-400 border border-gray-800 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label htmlFor="fullname" className="sr-only">
                  Full Name
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#0b0b0b] placeholder-gray-400 border border-gray-800 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  className="w-full bg-[#0b0b0b] placeholder-gray-400 border border-gray-800 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Removed the "People who use our service..." paragraph as requested */}

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white rounded-md py-2 font-semibold hover:bg-blue-600 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </form>

            {/* login prompt box under main card */}
            <div className="mt-6 bg-[#0b0b0b] border border-gray-800 rounded-md p-4 text-center">
              <p className="text-sm text-gray-300">
                Have an account?{" "}
                <a href="#" className="text-blue-400">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom footer - only @2025 Stargram as requested */}
        <footer className="mt-6 text-center">
          <p className="text-xs text-gray-500">© 2025 Stargram from SN</p>
        </footer>
      </div>
    </div>
  );
}
