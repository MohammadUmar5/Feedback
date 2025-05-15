import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FilterSection({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-transparent rounded-xl p-3 pb-5 mb-3 border border-zinc-700">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-sm font-semibold text-white truncate">{title}</h3>
        <div className="flex-shrink-0">
          {open ? (
            <ChevronUp className="w-4 h-4 text-purple-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-purple-400" />
          )}
        </div>
      </div>
      {open && <div className="mt-3 overflow-x-auto">{children}</div>}
    </div>
  );
}
