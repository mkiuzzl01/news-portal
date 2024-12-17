import React from "react";
import SideTabs from "@/util/SideTabs";
import NewsCard from "./__components/TopNews";
import OtherNews from "./__components/OtherNews";
import Advertisement from "@/util/Advertisement";

const Page = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="flex lg:flex-row flex-col gap-4">
        {/* Main Content - Scrollable */}
        <div className="w-full lg:w-3/4 lg:pr-4">
          <NewsCard />
          <Advertisement />
          <OtherNews />
        </div>
        <div className="w-full lg:w-1/4 lg:sticky lg:top-20 lg:self-start">
          <SideTabs />
        </div>
      </div>
    </div>
  );
};

export default Page;
