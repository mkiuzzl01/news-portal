"use client";
import image from "@public/asset/bangladesh/environment.jpg";
import Image from "next/image";
import Link from "next/link";
import PaginationPages from "./PaginationPages";
const othersNews = [
  {
    id: 1,
    category: "Bangladesh",
    title: "বাংলাদেশে নতুন মেট্রোরেল উদ্বোধন",
    description: "ঢাকা শহরে প্রথমবারের মতো মেট্রোরেল সেবা চালু করা হয়েছে।",
    date: "2024-12-05",
    image: image,
  },
  {
    id: 2,
    category: "International",
    title: "জাতিসংঘে শান্তি রক্ষায় বাংলাদেশের প্রশংসা",
    description: "জাতিসংঘ মিশনে বাংলাদেশি শান্তিরক্ষীদের প্রশংসা করেছে।",
    date: "2024-12-04",
    image: image,
  },
  {
    id: 3,
    category: "Politics",
    title: "জাতীয় নির্বাচনের সময়সূচি প্রকাশ",
    description:
      "২০২৫ সালের জাতীয় নির্বাচন নিয়ে আনুষ্ঠানিক ঘোষণা দেওয়া হয়েছে।",
    date: "2024-12-03",
    image: image,
  },
  {
    id: 4,
    category: "Economy",
    title: "রেমিটেন্স প্রবাহে নতুন রেকর্ড",
    description:
      "বাংলাদেশে প্রবাসীদের পাঠানো রেমিটেন্সে নতুন উচ্চতা অর্জিত হয়েছে।",
    date: "2024-12-02",
    image: image,
  },
  {
    id: 5,
    category: "Technology",
    title: "৫জি ইন্টারনেট সেবা চালু",
    description: "বাংলাদেশে প্রথমবারের মতো ৫জি ইন্টারনেট সেবা চালু হয়েছে।",
    date: "2024-12-01",
    image: image,
  },
  {
    id: 6,
    category: "Sports",
    title: "বিশ্বকাপে বাংলাদেশের ঐতিহাসিক জয়",
    description:
      "ক্রিকেট বিশ্বকাপে শক্তিশালী দলের বিরুদ্ধে বাংলাদেশের চমকপ্রদ জয়।",
    date: "2024-11-30",
    image: image,
  },
  {
    id: 7,
    category: "Environment",
    title: "পরিবেশ সংরক্ষণে নতুন উদ্যোগ",
    description:
      "পরিবেশ সংরক্ষণের লক্ষ্যে সরকার বৃহৎ বনায়ন প্রকল্প শুরু করেছে।",
    date: "2024-11-29",
    image: image,
  },
  {
    id: 8,
    category: "Entertainment",
    title: "বাংলাদেশি চলচ্চিত্র আন্তর্জাতিক পুরস্কার পেয়েছে",
    description:
      "একটি বাংলাদেশি চলচ্চিত্র আন্তর্জাতিক চলচ্চিত্র উৎসবে পুরস্কৃত হয়েছে।",
    date: "2024-11-28",
    image: image,
  },
  {
    id: 9,
    category: "Entertainment",
    title: "বাংলাদেশি চলচ্চিত্র আন্তর্জাতিক পুরস্কার পেয়েছে",
    description:
      "একটি বাংলাদেশি চলচ্চিত্র আন্তর্জাতিক চলচ্চিত্র উৎসবে পুরস্কৃত হয়েছে।",
    date: "2024-11-28",
    image: image,
  },
  {
    id: 10,
    category: "Entertainment",
    title: "বাংলাদেশি চলচ্চিত্র আন্তর্জাতিক পুরস্কার পেয়েছে",
    description:
      "একটি বাংলাদেশি চলচ্চিত্র আন্তর্জাতিক চলচ্চিত্র উৎসবে পুরস্কৃত হয়েছে।",
    date: "2024-11-28",
    image: image,
  },
  {
    id: 11,
    category: "Entertainment",
    title: "বাংলাদেশি চলচ্চিত্র আন্তর্জাতিক পুরস্কার পেয়েছে",
    description:
      "একটি বাংলাদেশি চলচ্চিত্র আন্তর্জাতিক চলচ্চিত্র উৎসবে পুরস্কৃত হয়েছে।",
    date: "2024-11-28",
    image: image,
  },
];

const OtherNews = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {othersNews.map((news) => (
          <div
            key={news.id}
            className="flex items-start space-x-3 bg-white rounded-lg p-3"
          >
            <div className="w-1/3 shrink-0">
              <Link href={`view_details/${news.id}`}>
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </Link>
            </div>

            <div className="w-2/3 space-y-2">
              <Link href={`view_details/${news.id}`}>
                <h2 className="text-base font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
                  {news.title}
                </h2>
              </Link>

              <p className="text-sm text-gray-600 line-clamp-2">
                {news.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="py-5">
        <PaginationPages />
      </div>
    </div>
  );
};

export default OtherNews;
