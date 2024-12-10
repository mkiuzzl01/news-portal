import React from "react";
import TrendingCard from "./TrendingCard";
import coding from "@public/asset/Technology/coding.jpg";
import industry from "@public/asset/Technology/industry.jpg";
import monitoring from "@public/asset/Technology/monitoring.jpg";
import SectionHeader from "./SectionHeader";
import SaidTabs from "./SaidTabs";

const technology_news = [
  {
    id: 1,
    category: "Technology",
    title: "বাংলাদেশে প্রযুক্তির অগ্রগতি",
    description:
      "বাংলাদেশে নতুন প্রযুক্তি উদ্ভাবন এবং ব্যবহারের ক্ষেত্রে উল্লেখযোগ্য অগ্রগতি হয়েছে।",
    date: "2024-12-03",
    news_type: "trending",
    published_time: "08:00",
    image: coding,
  },
  {
    id: 2,
    category: "Technology",
    title: "বাংলাদেশে ৫জি প্রযুক্তির উদ্বোধন",
    description:
      "বাংলাদেশে ৫জি নেটওয়ার্ক চালু হয়েছে, যা দ্রুত ইন্টারনেট এবং নতুন প্রযুক্তিগত উদ্ভাবনকে সমর্থন করবে।",
    date: "2024-12-02",
    news_type: "normal",
    published_time: "10:30",
    image: monitoring,
  },
  {
    id: 3,
    category: "Technology",
    title: "বাংলাদেশে ৫জি প্রযুক্তির উদ্বোধন",
    description:
      "বাংলাদেশে ৫জি নেটওয়ার্ক চালু হয়েছে, যা দ্রুত ইন্টারনেট এবং নতুন প্রযুক্তিগত উদ্ভাবনকে সমর্থন করবে।",
    date: "2024-12-02",
    news_type: "normal",
    published_time: "10:30",
    image: industry,
  },
];

const Trending = () => {
  return (
    <div className="border-b-2 py-4">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="w-full lg:w-4/5 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Trending News Section */}
          <div>
            <SectionHeader title="সম্বার" />
            <div
              className="flex flex-col gap-6 w-full max-h-[400px]   overflow-y-auto 
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <TrendingCard data={technology_news} />
            </div>
          </div>

          {/* Normal News Section */}
          <div>
            <SectionHeader title="গুরুত্বপূর্ণ" />
            <div
              className="flex flex-col gap-6 w-full max-h-[400px] overflow-y-auto 
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <TrendingCard data={technology_news} />
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="lg:w-1/5 w-full mt-4 lg:mt-0">
          <SaidTabs />
        </div>
      </div>
    </div>
  );
};

export default Trending;
