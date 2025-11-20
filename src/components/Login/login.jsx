import React from "react";

export const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black">
      {/* to create the line */}
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-900 via-gray-900 to-black px-8">
        <div className="flex items-center gap-16 max-w-6xl w-full">
          <div className="flex-1 relative hidden lg:block">
            <div className="relative w-full max-w-lg mx-auto h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-3xl"></div>

              {/* center main photo */}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="w-72 h-80 border-2 border-gray-600 rounded-2xl shadow-2xl overflow-hidden">
                  <img
                    src="./stargram.jpg"
                    alt="Main"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Top left photo - rotated */}
              {/* Top left photo - rotated */}
              <div className="absolute top-8 left-4 z-20 -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="w-44 h-56 border-2 border-gray-600 rounded-xl shadow-xl overflow-hidden">
                  <img
                    src="./paris.png"
                    alt="Photo 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Top right photo */}
              <div className="absolute top-16 right-8 z-20 rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="w-40 h-52 border-2 border-gray-600 rounded-xl shadow-xl overflow-hidden">
                  <img
                    src="./leftu.jpg"
                    alt="Photo 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom left photo */}
              <div className="absolute bottom-12 left-12 z-10 rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-36 h-44 border-2 border-gray-600 rounded-xl shadow-xl overflow-hidden">
                  <img
                    src="./ride.jpg"
                    alt="Photo 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom right photo */}
              <div className="absolute bottom-8 right-4 z-10 -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="w-32 h-40 border-2 border-gray-600 rounded-xl shadow-xl overflow-hidden">
                  <img
                    src="./maba.jpg"
                    alt="Photo 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* login */}

          <div>
            <form action="">
              <input type="text" placeholder="Username or email" />
              <input type="text" placeholder="Password" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// import React, { useState } from "react";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     // Full screen container with gradient background from your code
//     <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-900 via-gray-900 to-black px-8">

//       {/* Main container holding both sides */}
//       <div className="flex items-center gap-16 max-w-6xl w-full">

//         {/* LEFT SIDE - Photo Gallery (hidden on mobile) */}
//         <div className="flex-1 relative hidden lg:block">
//           <div className="relative w-full max-w-lg mx-auto h-[600px]">

//             {/* Background glow effect */}
//             <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-3xl"></div>

//             {/* Center main photo */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
//               <div className="w-72 h-80 border-2 border-gray-600 rounded-2xl shadow-2xl overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop"
//                   alt="Main"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Top left photo - rotated */}
//             <div className="absolute top-8 left-4 z-20 -rotate-12 hover:rotate-0 transition-transform duration-300">
//               <div className="w-44 h-56 border-2 border-gray-600 rounded-xl shadow-xl overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop"
//                   alt="Photo 1"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Top right photo */}
//             <div className="absolute top-16 right-8 z-20 rotate-6 hover:rotate-0 transition-transform duration-300">
//               <div className="w-40 h-52 border-2 border-gray-600 rounded-xl shadow-xl overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
//                   alt="Photo 2"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Bottom left photo */}
//             <div className="absolute bottom-12 left-12 z-10 rotate-3 hover:rotate-0 transition-transform duration-300">
//               <div className="w-36 h-44 border-2 border-gray-600 rounded-xl shadow-xl overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop"
//                   alt="Photo 3"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Bottom right photo */}
//             <div className="absolute bottom-8 right-4 z-10 -rotate-6 hover:rotate-0 transition-transform duration-300">
//               <div className="w-32 h-40 border-2 border-gray-600 rounded-xl shadow-xl overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop"
//                   alt="Photo 4"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE - Login Form */}
//         <div className="flex-1 max-w-md w-full">

//           {/* Main login card */}
//           <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-xl p-12">

//             {/* Logo - circular image instead of text */}
//             <div className="text-center mb-8">
//               <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-gray-700 overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop"
//                   alt="Stargram Logo"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Input fields */}
//             <div className="space-y-3">

//               {/* Username input */}
//               <input
//                 type="text"
//                 placeholder="Username or email"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-sm"
//               />

//               {/* Password input */}
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-sm"
//               />

//               {/* Login button */}
//               <button
//                 onClick={(e) => e.preventDefault()}
//                 className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 rounded hover:from-purple-700 hover:to-pink-700 transition text-sm"
//               >
//                 Log In
//               </button>
//             </div>

//             {/* OR divider */}
//             <div className="flex items-center my-6">
//               <div className="flex-1 border-t border-gray-700"></div>
//               <span className="px-4 text-gray-500 text-sm font-semibold">OR</span>
//               <div className="flex-1 border-t border-gray-700"></div>
//             </div>

//             {/* Forgot password link */}
//             <div className="text-center">
//               <a href="#" className="text-sm text-purple-400 hover:text-purple-300">
//                 Forgot password?
//               </a>
//             </div>
//           </div>

//           {/* Sign up card */}
//           <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-xl p-6 text-center mt-4">
//             <p className="text-gray-300 text-sm">
//               Don't have an account?{" "}
//               <a href="#" className="text-purple-400 font-semibold hover:text-purple-300">
//                 Sign up
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
