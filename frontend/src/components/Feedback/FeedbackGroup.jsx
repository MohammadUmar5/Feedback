import React from "react";
import SearchBar from "../SearchBar";
export default function FeedbackGroup({ title }) {
  return (
    <div className="space-y-4 mb-6 h-15 sm:h-15 md:h-15 w-100 sm:w-290 md:w-290 relative right-6 z-0 border-b border-zinc-700 pb-4 flex items-center justify-between ">
      <h2 className="ml-25 sm:ml-6 md:ml-10 text-lg sm:text-sm md:text-xl mt-0 mb-0 font-bold text-purple-400">{title}</h2>
      <div className="hidden sm:block h-10 mr-30 mt-0 mb-10 sm:mb-7">
      <SearchBar />
      </div>
    </div>
  );
}
