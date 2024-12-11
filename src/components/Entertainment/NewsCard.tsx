"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Image2 from "@public/asset/Entertainment/concert-1.jpg";
import Image3 from "@public/asset/Entertainment/concert-2.jpg";
import Image4 from "@public/asset/Entertainment/concert-3.jpg";
import Image1 from "@public/asset/Entertainment/concert-4.jpg";

const news = [
  {
    id: 1,
    category: "Entertainment",
    title: "বিনোদন শিল্পে নতুন অগ্রগতি",
    description:
      "বিনোদন শিল্পে একটি নতুন যুগের সূচনা হয়েছে, যেখানে ক্রমাগত পরিবর্তন ঘটছে।",
    date: "2024-12-06",
    news_type: "trending",
    published_time: "10:00",
    image: Image1,
  },
  {
    id: 2,
    category: "Entertainment",
    title: "বাংলাদেশে সিনেমার চাহিদা বৃদ্ধি",
    description:
      "দেশে সিনেমার চাহিদা বৃদ্ধির সাথে সাথে নতুন সিনেমা নির্মাণের সংখ্যা বাড়ছে।",
    date: "2024-12-05",
    news_type: "normal",
    published_time: "12:00",
    image: Image2,
  },
  {
    id: 3,
    category: "Entertainment",
    title: "টেলিভিশন শোতে নতুন ধারাবাহিক",
    description:
      "বাংলাদেশের টেলিভিশন চ্যানেলে নতুন ধারাবাহিকের মাধ্যমে টেলিভিশন শোয়ের মান উন্নত হচ্ছে।",
    date: "2024-12-04",
    news_type: "normal",
    published_time: "14:00",
    image: Image3,
  },
  {
    id: 4,
    category: "Entertainment",
    title: "মঞ্চ নাটক এবং থিয়েটারের উন্নতি",
    description:
      "বাংলাদেশের মঞ্চ নাটক এবং থিয়েটারের শিল্পে দ্রুত উন্নতি ঘটছে, আন্তর্জাতিক দৃষ্টি আকর্ষণ করছে।",
    date: "2024-12-03",
    news_type: "normal",
    published_time: "16:30",
    image: Image4,
  },
  {
    id: 5,
    category: "Entertainment",
    title: "বিনোদনমূলক শিল্পে সৃজনশীলতা বৃদ্ধি",
    description:
      "বাংলাদেশের বিনোদনমূলক শিল্পে সৃজনশীলতার নতুন ধারার প্রবর্তন হচ্ছে।",
    date: "2024-12-02",
    news_type: "normal",
    published_time: "18:00",
    image: Image2,
  },
  {
    id: 6,
    category: "Entertainment",
    title: "বিনোদনমূলক শিল্পে সৃজনশীলতা বৃদ্ধি",
    description:
      "বাংলাদেশের বিনোদনমূলক শিল্পে সৃজনশীলতার নতুন ধারার প্রবর্তন হচ্ছে।",
    date: "2024-12-02",
    news_type: "normal",
    published_time: "18:00",
    image: Image2,
  },
  {
    id: 7,
    category: "Entertainment",
    title: "বিনোদনমূলক শিল্পে সৃজনশীলতা বৃদ্ধি",
    description:
      "বাংলাদেশের বিনোদনমূলক শিল্পে সৃজনশীলতার নতুন ধারার প্রবর্তন হচ্ছে।",
    date: "2024-12-02",
    news_type: "normal",
    published_time: "18:00",
    image: Image2,
  },
];

const NewsCard = () => {
  const trendingNews = news.find((news) => news.news_type === "trending");
  const normalNews = news.filter(
    (news) => news.news_type === "normal" && news.category === "Entertainment"
  );

  return (
    <div className="py-6 border-t-2">
      <div className="border-blue-500 border-s-4 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold pl-4">বিনোদন</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          {normalNews.slice(0, 3).map((news, idx) => (
            <div
              key={idx}
              className="bg-white  overflow-hidden flex items-stretch"
            >
              <div className="w-1/3 hover:scale-110 duration-700">
                <Image
                  src={news.image}
                  alt={news.title}
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <div className="w-2/3 ps-4 flex flex-col justify-between">
                <h2 className="text-lg font-bold mb-2 hover:text-blue-600">
                  <Link href={`view_details/${news.id}`}>{news.title}</Link>
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                  {news.description}
                </p>
                <div className="text-xs text-gray-500">
                  {news.date} • {news.published_time}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 col-span-1 relative group">
          {trendingNews && (
            <div className="bg-gray-100 overflow-hidden">
              <div className="relative w-full hover:scale-110 duration-700 overflow-hidden">
                <Image
                  src={trendingNews.image}
                  alt={trendingNews.title}
                  placeholder="blur"
                  className="inset-0 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h2 className="text-white text-xl md:text-4xl font-bold hover:text-yellow-400 transition-colors">
                  <Link href={`view_details/${trendingNews.id}`} className="text-2xl lg:text-4xl">
                    {trendingNews.title}
                  </Link>
                </h2>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1 space-y-6">
          {normalNews.slice(3).map((news) => (
            <div
              key={news.id}
              className="bg-white overflow-hidden flex items-stretch"
            >
              <div className="w-2/3 ps-4 flex flex-col justify-between">
                <h2 className="text-lg font-bold mb-2 hover:text-blue-600">
                  <Link href={`view_details/${news.id}`}>{news.title}</Link>
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                  {news.description}
                </p>
                <div className="text-xs text-gray-500 mt-auto">
                  {news.date} • {news.published_time}
                </div>
              </div>
              <div className="w-1/3">
                <Image
                  src={news.image}
                  alt={news.title}
                  placeholder="blur"
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
