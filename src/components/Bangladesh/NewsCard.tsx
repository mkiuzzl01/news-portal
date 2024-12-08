import React from "react";
import Image from "next/image";
import top_news from "@public/asset/bangladesh/bangladesh_top.jpg";
import economy from "@public/asset/bangladesh/economy.jpg";
import environment from "@public/asset/bangladesh/environment.jpg";
import sport from "@public/asset/bangladesh/sport.jpg";
import technology from "@public/asset/bangladesh/technoloy.jpg";
import Link from "next/link";

const bangladesh_news_data = [
  {
    id: 1,
    category: "Politics",
    title: "বাংলাদেশে আসন্ন নির্বাচন নিয়ে বিতর্ক",
    description:
      "বাংলাদেশে আগামী নির্বাচনের উপর বিভিন্ন রাজনৈতিক দলের মধ্যে বিতর্ক চলছে।",
    date: "2024-12-05",
    news_type: "trending",
    published_time: "06:20",
    image: top_news,
  },
  {
    id: 2,
    category: "Economy",
    title: "বাংলাদেশের অর্থনীতি উন্নতির পথে",
    description:
      "বাংলাদেশের অর্থনীতি এই বছর আরও শক্তিশালী হয়েছে, এবং এটি আন্তর্জাতিক মুদ্রার বাজারে তার অবস্থান সুদৃঢ় করেছে।",
    date: "2024-12-04",
    news_type: "normal",
    published_time: "10:30",
    image: economy,
  },
  {
    id: 3,
    category: "Technology",
    title: "বাংলাদেশে প্রযুক্তির অগ্রগতি",
    description:
      "বাংলাদেশে নতুন প্রযুক্তি উদ্ভাবন এবং ব্যবহারের ক্ষেত্রে উল্লেখযোগ্য অগ্রগতি হয়েছে, যা দেশের উন্নয়নে সাহায্য করছে।",
    date: "2024-12-03",
    news_type: "normal",
    published_time: "08:00",
    image: environment,
  },
  {
    id: 4,
    category: "Sports",
    title: "বিশ্বকাপে বাংলাদেশের জয়",
    description:
      "বাংলাদেশের ক্রিকেট দল সম্প্রতি বিশ্বকাপে দুর্দান্ত পারফর্মেন্স প্রদর্শন করেছে এবং একটি ঐতিহাসিক জয় লাভ করেছে।",
    date: "2024-12-02",
    news_type: "normal",
    published_time: "15:10",
    image: sport,
  },
  {
    id: 5,
    category: "Environment",
    title: "পরিবেশ রক্ষায় বাংলাদেশের নতুন উদ্যোগ",
    description:
      "বাংলাদেশ সরকার পরিবেশ রক্ষায় নতুন বনায়ন প্রকল্প গ্রহণ করেছে, যা দেশব্যাপী বৃক্ষরোপণ এবং প্রাকৃতিক পরিবেশের সুরক্ষায় সাহায্য করবে।",
    date: "2024-12-01",
    news_type: "normal",
    published_time: "12:45",
    image: technology,
  },
];

const NewsCard = () => {
  const trendingNews = bangladesh_news_data.find(
    (news) => news.news_type === "trending"
  );
  const normalNews = bangladesh_news_data.filter(
    (news) => news.news_type === "normal"
  );

  return (
    <div className="container mx-auto">
      <div className="border-s-4 border-green-500 ">
        <h1 className="text-4xl font-bold my-4 ps-2">বাংলাদেশ</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Trending News Section */}
        {trendingNews && (
          <div className="col-span-2 relative bg-gray-200 overflow-hidden">
            <Image
              src={trendingNews.image}
              alt={trendingNews.title}
              width={600}
              height={400}
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
              <h1 className="text-2xl text-white font-semibold hover:text-yellow-500">
                <Link href={`view details/${trendingNews?.id}`}>
                  {trendingNews.title}
                </Link>
              </h1>
            </div>
          </div>
        )}

        {/* Normal News Sections */}
        {normalNews.map((news) => (
          <div key={news.id} className="bg-white overflow-hidden mb-4">
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
                <Link href={`view_details/${news?.id}`}>{news.title}</Link>
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
