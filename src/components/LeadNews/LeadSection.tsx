import NewsCard from "./NewsCard";
import SaidTabs from "./SaidTabs";

const LeadSection = () => {
  return (
    <div className="container mx-auto py-2 flex flex-col lg:flex-row justify-between gap-4">
      {/* Main News Section */}
      <div className="lg:w-4/5 w-full flex flex-col">
        <NewsCard />
      </div>
      {/* Sidebar Section */}
      <div className="lg:w-1/5 w-full lg:mt-0 mt-4">
        <SaidTabs />
      </div>
    </div>
  );
};

export default LeadSection;
