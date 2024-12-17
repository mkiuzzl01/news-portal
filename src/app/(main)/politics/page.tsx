import React from "react";
import Advertisement from "@/util/Advertisement";
import SideTabs from "@/util/SideTabs";
import vote from "@public/asset/politics/vote.jpg";
import parliament from "@public/asset/politics/perliment.jpg";
import team from "@public/asset/politics/team.jpg";
import banner from "@public/asset/banner.jpg";
import TopNews from "@/util/TopNews";
import OtherNews from "@/util/OtherNews";


const politics = [
  {
    id: "01",
    category: "রাজনীতি",
    title: "সংসদে নতুন কর সংস্কার বিল পাস",
    description:
      "সরকার সংসদে নতুন কর সংস্কার বিল পাস করেছে, যা রাজস্ব বৃদ্ধির প্রতিশ্রুতি দিচ্ছে।",
    date: "২০২৪-১২-০৪",
    news_type: "trending",
    published_time: "09:00",
    image: parliament,
  },
  {
    id: "02",
    category: "রাজনীতি",
    title: "বাজেট বরাদ্দ নিয়ে সমালোচনা",
    description:
      "বিরোধী দলের নেতা বাজেটকে সমালোচনা করেছেন, দাবি করেছেন এটি মধ্যবিত্তের উদ্বেগগুলিকে সমাধান করতে ব্যর্থ হয়েছে।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "12:00",
    image: team,
  },
  {
    id: "03",
    category: "রাজনীতি",
    title: "স্থানীয় সরকার নির্বাচনের তারিখ ঘোষণা",
    description:
      "নির্বাচন কমিশন স্থানীয় সরকার নির্বাচনের তারিখ ঘোষণা করেছে, যা আগামী মাসে অনুষ্ঠিত হবে।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "14:30",
    image: vote,
  },
  {
    id: "04",
    category: "রাজনীতি",
    title: "সাংসদদের বেতন বৃদ্ধির প্রস্তাব",
    description:
      "সরকার সাংসদদের বেতন বাড়ানোর একটি প্রস্তাব বিবেচনা করছে, যা জনগণের মধ্যে মিশ্র প্রতিক্রিয়া সৃষ্টি করেছে।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "16:00",
    image: team,
  },
  {
    id: "05",
    category: "রাজনীতি",
    title: "রাজনৈতিক দলগুলির মধ্যে ঐক্য",
    description:
      "রাজনৈতিক দলগুলির মধ্যে ঐক্য আলোচনা শুরু হয়েছে, যা দেশকে সামনে এগিয়ে নিতে সহায়ক হতে পারে বলে আশা করা হচ্ছে।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "18:45",
    image: team,
  },
];

const Page = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="flex lg:flex-row flex-col gap-4">
        {/* Main Content - Scrollable */}
        <div className="w-full lg:w-3/4 lg:pr-4">
          <TopNews data={politics} />
          <Advertisement banner={banner} />
          <OtherNews relatedNews={politics} />
        </div>
        <div className="w-full lg:w-1/4 lg:sticky lg:top-20 lg:self-start">
          <SideTabs />
        </div>
      </div>
    </div>
  );
};

export default Page;
