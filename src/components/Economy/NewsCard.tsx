"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import agriculture from "@public/asset/Economy/agriculture.jpg";
import business from "@public/asset/Economy/business.jpg";
import formar from "@public/asset/Economy/formar.jpg";
import growth from "@public/asset/Economy/growth.jpg";

const economy_news = [
  {
    id: 1,
    category: "Economy",
    title: "বাংলাদেশের অর্থনীতি উন্নতির পথে",
    description:
      "বাংলাদেশের অর্থনীতি এই বছর আরও শক্তিশালী হয়েছে, এবং এটি আন্তর্জাতিক মুদ্রার বাজারে তার অবস্থান সুদৃঢ় করেছে।",
    date: "2024-12-04",
    news_type: "trending",
    published_time: "10:30",
    image: growth,
  },
  {
    id: 2,
    category: "Economy",
    title: "বাংলাদেশের কৃষি খাতে প্রযুক্তি ব্যবহার বৃদ্ধি পাচ্ছে",
    description:
      "বাংলাদেশের কৃষি খাতে প্রযুক্তির ব্যবহার বৃদ্ধি পাচ্ছে, যা উৎপাদনশীলতা এবং খাদ্য নিরাপত্তা নিশ্চিত করতে সাহায্য করছে।",
    date: "2024-12-03",
    news_type: "normal",
    published_time: "08:00",
    image: agriculture,
  },
  {
    id: 3,
    category: "Economy",
    title: "বিদেশি বিনিয়োগে বাংলাদেশে বৃদ্ধি",
    description:
      "বাংলাদেশে বিদেশি বিনিয়োগের পরিমাণ গত বছর ২০% বৃদ্ধি পেয়েছে, যা দেশের অর্থনীতির জন্য একটি গুরুত্বপূর্ণ উন্নতি।",
    date: "2024-12-02",
    news_type: "normal",
    published_time: "12:15",
    image: business,
  },
  {
    id: 4,
    category: "Economy",
    title: "বিপর্যয়কালে বাংলাদেশের ব্যবসা ক্ষেত্রের পুনরুদ্ধার",
    description:
      "দেশব্যাপী বিপর্যয়ের পর, বাংলাদেশ সরকার দেশের ব্যবসা খাত পুনরুদ্ধারের জন্য গুরুত্বপূর্ণ পদক্ষেপ গ্রহণ করেছে।",
    date: "2024-12-01",
    news_type: "normal",
    published_time: "16:30",
    image: formar,
  },
  {
    id: 5,
    category: "Economy",
    title: "বাংলাদেশের রফতানি খাতে আশাপ্রদ প্রবৃদ্ধি",
    description:
      "বাংলাদেশের রফতানি খাত গত বছরে ১৫% প্রবৃদ্ধি অর্জন করেছে, যা দেশের অর্থনীতিতে ইতিবাচক প্রভাব ফেলছে।",
    date: "2024-11-30",
    news_type: "normal",
    published_time: "09:00",
    image: business,
  },
];

const NewsCard = () => {
  const trendingNews = economy_news.find(
    (news) => news.news_type === "trending"
  );
  const normalNews = economy_news.filter(
    (news) => news.news_type === "normal" && news.category === "Economy"
  );

  return (
    <div className="container mx-auto">
      <div className="border-s-4 border-green-500 ">
        <h1 className="text-4xl font-bold my-4 ps-2">অর্থনীতি</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Trending News Section */}
        {trendingNews && (
          <div className="col-span-2 relative bg-gray-200 overflow-hidden">
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
              <h1 className="text-2xl text-white font-semibold hover:text-yellow-500">
                <Link href={`view_details/${trendingNews?.id}`}>
                  {trendingNews.title}
                </Link>
              </h1>
              <p className="text-sm text-white">
                {trendingNews.published_time}
              </p>
            </div>
          </div>
        )}

        {/* Normal News Sections for Economy */}
        {normalNews.map((news, idx) => (
          <div key={idx} className="bg-white overflow-hidden mb-4">
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
                <Link href={`view_details/${news?.id}`}>{news.title}</Link>
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
