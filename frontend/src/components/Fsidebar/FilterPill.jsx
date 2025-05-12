import React from "react";
import clsx from "clsx";

export default function FilterPill({ icon, label, color = "transparent" }) {
  return (
    <button
      className={clsx(
        "flex items-center h-6 w-23 m-0.5 gap-2 px-3 py-1.5 text-sm rounded-full border border-zinc-700 transition",
        "hover:brightness-110",
        {
          "bg-zinc-700 border-zinc-500 text-white": color === "zinc",
          "bg-green-800 border-green-600 text-white": color === "green",
          "bg-yellow-700 border-yellow-600 text-white": color === "yellow",
          "bg-red-800 border-red-600 text-white": color === "red",
          "bg-blue-800 border-blue-600 text-white": color === "blue",
          "bg-gray-700 border-gray-500 text-white": color === "gray",
          "bg-slate-700 border-slate-500 text-white": color === "slate",
        }
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
