// timeline.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function Timeline() {
  const data = [
    { date: '4/22', feedback: 0 },
    { date: '4/27', feedback: 0 },
    { date: '5/2', feedback: 0 },
    { date: '5/7', feedback: 0 },
    { date: '5/12', feedback: 0 },
    { date: '5/17', feedback: 0 },
  ];

  return (
    <div className="bg-transparent text-white rounded-xl p-4 border border-zinc-600 hover:border-gray-400 transition h-40 w-full">
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-lg font-semibold">Feedback Timeline</h2>
        <span className="text-sm text-gray-400">Past 30 days</span>
      </div>
      <div className="h-25">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" stroke="#888888" />
            <YAxis hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="feedback"
              stroke="#8884d8"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Timeline;
