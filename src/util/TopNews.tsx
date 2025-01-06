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
            <div className="relative w-full aspect-[3/2] hover:scale-110 duration-700 ">
              <Image
                src={trendingNews?.image}
                alt={trendingNews?.title}
                className="object-cover"
                fill
                placeholder="blur"
              />
            </div>
            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
              <Link href={`/view_details`}>
                <h1 className="text-2xl font-semibold lg:text-4xl text-white hover:text-yellow-500">
                  {trendingNews?.title}
                </h1>
              </Link>
            </div>
          </div>
        )}

        {/* Normal News */}
        {normalNews.map((news) => (
          <div key={news.id} className="bg-white overflow-hidden">
            <div className="relative w-full aspect-[3/2] hover:scale-105 duration-500 ">
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
              <div className="flex justify-between">
                <p className="text-sm text-gray-400">{news?.published_time}</p>
                <p className="text-blue-600 text-sm">
                  <Link href={`/view_details`}>আরো পড়ুন</Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNews;
