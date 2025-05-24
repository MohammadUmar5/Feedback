import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const initialSteps = [
  {
    title: "Address mobile navigation issues",
    desc: "Create ticket for UX team to review mobile navigation feedback",
    status: "high",
    done: false,
  },
  {
    title: "Export feature planning",
    desc: "Discuss export feature priorities for next sprint",
    status: "medium",
    done: true,
  },
];

const statusColor = {
  high: "bg-red-800 text-red-200",
  medium: "bg-yellow-900 text-yellow-200",
  low: "bg-blue-900 text-blue-200",
};

export default function NextSteps() {
  const [steps, setSteps] = useState(initialSteps);
  const [newStep, setNewStep] = useState({
    title: "",
    desc: "",
    status: "low",
  });

  const toggleStepDone = (index) => {
    setSteps((prevSteps) =>
      prevSteps.map((step, i) =>
        i === index ? { ...step, done: !step.done } : step
      )
    );
  };

  const addStep = () => {
    if (newStep.title.trim() && newStep.desc.trim()) {
      setSteps([...steps, { ...newStep, done: false }]);
      setNewStep({ title: "", desc: "", status: "low" }); // Reset form
    }
  };

  return (
    <div className="w-160 p-4 border h-120 overflow-x-hidden overflow-y-auto border-zinc-600 hover:border-gray-400 transition rounded-xl">
      <h2 className="text-white text-lg font-semibold mb-4">Next Steps</h2>
      <div className="space-y-10 ml-2 mt-6 mr-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex justify-between items-start cursor-pointer"
            onClick={() => toggleStepDone(index)} // Toggle done state on click
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex-shrink-0 h-4 w-4 mt-1 rounded-full border-2 ${
                  step.done ? "border-cyan-400 bg-cyan-400" : "border-gray-400"
                }`}
              />
              <div>
                <h3
                  className={`${
                    step.done ? "line-through text-gray-400" : "text-white"
                  } break-words text-sm font-medium`}
                >
                  {step.title}
                </h3>
                <p
                  className={`${
                    step.done ? "line-through text-gray-500" : "break-words text-gray-500"
                  } text-sm`}
                >
                  {step.desc}
                </p>
              </div>
            </div>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded ${
                statusColor[step.status]
              }`}
            >
              {step.status}
            </span>
          </div>
        ))}
      </div>

      {/* Add New Step Popover */}
      <div className="mt-6">
        <Popover>
          <PopoverTrigger asChild>
            <button className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Add Step
            </button>
          </PopoverTrigger>
          <PopoverContent className="p-4 bg-zinc-800 border border-zinc-600 rounded-md shadow-lg">
            <h3 className="text-white text-sm font-medium mb-2">
              Add New Step
            </h3>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Title"
                value={newStep.title}
                onChange={(e) =>
                  setNewStep({ ...newStep, title: e.target.value })
                }
                className="p-2 rounded-md bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:border-gray-400"
              />
              <textarea
                placeholder="Description"
                value={newStep.desc}
                onChange={(e) =>
                  setNewStep({ ...newStep, desc: e.target.value })
                }
                className="p-2 rounded-md bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:border-gray-400"
              />
              <select
                value={newStep.status}
                onChange={(e) =>
                  setNewStep({ ...newStep, status: e.target.value })
                }
                className="p-2 rounded-md bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:border-gray-400"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <button
                onClick={addStep}
                className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Add Step
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
