"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <header className="container px-4 mx-auto sm:px-6 lg:px-8 py-4 md:py-2">
      <div className="flex items-center justify-between ">
        <div className="flex gap-10">
          <Link
            href="/"
            className="w-[120px] h-[48px] scale-90 relative flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
          >
            <Image fill src={"/assets/images/Home-logo.png"} alt="Logo" />
          </Link>
          <div className="hidden lg:flex items-center justify-center gap-10 xl:gap-16">
            <Link
              href="/features"
              title=""
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              Features
            </Link>
            <Link
              href="#"
              title=""
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              Pricing
            </Link>
            <Link
              href="#"
              title=""
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              Use cases
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-10">
          <Link
            href="/login"
            title=""
            className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
          >
            Login
          </Link>
          <Link
            href="/signup"
            title="Sign up"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Sign up
          </Link>
        </div>
        <button
          id="menu-button"
          aria-label="menu button"
          type="button"
          className="text-gray-900 flex lg:hidden"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {!expanded ? (
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      {expanded && (
        <nav className="grid gap-y-7 px-1 py-8">
          <Link
            href="#"
            title="Features"
            className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
          >
            Features
          </Link>
          <Link
            href="#"
            title="Pricing"
            className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
          >
            Pricing
          </Link>
          <Link
            href="#"
            title="Automation"
            className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
          >
            Automation
          </Link>
          <Link
            href="#"
            title="Customer Login"
            className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
          >
            Customer Login
          </Link>
          <Link
            href="#"
            title="Sign up"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Sign up
          </Link>
        </nav>
      )}
    </header>
  );
};
export default Navbar;
