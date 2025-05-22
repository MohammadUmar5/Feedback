import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function InsightsPanel() {
  return (
    <div className="bg-transparent space-y-4 text-white rounded-xl p-4 border border-zinc-600 hover:border-gray-400 transition h-206 w-70">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-2">Insights</h2>

      {/* Trending Keywords */}
      <p className="text-sm text-gray-400 mb-2">Trending Keywords</p>
      <div className="border border-gray-700 rounded-md p-3 mb-4">
        <div className="flex flex-wrap gap-2 justify-center items-center">
          <span className="text-2xl text-yellow-400 font-semibold">
            Performance
          </span>
          <span className="text-xl text-yellow-300 font-medium">Mobile</span>
          <span className="text-lg text-lime-400 font-medium">Design</span>
          <span className="text-md text-blue-400 font-medium">Usability</span>
          <span className="text-md text-blue-300 font-medium">Speed</span>
        </div>
      </div>

      {/* Emerging Themes */}
      <p className="text-sm text-gray-400 mb-2">Emerging Themes</p>
      <ul className="mb-4 space-y-1">
        <li className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-cyan-400 rounded-full"></span>
            <span>UI Responsiveness</span>
          </div>
          <span className="text-green-400 flex items-center text-sm">
            <ArrowUpRight className="h-4 w-4" /> 23%
          </span>
        </li>
        <li className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-cyan-300 rounded-full"></span>
            <span>Data Visualization</span>
          </div>
          <span className="text-green-400 flex items-center text-sm">
            <ArrowUpRight className="h-4 w-4" /> 18%
          </span>
        </li>
        <li className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-red-400 rounded-full"></span>
            <span>Export Options</span>
          </div>
          <span className="text-red-400 flex items-center text-sm">
            <ArrowDownRight className="h-4 w-4" /> 12%
          </span>
        </li>
        <li className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-emerald-400 rounded-full"></span>
            <span>Integration APIs</span>
          </div>
          <span className="text-green-400 flex items-center text-sm">
            <ArrowUpRight className="h-4 w-4" /> 32%
          </span>
        </li>
        <li className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-rose-400 rounded-full"></span>
            <span>Onboarding Flow</span>
          </div>
          <span className="text-red-400 flex items-center text-sm">
            <ArrowDownRight className="h-4 w-4" /> 8%
          </span>
        </li>
      </ul>

      {/* Top Feature Requests */}
      <p className="text-sm text-gray-400 mb-2">Top Feature Requests</p>
      <div className="bg-[#1a1a1a] rounded-md p-3 ">
        <p className="font-semibold text-sm mb-1">
          Custom Export Formats{" "}
          <span className="text-xs text-gray-500">42 mentions</span>
        </p>
        <p className="text-xs text-gray-400">
          Ability to export feedback data in multiple formats
        </p>
      </div>
      <div className="bg-[#1a1a1a] rounded-md p-3">
        <p className="font-semibold text-sm mb-1">
          Custom Export Formats{" "}
          <span className="text-xs text-gray-500">42 mentions</span>
        </p>
        <p className="text-xs text-gray-400">
          Ability to export feedback data in multiple formats
        </p>
      </div>
      <div className="bg-[#1a1a1a] rounded-md p-3">
        <p className="font-semibold text-sm mb-1">
          Custom Export Formats{" "}
          <span className="text-xs text-gray-500">42 mentions</span>
        </p>
        <p className="text-xs text-gray-400">
          Ability to export feedback data in multiple formats
        </p>
      </div>
    </div>
  );
}
