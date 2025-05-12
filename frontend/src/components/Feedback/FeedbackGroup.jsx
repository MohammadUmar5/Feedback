import React from "react";
import SearchBar from "../SearchBar";
import { Search } from "lucide-react";
export default function FeedbackGroup({ title }) {
  return (
    <div className="space-y-4 mb-6 h-15 w-290 relative right-6 z-0 border-b border-zinc-700 pb-4 flex items-center justify-between ">
      <h2 className="ml-6 text-xl mt-0 mb-0 font-bold text-purple-400">{title}</h2>
      <div className="mr-30 mt-0 mb-7">
        <SearchBar />
      </div>
    </div>
  );
}
