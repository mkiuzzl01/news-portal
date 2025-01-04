/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import top_news from "@public/asset/bangladesh/bangladesh-top.jpg";
import economy from "@public/asset/bangladesh/economy.jpg";
import environment from "@public/asset/bangladesh/environment.jpg";
import sport from "@public/asset/bangladesh/sport.jpg";
import Link from "next/link";
import { useGetAllNewsQuery } from "@/redux/dailynews/news.api";



const bangladesh_news_data = [
  {
    id: 1,
    category: "Politics",
    title: "বাংলাদেশে আসন্ন নির্বাচন নিয়ে বিতর্ক",
    description:
      "বাংলাদেশে আগামী নির্বাচনের উপর বিভিন্ন রাজনৈতিক দলের মধ্যে বিতর্ক চলছে।",
    date: "2024-12-05",
    news_type: "lead",
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
];

const NewsCard = () => {

const {data, isLoading, isError} = useGetAllNewsQuery({}); 

if (isLoading) {
  return(
    <h1>loading</h1>
  )
}

console.log(data)



  const leadNews = bangladesh_news_data.find(
    (news) => news.news_type === "lead"
  );
  const normalNews = bangladesh_news_data.filter(
    (news) => news.news_type === "normal"
  );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Trending News Section */}
        {leadNews && (
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 relative bg-gray-200 overflow-hidden border-red-500">
            <div className="w-full h-full lg:h-[600px] hover:scale-105 duration-700">
              <Image
                src={leadNews?.image}
                alt={leadNews?.title}
                className="w-full h-full object-fill"
                placeholder="blur"
                objectFit="cover"
              />
            </div>
            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
              <h1 className="text-2xl lg:text-4xl text-white font-semibold hover:text-yellow-500">
                <Link href={`/view_details`}>
                  {leadNews.title}
                </Link>
              </h1>
            </div>
          </div>
        )}

        {/* Normal News Sections */}
        {normalNews.map((news) => (
          <div
            key={news.id}
            className="flex lg:flex-col flex-row overflow-hidden"
          >
            <div className="w-full">
              <Image
                src={news?.image}
                alt={news?.title}
                width={1000}
                height={600}
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-full ps-2 lg:pt-2">
              <h2 className="text-xl font-bold hover:text-blue-600">
                <Link href={`view_details`}>{news?.title}</Link>
              </h2>
              <p className="text-sm text-gray-600">{news?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsCard;
