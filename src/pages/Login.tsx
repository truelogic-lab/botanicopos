import { Link } from 'react-router-dom';
import { useState } from 'react';
import illustration from '../assets/loginandsignupillustarion.png';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white lg:bg-gray-50 font-sans flex items-center justify-center lg:p-12">
      <div className="w-full min-h-screen lg:min-h-0 lg:max-w-5xl lg:h-[650px] bg-white lg:rounded-[2rem] lg:shadow-2xl overflow-hidden flex flex-col lg:flex-row lg:flex-nowrap relative">

        {/* LEFT PANEL */}
        <div className="w-full lg:w-1/2 lg:flex-none bg-blue-950 relative flex flex-col justify-center items-center p-8 lg:p-12 overflow-hidden min-h-[300px] lg:min-h-full z-10">

          <div className="absolute bottom-[-80px] left-[-80px] w-64 h-64 bg-brand rounded-full mix-blend-screen opacity-20"></div>
          <div className="absolute bottom-[20px] left-[30px] w-40 h-40 bg-brand rounded-full mix-blend-screen opacity-30"></div>
          <div className="absolute bottom-[-40px] right-[-40px] w-48 h-48 bg-white rounded-full mix-blend-overlay opacity-10"></div>
          <div className="absolute top-10 right-10 w-24 h-24 bg-brand rounded-full mix-blend-screen opacity-20"></div>

          <div className="relative z-20 flex flex-col items-center text-center">
            <img
              src={illustration}
              alt="Illustration"
              className="w-full max-w-[200px] lg:max-w-[280px] object-contain mb-6 drop-shadow-lg"
            />

            <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-widest mb-2 uppercase">
              WELCOME
            </h2>

            <p className="text-[12px] text-blue-200 uppercase tracking-widest font-semibold mb-4">
              Grow your retail
faster with Botanico
POS software
            </p>

            <p className="text-[12px] lg:text-[13px] text-blue-100/80 leading-relaxed hidden sm:block max-w-[250px]">
              Botanico is the ultimate point of sale software for your retail store. Manage inventory, staff, and sales all in one place.
            </p>
          </div>

          <div className="hidden lg:block absolute top-0 right-0 w-[150px] h-full translate-x-[1px]">
            <svg
              viewBox="0 0 150 650"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M150 0H0C0 0 100 150 100 325C100 500 0 650 0 650H150V0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full lg:w-1/2 lg:flex-none flex-grow flex flex-col justify-center items-center p-6 sm:p-12 bg-white relative z-20">
          <div className="w-full max-w-[360px]">

            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-blue-950 mb-2 tracking-tight">
                Sign in
              </h1>
              <p className="text-[12px] text-gray-400">
                Enter your details to access your dashboard.
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

              {/* Username */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                <input
                  type="text"
                  placeholder="User Name"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>

                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="w-full pl-10 pr-14 py-3 bg-gray-50 border-none rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-gray-800 placeholder-gray-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[10px] font-bold text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>
              </div>

              {/* Remember / Forgot */}
              <div className="flex items-center justify-between text-[11px] pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-gray-500">
                  <input
                    type="checkbox"
                    className="accent-brand w-3.5 h-3.5 rounded border-gray-300"
                  />
                  Remember me
                </label>

                <a href="#" className="text-gray-500 hover:text-brand font-semibold">
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-brand text-white py-3 rounded-lg text-[13px] font-bold hover:bg-brand-dark transition-colors mt-2 shadow-lg shadow-brand/20">
                Sign in
              </button>

              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-[10px] font-bold text-gray-400 uppercase">
                  Or
                </span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              {/* Google Button */}
              <button
                type="button"
                className="w-full bg-white border border-gray-300 text-gray-600 py-3 rounded-lg text-[13px] font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Sign in with Google
              </button>

              <p className="text-center text-[11px] text-gray-400 pt-4">
                Don't have an account?{' '}
                <Link to="/register" className="text-brand font-bold hover:underline ml-1">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
