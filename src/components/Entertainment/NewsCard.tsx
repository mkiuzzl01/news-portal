"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import entertainmentImage1 from "@public/asset/Entertainment/concert-1.jpg";
import entertainmentImage2 from "@public/asset/Entertainment/concert-2.jpg";
import entertainmentImage3 from "@public/asset/Entertainment/concert-3.jpg";
import entertainmentImage4 from "@public/asset/Entertainment/concert-4.jpg";

const entertainment_news = [
  {
    id: 1,
    category: "Entertainment",
    title: "বিনোদন শিল্পে নতুন অগ্রগতি",
    description:
      "বিনোদন শিল্পে একটি নতুন যুগের সূচনা হয়েছে, যেখানে ক্রমাগত পরিবর্তন ঘটছে।",
    date: "2024-12-06",
    news_type: "trending",
    published_time: "10:00",
    image: entertainmentImage1,
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
    image: entertainmentImage2,
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
    image: entertainmentImage3,
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
    image: entertainmentImage4,
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
    image: entertainmentImage2,
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
    image: entertainmentImage2,
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
    image: entertainmentImage2,
  },
];

const NewsCard = () => {
  const trendingNews = entertainment_news.find(
    (news) => news.news_type === "trending"
  );
  const normalNews = entertainment_news.filter(
    (news) => news.news_type === "normal" && news.category === "Entertainment"
  );

  return (
    <div className="container mx-auto">
      <div className="border-s-4 border-green-500">
        <h1 className="text-4xl font-bold my-4 ps-2">বিনোদন</h1>
      </div>
      <div className="grid grid-cols-3  gap-4 p-4">
        {/* First Column - 3 normal news cards */}
        <div className="col-span-1 space-y-4">
          {normalNews.slice(0, 3).map((news) => (
            <div key={news.id} className="bg-white overflow-hidden flex">
              <Image
                src={news.image}
                alt={news.title}
                width={150}
                height={100}
                placeholder="blur"
                objectFit="cover"
                className="w-[150px] h-[100px] object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-center">
                <h2 className="text-xl font-bold hover:text-blue-600 line-clamp-1">
                  <Link href={`view_details/${news.id}`}>{news.title}</Link>
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Column - Centered Trending News */}
        <div className="col-span-1">
          {trendingNews && (
            <div className="bg-gray-100 relative overflow-hidden">
              <div className="hover:scale-110 duration-500">
                <Image
                  placeholder="blur"
                  src={trendingNews.image}
                  alt={trendingNews.title}
                  objectFit="cover"
                  className="w-full h-[330px]"
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
        </div>

        {/* Third Column - Remaining normal news */}
        <div className="col-span-1 space-y-4">
          {normalNews.slice(3).map((news) => (
            <div key={news.id} className="bg-white overflow-hidden flex">
              <Image
                src={news.image}
                alt={news.title}
                width={150}
                height={100}
                placeholder="blur"
                objectFit="cover"
                className="w-[150px] h-[100px] object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-center">
                <h2 className="text-xl font-bold hover:text-blue-600 line-clamp-1">
                  <Link href={`view_details/${news.id}`}>{news.title}</Link>
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
