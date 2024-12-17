"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import vote from "@public/asset/politics/vote.jpg";
import parliament from "@public/asset/politics/perliment.jpg";
import team from "@public/asset/politics/team.jpg";

const economy_news = [
  {
    id: "01",
    category: "রাজনীতি",
    title: "সংসদে নতুন কর সংস্কার বিল পাস",
    description:
      "সরকার সংসদে নতুন কর সংস্কার বিল পাস করেছে, যা রাজস্ৱ বৃদ্ধির প্রতিশ্রুতি দিচ্ছে।",
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
  {
    id: "05",
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

const TopNews = () => {
  const trendingNews = economy_news.find(
    (news) => news.news_type === "trending"
  );
  const normalNews = economy_news.filter((news) => news.news_type === "normal");

  return (
    <div>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Trending News Section */}
        {trendingNews && (
          <div className="col-span-2 relative bg-gray-200 overflow-hidden">
            <div className="hover:scale-110 duration-500">
              <Image
                src={trendingNews.image}
                alt={trendingNews.title}
                placeholder="blur"
                objectFit="cover"
                className="w-full"
              />
            </div>
            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
              <h1 className="text-2xl lg:text-4xl text-white font-semibold hover:text-yellow-500">
                <Link href={`view_details/${trendingNews?.id}`}>
                  {trendingNews.title}
                </Link>
              </h1>
              <p className="text-lg text-white">
                {trendingNews.published_time}
              </p>
            </div>
          </div>
        )}

        {/* Normal News Sections for Economy */}
        {normalNews.map((news, idx) => (
          <div key={idx} className="bg-white overflow-hidden mb-4">
            <div className="hover:scale-110 duration-300">
              <Image
                src={news.image}
                alt={news.title}
                width={400}
                height={300}
                placeholder="blur"
                objectFit="cover"
                className="w-full"
              />
            </div>
            <div className="pt-4">
              <h2 className="text-lg lg:text-xl font-bold hover:text-blue-600">
                <Link href={`view_details/${news?.id}`}>{news.title}</Link>
              </h2>
              <p className="text-sm text-gray-600">{news.description}</p>
              <p className="text-sm text-gray-400">{news.published_time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNews;
