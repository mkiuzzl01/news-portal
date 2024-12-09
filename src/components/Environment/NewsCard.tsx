"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import image_1 from "@public/asset/environment/forest-2.jpg";
import image_2 from "@public/asset/environment/forest-3.jpg";
import image_3 from "@public/asset/environment/forest-3.jpg";
import image_4 from "@public/asset/environment/forest-5.jpg";

// Sample Environment Data
const environment_news = [
  {
    id: 1,
    category: "বাতাস",
    title: "বিশ্বজুড়ে বায়ুদূষণ পরিস্থিতি সংকটজনক",
    description:
      "বিশ্ব স্বাস্থ্য সংস্থা রিপোর্ট করেছে যে, বায়ুদূষণ বর্তমানে পৃথিবীর অনেক শহরে স্বাস্থ্য সংকট সৃষ্টি করছে।",
    date: "2024-12-06",
    news_type: "trending",
    published_time: "09:00",
    image: image_1,
  },
  {
    id: 2,
    category: "বন্যপ্রাণী",
    title: "আমাজনের বনের ব্যাপক বনভূমি ধ্বংস",
    description:
      "আমাজন বনভূমি বছরের পর বছর অত্যধিক পরিমাণে ধ্বংস হচ্ছে, যা পৃথিবীর জলবায়ু পরিবর্তনের ক্ষেত্রে মারাত্মক প্রভাব ফেলছে।",
    date: "2024-12-06",
    news_type: "normal",
    published_time: "12:00",
    image: image_2,
  },
  {
    id: 3,
    category: "বিপর্যয়",
    title: "ভারতে সাইক্লোনের আঘাত",
    description:
      "ভারতের উপকূলে সাইক্লোন আঘাত হানে, বিশেষজ্ঞরা দেশের উপকূলীয় অঞ্চলগুলোকে রক্ষার জন্য সতর্কবার্তা দিয়েছেন।",
    date: "2024-12-06",
    news_type: "normal",
    published_time: "14:30",
    image: image_3,
  },
  {
    id: 4,
    category: "বন্যা",
    title: "অস্ট্রেলিয়ায় ভয়াবহ দাবানল",
    description:
      "অস্ট্রেলিয়ার বনাঞ্চলে ভয়াবহ দাবানল ছড়িয়ে পড়েছে, যার কারণে হাজার হাজার লোক নিরাপদ আশ্রয়ে আশ্রয় নিয়েছে।",
    date: "2024-12-06",
    news_type: "normal",
    published_time: "16:00",
    image: image_4,
  },
  {
    id: 5,
    category: "বিপর্যয়",
    title: "বিশ্বে পরিবেশ বিপর্যয়ের সম্ভাব্য ভবিষ্যত প্রভাব",
    description:
      "বিশ্বব্যাপী পরিবেশ বিপর্যয় এবং জলবায়ু পরিবর্তনের কারণে ভবিষ্যতে খাদ্য ও পানি সংকট সৃষ্টি হওয়ার আশঙ্কা রয়েছে।",
    date: "2024-12-06",
    news_type: "normal",
    published_time: "18:45",
    image: image_4,
  },
];

const NewsCard = () => {
  const trendingNews = environment_news.find(
    (news) => news.news_type === "trending"
  );

  const normalNews = environment_news.filter(
    (news) => news.news_type === "normal"
  );

  return (
    <div className="container mx-auto">
      <div className="border-s-4 border-green-500">
        <h1 className="text-4xl font-bold my-4 ps-2">পরিবেশ</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Display the First Normal News */}
        {normalNews.slice(0, 1).map((news, idx) => (
          <div key={idx} className="bg-white overflow-hidden">
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
              <h2 className="text-xl font-bold hover:text-blue-600">
                <Link href={`view_details/${news.id}`}>{news.title}</Link>
              </h2>
              <p className="text-sm text-gray-600">{news.description}</p>
            </div>
          </div>
        ))}

        {/* Display Trending News */}
        {trendingNews && (
          <div className="col-span-2 bg-gray-100 relative overflow-hidden">
            <div className="hover:scale-110 duration-500">
              <Image
                src={trendingNews.image}
                alt={trendingNews.title}
                objectFit="cover"
                placeholder="blur"
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

        {/* Display the Remaining Normal News */}
        {normalNews.slice(1).map((news) => (
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
              <h2 className="text-xl font-bold hover:text-blue-600">
                <Link href={`view_details/${news.id}`}>{news.title}</Link>
              </h2>
              <p className="text-sm text-gray-600">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
