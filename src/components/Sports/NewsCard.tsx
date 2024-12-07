"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import cricket from "@public/asset/Sports/crikect.jpg";
import football from "@public/asset/Sports/football.jpg";
import hokeei from "@public/asset/Sports/hokei.jpg";
import sport from "@public/asset/Sports/sports.jpg";

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
      "বাংলাদেশ বেসবল টিম আন্তর্জাতিক টুর্নামেন্টে সাফল্য অর্জন করেছে, যা দেশের খেলাধুলা সম্প্রসারণের প্রতি নতুন দৃষ্টিভঙ্গি প্রদান করেছে।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "14:30",
    image: hokeei,
  },
  {
    id: "04",
    category: "খেলাধুলা",
    title: "টেনিস বিশ্বকাপে শিরোপা জয়",
    description:
      "বিশ্বকাপে একটি নতুন ইতিহাস সৃষ্টি হয়েছে, যেখানে একজন টেনিস খেলোয়াড় প্রথমবার শিরোপা জয়ী হন।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "16:00",
    image: sport,
  },
  {
    id: "05",
    category: "খেলাধুলা",
    title: "অলিম্পিকে বাংলাদেশের পদক",
    description:
      "বাংলাদেশ অলিম্পিকে একটি রৌপ্য পদক অর্জন করেছে, যা দেশের খেলাধুলার ইতিহাসে একটি মাইলফলক।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "18:45",
    image: sport,
  },
];

const NewsCard = () => {
  const trendingNews = sports.find((news) => news.news_type === "trending");

  const normalNews = sports.filter((news) => news.news_type === "normal");

  return (
    <div className="container mx-auto">
      <div className="border-l-4 border-blue-500">
        <h1 className="text-4xl font-bold my-4 pl-2">খেলাধুলা</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Display Trending News (Spanning two columns) */}
        {trendingNews && (
          <div className="col-span-4 bg-gray-100 relative overflow-hidden">
            <Image
              src={trendingNews.image}
              alt={trendingNews.title}
              objectFit="cover"
              className="w-full h-[500px]"
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

        {/* Display Remaining Normal News */}
        {normalNews.map((news) => (
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
