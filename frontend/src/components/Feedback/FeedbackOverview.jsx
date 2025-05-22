import React from "react";

export default function FeedbackOverview() {
  return (
    <div className="text-white rounded-xl p-6 bg-transparent border border-zinc-600 hover:border-gray-400 transition w-250 h-60">
      <h2 className="text-lg font-semibold mb-6">Feedback Overview</h2>

      <div className="flex justify-between items-center ">
        {/* Feedback Score */}
        <div className="flex flex-col items-start ml-10 space-y-2">
          <p className="text-sm text-gray-400 mb-4">Feedback Score</p>
          <p className="text-5xl font-bold text-blue-400 ml-6">50</p>
          <p className="text-green-400 text-xs">↑ 12% vs last month</p>
        </div>

        {/* Feedback Type Breakdown */}
        <div className="flex flex-col space-y-2">
          <p className="text-sm text-gray-400 mb-4">Feedback Categories</p>
          <div className="flex flex-col space-y-2">
            <span className="flex items-center bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm h-5 w-fit">
              Feature Requests{" "}
              <span className="ml-1 font-semibold text-blue-400">34</span>
            </span>
            <span className="flex items-center bg-red-900 text-red-300 px-3 py-1 rounded-full text-sm h-5 w-fit">
              Bugs{" "}
              <span className="ml-1 font-semibold text-red-400">27</span>
            </span>
            <span className="flex items-center bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm h-5 w-fit">
              Usability Issues{" "}
              <span className="ml-1 font-semibold text-green-400">19</span>
            </span>
          </div>
        </div>

        {/* Trending Pain Points */}
        <div className="flex flex-col space-y-2">
          <p className="text-sm text-gray-400 mb-4">Trending Pain Points</p>
          <div className="flex flex-col space-y-2">
            <span className="flex items-center bg-orange-900 text-orange-300 px-3 py-1 rounded-full text-sm h-5 w-fit">
              Loading Speed{" "}
              <span className="ml-1 font-semibold text-orange-400">28</span>
            </span>
            <span className="flex items-center bg-orange-900 text-orange-300 px-3 py-1 rounded-full text-sm h-5 w-fit">
              Mobile Navigation{" "}
              <span className="ml-1 font-semibold text-orange-400">22</span>
            </span>
            <span className="flex items-center bg-orange-900 text-orange-300 px-3 py-1 rounded-full text-sm h-5 w-fit">
              Search Results{" "}
              <span className="ml-1 font-semibold text-orange-400">17</span>
            </span>
          </div>
        </div>

        {/* Source Breakdown */}
        <div className="flex flex-col space-y-2">
          <p className="text-sm text-gray-400 mb-4">Source Breakdown</p>
          <div className="flex flex-col space-y-2">
            <span className="flex items-center bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm h-5 w-fit">
              Twitter{" "}
              <span className="ml-1 font-semibold text-blue-400">45%</span>
            </span>
            <span className="flex items-center bg-yellow-900 text-yellow-300 px-3 py-1 rounded-full text-sm h-5 w-fit">
              Email{" "}
              <span className="ml-1 font-semibold text-yellow-400">30%</span>
            </span>
            <span className="flex items-center bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm h-5 w-fit">
              Reviews{" "}
              <span className="ml-1 font-semibold text-green-400">25%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}