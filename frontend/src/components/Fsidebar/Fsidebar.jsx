import React from "react";
import FiltersPanel from "./FiltersPanel";
import { ArrowLeft } from "lucide-react";

export default function Fsidebar({ onArrowClick }) {
  return (
    <div
      className="hidden sm:block z-10 fixed top-0 left-0 w-30 sm:w-64 md:w-68 h-screen text-white p-4 border-r border-zinc-800"
      style={{ backgroundColor: "rgb(14,14,17)" }}
    >
      <div className="filterName flex items-center justify-start">
        <button
          className="border border-zinc-700 rounded-full p-2 mb-4 hover:bg-zinc-700 transition duration-200"
          onClick={onArrowClick}
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h2 className="text-lg sm:text-sm md:text-xl ml-1.5 sm:ml-4 md:ml-4 font-bold text-purple-400 mb-3">
          Filters
        </h2>
      </div>

      <div className="my-2 w-32 sm:w-40 md:w-70 relative right-6 mb-5">
        <hr className="border-t border-zinc-700" />
      </div>
      <FiltersPanel />
    </div>
  );
}
