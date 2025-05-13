import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Fsidebar from "./components/Fsidebar/Fsidebar";
import FeedbackGroup from "./components/Feedback/FeedbackGroup";
import FeedbackCard from "./components/Feedback/FeedbackCard";

function App() {
  const [activeView, setActiveView] = useState("default"); // State to track the active view

  return (
    <div className="flex">
      {activeView === "feedback" ? (
        <Fsidebar onArrowClick={() => setActiveView("default")} />
      ) : (
        <Sidebar onFeedbackClick={() => setActiveView("feedback")} />
      )}
      {activeView === "feedback" && (
        <div className="dataflex p-6">
          <FeedbackGroup title="Recent Feedback" />
          <div className="feedbackCard">
            <FeedbackCard
              title="Users can't find filters on dashboard"
              pinned={true}
              stats={{ total: 3, idea: 1, bug: 1, comment: 1 }}
              sentiment="negative"
              feedbacks={[
                {
                  user: "user123",
                  source: "Reddit",
                  message:
                    "I can't find the filters on the dashboard. It's very frustrating!",
                },
                {
                  user: "jane_doe",
                  source: "Twitter",
                  message:
                    "The dashboard filters are hidden behind three menus.",
                },
                {
                  user: "frustrated_user",
                  source: "Support",
                  message: "Where are the filters? I spent 10 minutes looking.",
                },
              ]}
            />
                      <FeedbackCard
              title="Users can't find filters on dashboard"
              pinned={true}
              stats={{ total: 3, idea: 1, bug: 1, comment: 1 }}
              sentiment="negative"
              feedbacks={[
                {
                  user: "user123",
                  source: "Reddit",
                  message:
                    "I can't find the filters on the dashboard. It's very frustrating!",
                },
                {
                  user: "jane_doe",
                  source: "Twitter",
                  message:
                    "The dashboard filters are hidden behind three menus.",
                },
                {
                  user: "frustrated_user",
                  source: "Support",
                  message: "Where are the filters? I spent 10 minutes looking.",
                },
              ]}
            />
            <FeedbackCard
              title="Users can't find filters on dashboard"
              pinned={true}
              stats={{ total: 3, idea: 1, bug: 1, comment: 1 }}
              sentiment="negative"
              feedbacks={[
                {
                  user: "user123",
                  source: "Reddit",
                  message:
                    "I can't find the filters on the dashboard. It's very frustrating!",
                },
                {
                  user: "jane_doe",
                  source: "Twitter",
                  message:
                    "The dashboard filters are hidden behind three menus.",
                },
                {
                  user: "frustrated_user",
                  source: "Support",
                  message: "Where are the filters? I spent 10 minutes looking.",
                },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
