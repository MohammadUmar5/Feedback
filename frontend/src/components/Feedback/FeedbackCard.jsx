import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PinIcon, TagIcon, TicketIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function FeedbackCard({ title, pinned, stats, sentiment, feedbacks }) {
  return (
    <div className=" ml-6 sm:ml-3 md:ml-3 bg-[#111215] rounded-2xl border border-[#2a2a2a] p-4 shadow-md w-100 sm:w-80 md:w-80">
      <div className="flex items-start justify-between">
        <h2 className="text-white text-lg font-semibold">{title}</h2>
        {pinned && (
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white text-xs "
          >
            <PinIcon className="w-3 h-3 mr-1" />
            <span className="hidden sm:inline">Pinned</span>
          </Badge>
        )}
      </div>

      <div className="mt-2 text-sm text-gray-400">
        <span>{stats.total} feedbacks</span>
        <div className="flex gap-2 text-xs mt-1">
          <span>🧠 {stats.idea}</span>
          <span>🐞 {stats.bug}</span>
          <span>💬 {stats.comment}</span>
        </div>
      </div>

      {/* Sentiment Bar */}

      {/* Feedback List */}
      <div className="mt-3  space-y-2 text-sm">
        {feedbacks.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1c] p-2 rounded-md h-auto sm:h-auto md:h-auto md:text-xs sm:text-sm text-xs"
          >
            <div className="flex justify-between text-gray-300">
              <span className="font-small sm:font-medium md:font-medium">
                {item.user}
              </span>
              <Badge
                variant="outline"
                className={cn("text-xs sm:text-xs md:text-xs ", {
                  "text-red-400": item.source === "Reddit",
                  "text-blue-400": item.source === "Twitter",
                  "text-purple-400": item.source === "In-App",
                  "text-white": item.source === "Support",
                })}
              >
                {item.source}
              </Badge>
            </div>
            <p className="text-gray-300 mt-1">{item.message}</p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-6 ml-5 sm:ml-5 md:ml-5">
        <div className="flex gap-2">
          <Button className="w-20 sm:w-10 md:w-auto bg-transparent border border-zinc-700 " size="sm">
            <TagIcon className="w-4 h-4 mr-2 sm:mr-1 md:mr-2" /> Tag
          </Button>
          <Button className="w-20 sm:w-10 md:w-auto bg-transparent border border-zinc-700" size="sm">
            <PinIcon className="w-4 h-4 mr-2 sm:mr-1 md:mr-2" /> Pin
          </Button>
          <Button className="w-20 sm:w-10 md:w-auto bg-transparent border border-zinc-700" size="sm">
            <TicketIcon className="w-4 h-4 mr-2 sm:mr-1 md:mr-2" /> Jira
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className=" mt-2 w-65 sm:w-58 md:w-61 bg-transparent border border-zinc-700 text-gray-400"
        >
          Ignore
        </Button>
      </div>
    </div>
  );
}

export default FeedbackCard;
