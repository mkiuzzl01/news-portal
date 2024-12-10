"use client"
import NewsCard from "./NewsCard";
import SaidTabs from "./SaidTabs";

const LeadSection = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Main News Section */}
        <div className="w-full lg:w-3/4">
          <NewsCard />
        </div>
        
        {/* Sidebar Section */}
        <div className="w-full lg:w-1/4">
          <SaidTabs />
        </div>
      </div>
    </div>
  );
};

export default LeadSection;