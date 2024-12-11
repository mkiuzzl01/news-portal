"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import cyclone from "@public/asset/international/cyclone.jpg";
import entertainment from "@public/asset/international/entertainment.jpg";
import help from "@public/asset/international/help.jpg";
import unity from "@public/asset/international/unity.jpg";
import { ChevronsRight } from "lucide-react";

const international_news = [
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

const NewsCard = () => {
  const trendingNews = international_news.find(
    (news) => news.news_type === "trending"
  );

  const normalNews = international_news.filter(
    (news) => news.news_type === "normal"
  );

  return (
    <div className="container mx-auto p-4 py-4">
      <div className="border-t-2 flex justify-between items-center">
        <h1 className="text-4xl font-bold my-4 border-s-4 ps-2 border-blue-500 ">
          আন্তর্জাতিক
        </h1>
        <Link href="/allNews">
          <p className="text-blue-600 hover:text-blue-700 flex items-center text-xl">
            আরো দেখুন{" "}
            <span>
              {" "}
              <ChevronsRight size={30} />{" "}
            </span>
          </p>
        </Link>
      </div>

      {/* Main News Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trending News */}
        {trendingNews && (
          <div className="bg-white overflow-hidden">
            <div className="h-64 lg:h-96 overflow-hidden">
              <Image
                src={trendingNews.image}
                alt={trendingNews.title}
                width={1200}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="pt-4">
              <h2 className="text-2xl font-bold mb-3 hover:text-blue-600">
                <Link href={`view_details/${trendingNews.id}`}>
                  {trendingNews.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                {trendingNews.description.slice(0, 150)}...
              </p>
              <p className="text-xs text-gray-500">
                {trendingNews.date} • {trendingNews.published_time}
              </p>
            </div>
          </div>
        )}

        {/* Normal News Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {normalNews.map((news) => (
            <div
              key={news.id}
              className="bg-white overflow-hidden flex flex-col"
            >
              <div className="h-40 lg:h-48 overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="pt-4 flex flex-col justify-between">
                <h3 className="text-lg font-semibold mb-2 hover:text-blue-600">
                  <Link href={`view_details/${news.id}`}>{news.title}</Link>
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {news.description.slice(0, 100)}...
                </p>
                <p className="text-xs text-gray-500">
                  {news.date} • {news.published_time}
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
