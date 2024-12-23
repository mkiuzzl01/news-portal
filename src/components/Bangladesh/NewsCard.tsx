"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import vote from "@public/asset/politics/vote.jpg";
import parliament from "@public/asset/politics/perliment.jpg";
import team from "@public/asset/politics/team.jpg";
import { ChevronsRight } from "lucide-react";

const politicsData = [
  {
    id: "01",
    category: "রাজনীতি",
    title: "সংসদে নতুন কর সংস্কার বিল পাস",
    description:
      "সরকার সংসদে নতুন কর সংস্কার বিল পাস করেছে, যা রাজস্ৱ বৃদ্ধির প্রতিশ্রুতি দিচ্ছে।",
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
    title: "স্থানীয় সরকার নির্বাচনের তারিখ ঘোষণা",
    description:
      "নির্বাচন কমিশন স্থানীয় সরকার নির্বাচনের তারিখ ঘোষণা করেছে, যা আগামী মাসে অনুষ্ঠিত হবে।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "14:30",
    image: vote,
  },
  {
    id: "05",
    category: "রাজনীতি",
    title: "স্থানীয় সরকার নির্বাচনের তারিখ ঘোষণা",
    description:
      "নির্বাচন কমিশন স্থানীয় সরকার নির্বাচনের তারিখ ঘোষণা করেছে, যা আগামী মাসে অনুষ্ঠিত হবে।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "14:30",
    image: vote,
  },
];

const NewsCard = () => {
  const trendingNews = politicsData.find(
    (news) => news.news_type === "trending"
  );

  const normalNews = politicsData.filter((news) => news.news_type === "normal");

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold border-s-4 border-blue-500 ps-4 my-4">
          সমগ্র জনপথ{" "}
        </h1>
        <p className="text-blue-600 hover:text-blue-700 flex items-center text-xl">
          <Link href={`/national`}>আরো দেখুন </Link>
          <span>
            {" "}
            <ChevronsRight size={30} />{" "}
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white overflow-hidden">
          {trendingNews && (
            <div>
              <div className="overflow-hidden">
                <Image
                  src={trendingNews.image}
                  alt={trendingNews.title}
                  width={1200}
                  height={600}
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">
                  <Link href={`view_details`} className="text-2xl lg:text-4xl">
                    {trendingNews.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-3 text-sm">
                  {trendingNews.description}
                </p>
                <p className="text-xs text-gray-500">
                  {trendingNews.date} • {trendingNews.published_time}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4  overflow-auto p-4">
          {normalNews.map((news, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden flex justify-between p-2"
            >
              <div className="flex-1 pe-1">
                <h2 className="text-md font-bold hover:text-blue-600">
                  <Link href={`view_details`} aria-label={news.title}>
                    {news.title}
                  </Link>
                </h2>
                <p className="text-sm overflow-hidden">{news?.description}</p>
                <p className="text-blue-700 text-sm pt-2">
                  <Link href="/view_details">আরো পড়ুন </Link>
                </p>
              </div>
              <div className="w-1/2 h-auto">
                <Image
                  src={news.image}
                  alt={news.title}
                  className="object-cover w-full h-[150px] hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
