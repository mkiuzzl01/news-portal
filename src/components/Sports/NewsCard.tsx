"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import cricket from "@public/asset/Sports/crikect.jpg";
import football from "@public/asset/Sports/football.jpg";
import hokeei from "@public/asset/Sports/hokei.jpg";

// Sample Sports Data
const sports = [
  {
    id: "01",
    category: "খেলাধুলা",
    title: "বিশ্বকাপে বাংলাদেশ জয়ী",
    description:
      "বিশ্বকাপে বাংলাদেশ তাদের প্রথম ম্যাচে দুর্দান্ত জয় পেয়েছে, যা ক্রিকেটপ্রেমীদের আনন্দিত করেছে।",
    date: "২০২৪-১২-০৪",
    news_type: "trending",
    published_time: "09:00",
    image: cricket,
  },
  {
    id: "02",
    category: "খেলাধুলা",
    title: "ফুটবলে নতুন রেকর্ড",
    description:
      "ফুটবল বিশ্বে নতুন রেকর্ড তৈরি হয়েছে, যেখানে একজন প্লেয়ার এক ম্যাচে ৫ গোল করেছেন।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "12:00",
    image: football,
  },
  {
    id: "03",
    category: "খেলাধুলা",
    title: "বাংলাদেশ বেসবল টিমের সাফল্য",
    description:
      "বাংলাদেশ দেশের খেলাধুলা সম্প্রসারণের প্রতি নতুন দৃষ্টিভঙ্গি প্রদান করেছে।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "14:30",
    image: hokeei,
  },
];

const NewsCard = () => {
  const trendingNews = sports.find((news) => news.news_type === "trending");

  const normalNews = sports.filter((news) => news.news_type === "normal");

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* Display Trending News (Spanning two columns) */}
        {trendingNews && (
          <div className="col-span-2 bg-gray-100 relative overflow-hidden">
            <div className="hover:scale-110 duration-500">
              <Image
                src={trendingNews.image}
                alt={trendingNews.title}
                placeholder="blur"
                objectFit="cover"
                className="w-full h-[400px]"
              />
            </div>
            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
              <h1 className="text-3xl font-bold text-white hover:text-yellow-400">
                <Link href={`view_details/${trendingNews.id}`}>
                  {trendingNews.title}
                </Link>
              </h1>
            </div>
          </div>
        )}

        {/* Display Remaining Normal News */}
        {normalNews.map((news) => (
          <div key={news.id} className="bg-white overflow-hidden">
            <Image
              src={news.image}
              alt={news.title}
              width={400}
              height={300}
              placeholder="blur"
              objectFit="cover"
              className="w-full h-[200px]"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold hover:text-blue-600">
                <Link href={`view_details/${news.id}`}>{news.title}</Link>
              </h2>
              <p className="text-sm text-gray-600 text-ellipsis">
                {news.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
