import React from "react";
import clsx from "clsx";

export default function FilterPill({
  icon,
  label,
  className = "",
  color = "transparent",
}) {
  return (
    <button
      className={clsx(
        "flex items-center gap-1 px-2 py-1 text-[12px] sm:text-xs md:text-sm rounded-full border border-zinc-700 transition",
        "hover:brightness-110 whitespace-nowrap",
        {
          "bg-zinc-700 border-zinc-500 text-white": color === "zinc",
          "bg-green-800 border-green-600 text-white": color === "green",
          "bg-yellow-700 border-yellow-600 text-white": color === "yellow",
          "bg-red-800 border-red-600 text-white": color === "red",
          "bg-blue-800 border-blue-600 text-white": color === "blue",
          "bg-gray-700 border-gray-500 text-white": color === "gray",
          "bg-slate-700 border-slate-500 text-white": color === "slate",
        },
        className
      )}
    >
      <span className="hidden sm:inline">{icon}</span>
      <span className="truncate">{label}</span>
    </button>
  );
}
