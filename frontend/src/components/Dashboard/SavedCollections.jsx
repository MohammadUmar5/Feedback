import React from "react";

const collections = [
  {
    title: "Mobile UX Issues",
    count: 24,
    tags: ["mobile", "ux", "navigation"],
    description: "Feedback about mobile app experience",
  },
  {
    title: "Export Feature Requests",
    count: 17,
    tags: ["export", "feature request"],
    description: "Users asking for better export options",
  },
  {
    title: "Positive Reviews",
    count: 42,
    tags: ["positive", "testimonial"],
    description: "Collection of all 5-star feedback",
  },
  {
    title: "Pricing Feedback",
    count: 13,
    tags: ["pricing", "subscription"],
    description: "Comments about our pricing structure",
  },
];

export default function SavedCollections() {
  return (
    <div className="w-160 p-4 border border-zinc-600 rounded-xl  hover:border-gray-400 transition">
      <h2 className="text-white text-lg font-semibold ml-2 mb-4">Saved Collections</h2>
      <div className="flex flex-wrap gap-4 mt-6">
        {collections.map((item, index) => (
          <div
            key={index}
            className="flex-1 min-w-[45%] border border-gray-700 rounded-lg p-4 hover:border-gray-500 transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white font-medium">{item.title}</h3>
              <span className="text-xs text-gray-400">{item.count} items</span>
            </div>
            <div className="flex flex-wrap gap-1 mb-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-gray-300 text-xs px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}