import Link from "next/link";
import React from "react";

const importantNews = [
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
];

const Important = () => {
  return (
    <div
      className="p-4 h-[300px] overflow-y-auto  [&::-webkit-scrollbar]:hidden 
        [-ms-overflow-style:none] 
        [scrollbar-width:none]"
    >
      <ul className="space-y-4">
        {importantNews.map((news) => (
          <li key={news.id} className="border-b pb-4">
            <Link href={`/view_details/${news?.id}`}>
              <h3 className="text-lg font-semibold hover:text-blue-500">
                {news.title}
              </h3>
              <p className="text-sm text-gray-600">{news.description}</p>
              <span className="text-xs text-gray-500">{news.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Important;
