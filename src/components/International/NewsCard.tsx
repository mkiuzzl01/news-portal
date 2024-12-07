"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import cyclone from "@public/asset/international/cyclone.jpg";
import entertainment from "@public/asset/international/entertainment.jpg";
import help from "@public/asset/international/help.jpg";
import unity from "@public/asset/international/unity.jpg";

const international_news = [
  {
    id: 1,
    category: "জলবায়ু",
    title: "আফ্রিকান ইউনিয়নের জলবায়ু সংবেদনশীলতার উপর গুরুত্বারোপ",
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
    title: "জাতিসংঘের আঞ্চলিক শরণার্থী সহায়তা পরিকল্পনা চালু",
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
    <div className="container mx-auto">
      <div className="border-s-4 border-green-500">
        <h1 className="text-4xl font-bold my-4 ps-2">আন্তর্জাতিক</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {normalNews.slice(0, 1).map((news) => (
          <div key={news.id} className="bg-white overflow-hidden">
            <Image
              src={news.image}
              alt={news.title}
              width={400}
              height={300}
              objectFit="cover"
              className="w-full h-[200px]"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold hover:text-blue-600">
                <Link href={`view_details/${news.id}`}>{news.title}</Link>
              </h2>
              <p className="text-sm text-gray-600">{news.description}</p>
              <p className="text-xs text-gray-400">{news.published_time}</p>
            </div>
          </div>
        ))}

        {trendingNews && (
          <div className="col-span-2 bg-gray-100 relative overflow-hidden">
            <Image
              src={trendingNews.image}
              alt={trendingNews.title}
              width={900}
              height={500}
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
              <h1 className="text-3xl font-bold text-white hover:text-yellow-400">
                <Link href={`view_details/${trendingNews.id}`}>
                  {trendingNews.title}
                </Link>
              </h1>
              <p className="text-sm text-white">
                {trendingNews.published_time}
              </p>
            </div>
          </div>
        )}

        {normalNews.slice(1).map((news) => (
          <div key={news.id} className="bg-white overflow-hidden">
            <Image
              src={news.image}
              alt={news.title}
              width={400}
              height={300}
              objectFit="cover"
              className="w-full h-[200px]"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold hover:text-blue-600">
                <Link href={`view_details/${news.id}`}>{news.title}</Link>
              </h2>
              <p className="text-sm text-gray-600">{news.description}</p>
              <p className="text-xs text-gray-400">{news.published_time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;