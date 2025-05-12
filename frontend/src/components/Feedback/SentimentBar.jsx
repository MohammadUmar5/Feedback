import React from "react";

export default function SentimentBar({ sentiment }) {
  const sentimentColors = {
    positive: "bg-green-500",
    neutral: "bg-yellow-500",
    negative: "bg-red-500",
  };

  return (
    <div className="mt-3">
      <div
        className={`w-full h-2 rounded-full ${sentimentColors[sentiment]}`}
      />
    </div>
  );
}
