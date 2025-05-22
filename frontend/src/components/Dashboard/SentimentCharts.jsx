import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const sentimentData = [
  { name: "Positive", value: 45 },
  { name: "Neutral", value: 25 },
  { name: "Negative", value: 30 },
];

const COLORS = ["#10b981", "#fbbf24", "#ef4444"]; // green, yellow, red

const sourceData = [
  { source: "Reddit", feedback: 35 },
  { source: "Twitter", feedback: 20 },
  { source: "In-app", feedback: 40 },
  { source: "Support Tickets", feedback: 15 },
];

export default function SentimentCharts() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-6 p-6 bg-transparent border border-zinc-600 hover:border-gray-400 transition  rounded-xl text-white">
      {/* Sentiment Overview */}
      <div className="w-1/2 bg-transparent hover:border-gray-400 transition border border-zinc-600 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Sentiment Overview</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={sentimentData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {sentimentData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Source Breakdown */}
      <div className="w-1/2 bg-transparent border border-zinc-600 hover:border-gray-400 transition rounded-xl p-4">
        <h3 className="text-lg font-semibold mb-4">Source Breakdown</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart className="text-sm" data={sourceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="source" stroke="#ccc" />
            <YAxis tick={false} stroke="#ccc" />
            <Legend />
            <Bar
              dataKey="feedback"
              fill="#51A2FF"
              isAnimationActive={false} // Disable animation
              radius={[4, 4, 0, 0]} // Optional: Add rounded corners to bars
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}