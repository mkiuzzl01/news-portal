import React from "react";
import Advertisement from "@/util/Advertisement";
import OtherNews from "@/util/OtherNews";
import SideTabs from "@/util/SideTabs";
import TopNews from "@/util/TopNews";
import image_1 from "@public/asset/Economy/agriculture.jpg";
import image_2 from "@public/asset/Economy/business.jpg";
import image_3 from "@public/asset/Economy/formar.jpg";
import image_4 from "@public/asset/Economy/growth.jpg";
import banner from "@public/asset/banner.jpg";
import image from "@public/asset/bangladesh/environment.jpg";

const economy = [
  {
    id: 1,
    category: "Economy",
    title: "বাংলাদেশের রেমিটেন্সে নতুন রেকর্ড",
    description:
      "২০২৪ সালে প্রবাসীদের পাঠানো রেমিটেন্সে নতুন রেকর্ড সৃষ্টি হয়েছে।",
    date: "2024-12-06",
    news_type: "trending",
    published_time: "09:00",
    image: image_1,
  },
  {
    id: 2,
    category: "Economy",
    title: "মধ্যবিত্তের জন্য কর ছাড়ের ঘোষণা",
    description:
      "মধ্যবিত্ত শ্রেণীর জন্য নতুন কর ছাড়ের ঘোষণা অর্থনৈতিক প্রবৃদ্ধি বাড়ানোর লক্ষ্য নিয়েছে।",
    date: "2024-12-05",
    news_type: "normal",
    published_time: "11:00",
    image: image_2,
  },
  {
    id: 3,
    category: "Economy",
    title: "ক্ষুদ্র উদ্যোক্তাদের জন্য ঋণ সুবিধা বৃদ্ধি",
    description:
      "ক্ষুদ্র উদ্যোক্তাদের উন্নয়নে সরকার ঋণ সুবিধা বাড়ানোর নতুন প্রকল্প চালু করেছে।",
    date: "2024-12-04",
    news_type: "normal",
    published_time: "13:30",
    image: image_3,
  },
  {
    id: 4,
    category: "Economy",
    title: "শেয়ারবাজারে উন্নতির ধারা অব্যাহত",
    description:
      "বাংলাদেশের শেয়ারবাজারে নতুন বিনিয়োগকারীদের আগ্রহের কারণে উন্নতির ধারা অব্যাহত রয়েছে।",
    date: "2024-12-03",
    news_type: "normal",
    published_time: "15:00",
    image: image_4,
  },
  {
    id: 5,
    category: "Economy",
    title: "কৃষি খাতে উৎপাদন বৃদ্ধির সাফল্য",
    description:
      "নতুন প্রযুক্তি ও নীতিমালার ফলে কৃষি খাতে উৎপাদন বৃদ্ধির সাফল্য এসেছে।",
    date: "2024-12-02",
    news_type: "normal",
    published_time: "17:00",
    image: image_4,
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
          <TopNews data={economy} />
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
