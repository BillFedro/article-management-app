'use client';

import Image from 'next/image';
import { Search, ChevronDown } from 'lucide-react';

export default function Header() {
  const name = "James Dean";
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <>
      {/* Mobile Navbar Only */}
      <nav className="flex sm:hidden justify-between items-center px-4 py-4 bg-white text-blue-600">

        {/* Logo Mobile */}
        <div className="flex items-center">
          <Image
            src="/logo/Frame.svg"
            alt="Logo Mobile"
            width={40}
            height={40}
            className="h-6 w-auto"
          />
        </div>

        {/* User Avatar */}
        <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm">
          {initials}
        </div>
      </nav>

      {/* Header & Hero Section */}
      <header className="relative bg-[#2563EBDB] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/background/Background.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative z-10">
          {/* Desktop top bar */}
          <div className="hidden sm:flex justify-between items-center px-6 py-4">
            {/* Logo Desktop */}
            <Image
              src="/logo/Logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-6 w-auto"
            />

            {/* User info */}
            <div className="flex items-center space-x-4">
              <div className="w-9 h-9 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">
                {initials}
              </div>
              <span className="text-sm font-medium">{name}</span>
            </div>
          </div>

          {/* Hero content */}
          <div className="text-center py-8 sm:py-12 px-4">
            <p className="text-sm font-medium">Blog genzet</p>
            <h1 className="text-xl sm:text-4xl font-bold mt-2 leading-tight">
              The Journal : Design Resources, <br />
              Interviews, and Industry News
            </h1>
            <p className="mt-2 text-xs sm:text-base">Your daily dose of design insights!</p>

            {/* Search box */}
            <div className="mt-6 px-2 flex justify-center">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-[12px] p-2 gap-2 sm:gap-1 shadow-[0_0_0_4px_rgba(255,255,255,0.35)]">

                {/* Select Category */}
                <div className="relative w-full sm:w-auto">
                  <select className="appearance-none bg-white px-4 py-2 pr-10 text-sm text-black rounded-md outline-none focus:ring-0 border border-gray-300 shadow-sm w-full sm:w-auto cursor-pointer">
                    <option>Select category</option>
                    <option>UI/UX</option>
                    <option>Frontend</option>
                    <option>Interview</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Search Input */}
                <div className="relative w-full sm:w-[300px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles"
                    className="pl-9 pr-4 py-2 text-sm text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm w-full outline-none"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
