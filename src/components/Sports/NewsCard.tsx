"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import cricket from "@public/asset/Sports/crikect.jpg";
import football from "@public/asset/Sports/football.jpg";
import hokeei from "@public/asset/Sports/hokei.jpg";

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
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Trending News */}
        {trendingNews && (
          <div className="col-span-1 sm:col-span-2">
            <Link href="/view_details" className="block group">
              <div className="relative aspect-[3/2] overflow-hidden">
                <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={trendingNews.image}
                    alt={trendingNews.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
                    priority
                  />
                </div>
                <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {trendingNews.title}
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Normal News */}
        {normalNews.map((news) => (
          <div key={news.id} className="col-span-1">
            <Link href="/view_details" className="block group">
              <article className="bg-white overflow-hidden">
                <div className="flex flex-row sm:flex-row lg:flex-col h-full">
                  {/* Image container */}
                  <div className="w-1/3 sm:w-1/2 lg:w-full relative">
                    <div className="overflow-hidden">
                      <div className="relative aspect-[3/2]">
                        <Image
                          src={news.image}
                          alt={news.title}
                          className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                          fill
                          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content container */}
                  <div className="w-2/3 sm:w-1/2 lg:w-full px-2">
                    <div className="space-y-2"> 
                      <h2 className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {news.title}
                      </h2>
                      <p className="text-sm text-gray-600 line-clamp-2 sm:line-clamp-3 lg:line-clamp-4">
                        {news.description}
                      </p>
                     
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
