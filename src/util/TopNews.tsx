"use client";
import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NewsDataType {
  id: number | string;
  category: string;
  title: string;
  description: string;
  date: string;
  news_type: string;
  published_time: string;
  image: string | StaticImageData;
}

interface newsData {
  data: NewsDataType[];
}

const TopNews = ({ data }: newsData) => {
  const trendingNews = data.find((news) => news.news_type === "trending");
  const normalNews = data.filter((news) => news.news_type === "normal");

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Trending News */}
        {trendingNews && (
          <div className="col-span-2 relative bg-gray-200 overflow-hidden">
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <Image
                src={trendingNews?.image}
                alt={trendingNews?.title}
                className="object-cover"
                fill
                priority
              />
            </div>
            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
              <h1 className="text-2xl lg:text-4xl text-white font-semibold hover:text-yellow-500">
                <Link href={`/view_details`}>{trendingNews?.title}</Link>
              </h1>
              <p className="text-lg text-white">{trendingNews?.published_time}</p>
            </div>
          </div>
        )}

        {/* Normal News */}
        {normalNews.map((news) => (
          <div key={news.id} className="bg-white overflow-hidden">
            <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[300px]">
              <Image
                src={news.image}
                alt={news.title}
                className="object-cover"
                fill
                placeholder="blur"
              />
            </div>
            <div className="pt-4">
              <h2 className="text-lg lg:text-xl font-bold hover:text-blue-600">
                <Link href={`view_details`}>{news?.title}</Link>
              </h2>
              <p className="text-sm text-gray-600">{news?.description}</p>
              <p className="text-sm text-gray-400">{news?.published_time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNews;
