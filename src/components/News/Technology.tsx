import Image from "next/image";
import Link from "next/link";
import coding from "@public/asset/Technology/coding.jpg";
import industry from "@public/asset/Technology/industry.jpg";
import monitoring from "@public/asset/Technology/monitoring.jpg";
import programming from "@public/asset/Technology/programming.jpg";

const technology_news = [
  {
    id: 1,
    category: "Technology",
    title: "বাংলাদেশে প্রযুক্তির অগ্রগতি",
    description:
      "বাংলাদেশে নতুন প্রযুক্তি উদ্ভাবন এবং ব্যবহারের ক্ষেত্রে উল্লেখযোগ্য অগ্রগতি হয়েছে।",
    date: "2024-12-03",
    news_type: "trending",
    published_time: "08:00",
    image: coding,
  },
  {
    id: 2,
    category: "Technology",
    title: "বাংলাদেশে ৫জি প্রযুক্তির উদ্বোধন",
    description:
      "বাংলাদেশে ৫জি নেটওয়ার্ক চালু হয়েছে, যা দ্রুত ইন্টারনেট এবং নতুন প্রযুক্তিগত উদ্ভাবনকে সমর্থন করবে।",
    date: "2024-12-02",
    news_type: "normal",
    published_time: "10:30",
    image: industry,
  },
  {
    id: 3,
    category: "Technology",
    title: "বাংলাদেশে প্রযুক্তি খাতে বিনিয়োগ বৃদ্ধি পাচ্ছে",
    description: "বাংলাদেশের  দেশের ডিজিটাল পরিকাঠামো উন্নত করতে সাহায্য করবে।",
    date: "2024-12-01",
    news_type: "normal",
    published_time: "12:15",
    image: monitoring,
  },
  {
    id: 4,
    category: "Technology",
    title: "বাংলাদেশে নতুন প্রযুক্তিগত শিক্ষা কেন্দ্র প্রতিষ্ঠা",
    description:
      "বাংলাদেশে নতুন প্রযুক্তিগত শিক্ষা কেন্দ্র প্রতিষ্ঠিত হয়েছে, যা যুবকদের দক্ষতা উন্নয়ন করবে।",
    date: "2024-11-30",
    news_type: "normal",
    published_time: "16:30",
    image: programming,
  },
  {
    id: 5,
    category: "Technology",
    title: "বাংলাদেশে স্মার্ট সিটি উদ্যোগের অগ্রগতি",
    description:
      "বাংলাদেশে স্মার্ট সিটি প্রকল্পের কাজ শুরু হয়েছে, যা শহরের অবকাঠামো এবং জীবনযাত্রার মান উন্নত করবে।",
    date: "2024-11-29",
    news_type: "normal",
    published_time: "09:00",
    image: coding,
  },
];

const Technology = () => {
  return (
    <div>
      <div className="border-t-2">
        <h1 className="text-3xl font-semibold py-2">প্রযুক্তি</h1>
      </div>
      <div className="space-y-4">
        {technology_news?.map((news, index) => (
          <div key={index}>
            {news?.news_type === "trending" && (
              <Image
                src={news?.image}
                alt={news?.title}
                className="w-full"
              />
            )}
            <h1 className="text-xl font-semibold py-2 border-b-2">
              <Link href={`view_details/${news?.id}`}>{news?.title}</Link>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
