"use client";
import Link from "next/link";

const newsData = [
  {
    id: 1,
    title: "বাংলাদেশে উন্নয়ন প্রকল্পে বড় সাফল্য",
    description:
      "বাংলাদেশ সম্প্রতি নতুন উন্নয়ন প্রকল্পে বড় অগ্রগতি অর্জন করেছে।",
    date: "২০২৪-১২-০৫",
  },
  {
    id: 2,
    title: "বিশ্বকাপে বাংলাদেশের জয়",
    description: "বিশ্বকাপে বাংলাদেশের ক্রিকেট দল দুর্দান্ত জয় লাভ করেছে।",
    date: "২০২৪-১২-০৪",
  },
  {
    id: 3,
    title: "পরিবেশ রক্ষায় নতুন উদ্যোগ",
    description:
      "বাংলাদেশ সরকার নতুন বনায়ন প্রকল্প শুরু করেছে পরিবেশ রক্ষার জন্য।",
    date: "২০২৪-১২-০৩",
  },
  {
    id: 4,
    title: "শীতকালীন আবহাওয়ার পূর্বাভাস",
    description:
      "আগামী সপ্তাহে শীতকাল আরো তীব্র হতে পারে বলে আবহাওয়া অধিদপ্তর জানিয়েছে।",
    date: "২০২৪-১২-০৩",
  },
  {
    id: 5,
    title: "ডিজিটাল বাংলাদেশ প্রকল্পের উন্নতি",
    description:
      "ডিজিটাল বাংলাদেশ প্রকল্পে প্রযুক্তিগত অগ্রগতির ফলে ইন্টারনেট সেবা সারা দেশে পৌঁছেছে।",
    date: "২০২৪-১২-০২",
  },
  {
    id: 6,
    title: "ডিজিটাল বাংলাদেশ প্রকল্পের উন্নতি",
    description:
      "ডিজিটাল বাংলাদেশ প্রকল্পে প্রযুক্তিগত অগ্রগতির ফলে ইন্টারনেট সেবা সারা দেশে পৌঁছেছে।",
    date: "২০২৪-১২-০২",
  },
  {
    id: 7,
    title: "ডিজিটাল বাংলাদেশ প্রকল্পের উন্নতি",
    description:
      "ডিজিটাল বাংলাদেশ প্রকল্পে প্রযুক্তিগত অগ্রগতির ফলে ইন্টারনেট সেবা সারা দেশে পৌঁছেছে।",
    date: "২০২৪-১২-০২",
  },
  {
    id: 8,
    title: "ডিজিটাল বাংলাদেশ প্রকল্পের উন্নতি",
    description:
      "ডিজিটাল বাংলাদেশ প্রকল্পে প্রযুক্তিগত অগ্রগতির ফলে ইন্টারনেট সেবা সারা দেশে পৌঁছেছে।",
    date: "২০২৪-১২-০২",
  },
  {
    id: 9,
    title: "ডিজিটাল বাংলাদেশ প্রকল্পের উন্নতি",
    description:
      "ডিজিটাল বাংলাদেশ প্রকল্পে প্রযুক্তিগত অগ্রগতির ফলে ইন্টারনেট সেবা সারা দেশে পৌঁছেছে।",
    date: "২০২৪-১২-০২",
  },
  {
    id: 10,
    title: "ডিজিটাল বাংলাদেশ প্রকল্পের উন্নতি",
    description:
      "ডিজিটাল বাংলাদেশ প্রকল্পে প্রযুক্তিগত অগ্রগতির ফলে ইন্টারনেট সেবা সারা দেশে পৌঁছেছে।",
    date: "২০২৪-১২-০২",
  },
];

const LastNews = () => {
  return (
    <div
      className="w-full max-h-[200px] lg:max-h-[850px] px-2 md:px-4 overflow-y-auto 
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <ul className="divide-y divide-gray-200">
        {newsData?.map((news) => (
          <li
            key={news.id}
            className="py-3 md:py-4 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
          >
            <Link href={`/view_details`} className="block space-y-1">
              <h3
                className="text-sm md:text-base lg:text-lg font-semibold text-gray-800 
              line-clamp-1 hover:text-blue-600 transition-colors"
              >
                {news?.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 line-clamp-2">
                {news?.description}
              </p>
              <div className="flex justify-between items-center text-xs md:text-sm text-gray-500">
                <span>{news?.date}</span>
                <span className="text-blue-500 hover:text-blue-700">
                  আরও পড়ুন
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastNews;
