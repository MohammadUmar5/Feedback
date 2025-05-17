import React from "react";
import SearchBar from "../SearchBar";
import { FiFilter, FiMenu } from "react-icons/fi"; // Importing a menu icon from react-icons

export default function FeedbackGroup({ title }) {
  return (
    <div className="space-y-4 mb-6 mt-3 md:mt-0 sm:mt-0 h-15 sm:h-15 md:h-15 w-150 sm:w-290 md:w-290 relative right-6 z-0 border-b border-zinc-700 pb-4 flex items-center justify-between">
      <div className="flex items-center">
        {/* Menu Button */}
        <button className="ml-10 mt-4 block sm:hidden p-2 rounded-md bg-transparent hover:bg-zinc-800 transition">
          <FiMenu className="w-5 h-5 text-white" />
        </button>
        <h2 className="ml-3 sm:ml-6 md:ml-10 text-xl sm:text-sm md:text-xl mt-4 md:mt-0 sm:mt-0 mb-0 font-bold text-transparent bg-clip-text bg-gradient-to-r to-blue-400 from-pink-500 flex items-center w-full">
          {title}
          <FiFilter className="block sm:hidden ml-20 text-white" />
          {/* Filter icon visible only on mobile */}
        </h2>
      </div>
      <div className="hidden sm:block h-10 mr-30 mt-0 mb-10 sm:mb-7">
        <SearchBar />
      </div>
    </div>
  );
}
