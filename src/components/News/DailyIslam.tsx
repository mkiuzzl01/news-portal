"use client";
import Link from "next/link";

const dailyIslam = [
  {
    id: 1,
    title: "জাতিসংঘে বাংলাদেশের অবদান",
    description:
      "জাতিসংঘে বাংলাদেশের শান্তিরক্ষা কার্যক্রমে অগ্রণী ভূমিকা পালন করছে।",
    date: "২০২৪-১২-০৫",
  },
  {
    id: 2,
    title: "ডিজিটাল বাংলাদেশ ভিশনের সফল বাস্তবায়ন",
    description:
      "ডিজিটাল বাংলাদেশ প্রকল্পের অধীনে ইন্টারনেট এবং প্রযুক্তি সেবা গ্রামীণ অঞ্চলেও প্রসারিত হয়েছে।",
    date: "২০২৪-১২-০৪",
  },
  {
    id: 3,
    title: "পরিবেশ রক্ষায় নতুন উদ্যোগ",
    description:
      "পরিবেশ সংরক্ষণে বাংলাদেশ সরকার নতুন বনায়ন প্রকল্প শুরু করেছে।",
    date: "২০২৪-১২-০৩",
  },
  {
    id: 4,
    title: "পরিবেশ রক্ষায় নতুন উদ্যোগ",
    description:
      "পরিবেশ সংরক্ষণে বাংলাদেশ সরকার নতুন বনায়ন প্রকল্প শুরু করেছে।",
    date: "২০২৪-১২-০৩",
  },
  {
    id: 5,
    title: "পরিবেশ রক্ষায় নতুন উদ্যোগ",
    description:
      "পরিবেশ সংরক্ষণে বাংলাদেশ সরকার নতুন বনায়ন প্রকল্প শুরু করেছে।",
    date: "২০২৪-১২-০৩",
  },
  {
    id: 7,
    title: "পরিবেশ রক্ষায় নতুন উদ্যোগ",
    description:
      "পরিবেশ সংরক্ষণে বাংলাদেশ সরকার নতুন বনায়ন প্রকল্প শুরু করেছে।",
    date: "২০২৪-১২-০৩",
  },
  {
    id: 8,
    title: "পরিবেশ রক্ষায় নতুন উদ্যোগ",
    description:
      "পরিবেশ সংরক্ষণে বাংলাদেশ সরকার নতুন বনায়ন প্রকল্প শুরু করেছে।",
    date: "২০২৪-১২-০৩",
  },
  {
    id: 9,
    title: "পরিবেশ রক্ষায় নতুন উদ্যোগ",
    description:
      "পরিবেশ সংরক্ষণে বাংলাদেশ সরকার নতুন বনায়ন প্রকল্প শুরু করেছে।",
    date: "২০২৪-১২-০৩",
  },
  {
    id: 10,
    title: "পরিবেশ রক্ষায় নতুন উদ্যোগ",
    description:
      "পরিবেশ সংরক্ষণে বাংলাদেশ সরকার নতুন বনায়ন প্রকল্প শুরু করেছে।",
    date: "২০২৪-১২-০৩",
  },
  {
    id: 11,
    title: "পরিবেশ রক্ষায় নতুন উদ্যোগ",
    description:
      "পরিবেশ সংরক্ষণে বাংলাদেশ সরকার নতুন বনায়ন প্রকল্প শুরু করেছে।",
    date: "২০২৪-১২-০৩",
  },
];

const DailyIslam = () => {
  return (
    <div
      className="w-full max-h-[400px] lg:max-h-[1100px] px-2 md:px-4 overflow-y-auto 
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <ul className="divide-y divide-gray-200">
        {dailyIslam?.map((news) => (
          <li
            key={news?.id}
            className="py-3 md:py-4 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
          >
            <Link href={`/view-details/${news?.id}`} className="block space-y-1">
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

export default DailyIslam;
