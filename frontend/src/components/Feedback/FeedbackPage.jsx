import React from "react";
import Fsidebar from "../Fsidebar/Fsidebar";
import FeedbackGroup from "./FeedbackGroup";
import FeedbackCard from "./FeedbackCard";
import "../../styles/feedbackpage.css";

function FeedbackPage() {
  return (
    <div className="feedbackContent flex">
      <Fsidebar />
      <div className="dataflex pl-0 sm:pl-0 p-6 md:p-6 sm:p-6 w-95 md:w-full sm:w-full ml-0 md:ml-66 sm:ml-30">
        <FeedbackGroup title="Recent Feedback" />
        <div className="feedbackCard md:mr-0 sm:mr-10">
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
    </div>
  );
}

export default FeedbackPage;