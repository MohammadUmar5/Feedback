import { Card, CardContent } from "@/components/ui/card";

const insights = [
	{
		platform: "G",
		title: "Pricing Concerns",
		detail: "Multiple users mentioned our enterprise pricing is too high compared to competitors.",
		color: "border-red-500",
	},
	{
		platform: "Tf",
		title: "Dashboard UX Praise",
		detail: "Users love the new dashboard design, specifically calling out the insights view as helpful.",
		color: "border-green-500",
	},
];

function InsightCard({ title, detail, platform, color }) {
	return (
		<Card className="border border-[#2a2a2a] bg-white h-30" >
			<CardContent className="px-4 py-0">
				<div className="text-sm text-muted-foreground font-semibold">
					{platform}
				</div>
				<div className="font-medium">{title}</div>
				<p className="text-sm text-gray-600">{detail}</p>
			</CardContent>
		</Card>
	);
}

export default function TopInsights() {
    return (
        <div className="py-10 px-7 max-w-170 border border-[#2a2a2a] rounded-2xl">
            <div className="flex justify-between items-center">
                <h2 className="text-lg text-white font-semibold mb-5">Top Insights</h2>
                <button className="text-sm text-blue-600 hover:underline">
                    View All
                </button>
            </div>
            <div className="space-y-2">
                {insights.map((insight, idx) => (
                    <InsightCard key={idx} {...insight} />
                ))}
            </div>
        </div>
    );
}
