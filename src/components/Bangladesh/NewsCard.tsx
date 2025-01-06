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
      "সরকার সংসদে নতুন কর সংস্কার বিল পাস করেছে, যা রাজস্ৱ বৃদ্ধির প্রতিশ্রুতি দিচ্ছে। সরকার সংসদে নতুন কর সংস্কার বিল পাস করেছে, যা রাজস্ৱ বৃদ্ধির প্রতিশ্রুতি দিচ্ছে। সরকার সংসদে নতুন কর সংস্কার বিল পাস করেছে, যা রাজস্ৱ বৃদ্ধির প্রতিশ্রুতি দিচ্ছে।",
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
        {trendingNews && (
          <div className="bg-white overflow-hidden relative">
            <div className="relative w-full aspect-[2/1]">
              <Image
                src={trendingNews.image}
                alt={trendingNews.title}
                placeholder="blur"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">
                <Link href={`/view_details`}>{trendingNews.title}</Link>
              </h2>
              <p className="text-gray-600 mb-3">{trendingNews.description}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <p>
                  {trendingNews.date} • {trendingNews.published_time}
                </p>
                <p className="text-blue-600 text-sm">
                  <Link href={`/view_details`}>আরো পড়ুন</Link>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Normal News Section */}
        <div className="grid grid-cols-1 gap-4 lg:border-s border-black lg:ps-4">
          {normalNews.map((news) => (
            <div
              key={news.id}
              className="bg-white flex overflow-hidden flex-row-reverse"
            >
              <div className="w-2/5 relative h-full aspect-[2/1] overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  placeholder="blur"
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex-1 pe-1">
                <h2 className="text-lg font-bold hover:text-blue-600">
                  <Link href={`/view_details`}>{news.title}</Link>
                </h2>
                <p className="text-sm text-gray-600 touch-pan-right">
                  {news.description}
                </p>
                <p className="text-blue-600 text-sm">
                  <Link href={`/view_details`}>আরো পড়ুন</Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
