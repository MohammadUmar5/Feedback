import React from "react";
import { FilterSection } from "./FilterSection";
import FilterPill from "./FilterPill";
import { FaRedditAlien, FaTwitter, FaBug, FaLightbulb, FaCommentAlt, FaHeart } from "react-icons/fa";
import { HiOutlineSupport } from "react-icons/hi";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { MdOutlineSentimentSatisfiedAlt, MdOutlineSentimentDissatisfied, MdOutlineSentimentNeutral } from "react-icons/md";
import { PiGaugeBold } from "react-icons/pi";

export default function FiltersPanel() {
return (
    <div
        className="ml-1.5 space-y-6 h-130 overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg"
   
    >
        <style>
            {`
                /* For Webkit browsers */
                .space-y-6::-webkit-scrollbar {
                    width: 9px;
                    margin-left: 4px; /* Adds a left margin */
                   
                }
                .space-y-6::-webkit-scrollbar-thumb {
                    border-radius: 4px;
                }
                .space-y-6::-webkit-scrollbar-track {
                }
            `}
        </style>
        <FilterSection title="Source">
            <div className="flex flex-wrap gap-1 h-16">
                <FilterPill icon={<FaRedditAlien size={12} />} label="Reddit" className="text-xs" />
                <FilterPill icon={<FaTwitter size={12} />} label="Twitter" className="text-xs" />
                <FilterPill icon={<BsFillChatLeftDotsFill size={12} />} label="In-App" className="text-xs" />
                <FilterPill icon={<HiOutlineSupport size={12} />} label="Support" className="text-xs" />
            </div>
        </FilterSection>

        <FilterSection title="Type">
            <div className="flex flex-wrap gap-1">
                <FilterPill icon={<FaBug size={12} />} label="Bug" className="text-xs" />
                <FilterPill icon={<FaLightbulb size={12} />} label="Feature" className="text-xs" />
                <FilterPill icon={<FaCommentAlt size={12} />} label="Complaint" className="text-xs" />
                <FilterPill icon={<FaHeart size={12} />} label="Praise" className="text-xs" />
            </div>
        </FilterSection>

        <FilterSection title="Sentiment">
            <div className="flex flex-wrap gap-1">
                <FilterPill icon={<MdOutlineSentimentSatisfiedAlt size={12} />} label="Positive" color="green" className="text-xs" />
                <FilterPill icon={<MdOutlineSentimentNeutral size={12} />} label="Neutral" color="yellow" className="text-xs" />
                <FilterPill icon={<MdOutlineSentimentDissatisfied size={12} />} label="Negative" color="red" className="text-xs" />
            </div>
        </FilterSection>

        <FilterSection title="Confidence">
            <div className="flex flex-wrap gap-1">
                <FilterPill icon={<PiGaugeBold size={12} />} label="High" color="blue" className="text-xs" />
                <FilterPill icon={<PiGaugeBold size={12} />} label="Medium" color="gray" className="text-xs" />
                <FilterPill icon={<PiGaugeBold size={12} />} label="Low" color="slate" className="text-xs" />
            </div>
        </FilterSection>
    </div>
);
}
