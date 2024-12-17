import Advertisement from "@/util/Advertisement";
import OtherNews from "@/util/OtherNews";
import TopNews from "@/util/TopNews";
import { Search } from "lucide-react";
import cyclone from "@public/asset/international/cyclone.jpg";
import entertainment from "@public/asset/international/entertainment.jpg";
import help from "@public/asset/international/help.jpg";
import unity from "@public/asset/international/unity.jpg";
import image from "@public/asset/bangladesh/environment.jpg";
import banner from "@public/asset/banner.jpg";
import SideTabs from "@/util/SideTabs";

const international = [
  {
    id: 1,
    category: "জলবায়ু",
    title: "জলবায়ু সংবেদনশীলতার উপর গুরুত্বারোপ",
    description:
      "জাতিসংঘের আন্তর্জাতিক আদালতে আফ্রিকান দেশগুলো প্রধান জলবায়ু ক্ষতির জন্য দেশগুলোকে আইনীভাবে দায়বদ্ধ করার উপর গুরুত্ব দেয়।",
    date: "2024-12-06",
    news_type: "trending",
    published_time: "09:00",
    image: cyclone,
  },
  {
    id: 2,
    category: "দুর্যোগ",
    title: "আবারো সুনামি আঘাত হানে শ্রীলঙ্কায়",
    description:
      "একটি বিধ্বংসী সুনামি শ্রীলঙ্কার উপকূলীয় অঞ্চলে আঘাত হানে, ২০০৪ সালের স্মৃতি ফিরিয়ে আনে উল্লেখযোগ্য প্রাণহানি এবং পরিবেশ ক্ষতিসহ।",
    date: "2024-12-06",
    news_type: "normal",
    published_time: "12:00",
    image: cyclone,
  },
  {
    id: 3,
    category: "মানবাধিকার",
    title: "সিরিয়ার আটক কেন্দ্রে নির্যাতনের প্রমাণ উন্মোচিত",
    description:
      "জাতিসংঘ সিরিয়ার ১০০টিরও বেশি আটক কেন্দ্রে নির্যাতনের বিস্তারিত প্রকাশ করে, যা বিশ্বজুড়ে নিন্দার সৃষ্টি করেছে।",
    date: "2024-12-06",
    news_type: "normal",
    published_time: "14:30",
    image: help,
  },
  {
    id: 4,
    category: "প্রব্রজন",
    title: "জাতিসংঘের আঞ্চলিক শরণার্থী সহায়তা",
    description:
      "ল্যাটিন আমেরিকায় শরণার্থীদের চাকরি এবং নিরাপত্তা সমস্যার সমাধানে জাতিসংঘ $১.৪ বিলিয়ন পরিকল্পনা ঘোষণা করেছে।",
    date: "2024-12-06",
    news_type: "normal",
    published_time: "16:00",
    image: unity,
  },
  {
    id: 5,
    category: "সংস্কৃতি",
    title: "নতুন ইউনেস্কো ঐতিহ্য স্বীকৃতি",
    description:
      "ইউনেস্কো রুয়ান্ডার ইন্তোর নৃত্য এবং জাপানের সাকে তৈরি করার মতো ঐতিহ্যবাহী সংস্কৃতিকে বৈশ্বিক সম্পদ হিসেবে স্বীকৃতি প্রদান করেছে।",
    date: "2024-12-06",
    news_type: "normal",
    published_time: "18:45",
    image: entertainment,
  },
];

const othersNews = [
  {
    id: 1,
    category: "Bangladesh",
    title: "বাংলাদেশে নতুন মেট্রোরেল উদ্বোধন",
    description: "ঢাকা শহরে প্রথমবারের মতো মেট্রোরেল সেবা চালু করা হয়েছে।",
    date: "2024-12-05",
    image: image,
  },
  {
    id: 2,
    category: "International",
    title: "জাতিসংঘে শান্তি রক্ষায় বাংলাদেশের প্রশংসা",
    description: "জাতিসংঘ মিশনে বাংলাদেশি শান্তিরক্ষীদের প্রশংসা করেছে।",
    date: "2024-12-04",
    image: image,
  },
  {
    id: 3,
    category: "Politics",
    title: "জাতীয় নির্বাচনের সময়সূচি প্রকাশ",
    description:
      "২০২৫ সালের জাতীয় নির্বাচন নিয়ে আনুষ্ঠানিক ঘোষণা দেওয়া হয়েছে।",
    date: "2024-12-03",
    image: image,
  },
  {
    id: 4,
    category: "Economy",
    title: "রেমিটেন্স প্রবাহে নতুন রেকর্ড",
    description:
      "বাংলাদেশে প্রবাসীদের পাঠানো রেমিটেন্সে নতুন উচ্চতা অর্জিত হয়েছে।",
    date: "2024-12-02",
    image: image,
  },
  {
    id: 5,
    category: "Technology",
    title: "৫জি ইন্টারনেট সেবা চালু",
    description: "বাংলাদেশে প্রথমবারের মতো ৫জি ইন্টারনেট সেবা চালু হয়েছে।",
    date: "2024-12-01",
    image: image,
  },
  {
    id: 6,
    category: "Sports",
    title: "বিশ্বকাপে বাংলাদেশের ঐতিহাসিক জয়",
    description:
      "ক্রিকেট বিশ্বকাপে শক্তিশালী দলের বিরুদ্ধে বাংলাদেশের চমকপ্রদ জয়।",
    date: "2024-11-30",
    image: image,
  },
];

const Page = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="flex lg:flex-row flex-col gap-4">
        <div className="w-full lg:w-3/4 lg:pr-4">
          <TopNews data={international} />
          <Advertisement banner={banner} />
          <OtherNews relatedNews={othersNews} />
        </div>
        <div className="w-full lg:w-1/4 lg:sticky lg:top-20 lg:self-start">
          <SideTabs />
        </div>
      </div>
    </div>
  );
};

export default Page;
