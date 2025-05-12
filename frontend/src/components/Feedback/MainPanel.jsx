import React from "react";
import FeedbackGroup from "./FeedbackGroup";

// Sample feedback data
const feedbackList = [
  {
    id: 1,
    title: "Bug in the app",
    content: "The app crashes when I try to submit feedback.",
    sentiment: "negative",
  },
  {
    id: 2,
    title: "Feature Request",
    content: "It would be great if we could filter the feedback.",
    sentiment: "neutral",
  },
];

export default function MainPanel() {
  return (
    <div className="p-6">
      <FeedbackGroup title="Recent Feedback" feedbackList={feedbackList} />
    </div>
  );
}
