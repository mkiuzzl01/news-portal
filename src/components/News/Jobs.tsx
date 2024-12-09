import education from "@public/asset/education/education.jpg";
import Image from "next/image";
import Link from "next/link";

const educationNews = [
  {
    id: "01",
    category: "শিক্ষা",
    title: "নতুন শিক্ষানীতি কার্যকর",
    description:
      "সরকার ২০২৫ সাল থেকে নতুন শিক্ষানীতি কার্যকর করার ঘোষণা দিয়েছে, যা আধুনিক শিক্ষার প্রয়োজন মেটাবে।",
    date: "২০২৪-১২-০৪",
    news_type: "trending",
    published_time: "10:00",
    image: education,
  },
  {
    id: "02",
    category: "শিক্ষা",
    title: "বিশ্ববিদ্যালয়ে ভর্তি পরীক্ষার তারিখ ঘোষণা",
    description:
      "জাতীয় বিশ্ববিদ্যালয় আগামী বছরের ভর্তি পরীক্ষার তারিখ ঘোষণা করেছে।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "12:30",
    image: education,
  },
  {
    id: "03",
    category: "শিক্ষা",
    title: "শিক্ষকদের জন্য ডিজিটাল প্রশিক্ষণ কর্মসূচি",
    description:
      "শিক্ষা মন্ত্রণালয় শিক্ষকদের জন্য একটি নতুন ডিজিটাল প্রশিক্ষণ কর্মসূচি চালু করেছে।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "14:00",
    image: education,
  },
  {
    id: "04",
    category: "শিক্ষা",
    title: "স্কুলে মিড-ডে মিল চালু",
    description:
      "সরকার দেশের সব প্রাথমিক বিদ্যালয়ে মিড-ডে মিল কার্যক্রম চালু করার সিদ্ধান্ত নিয়েছে।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "15:00",
    image: education,
  },
  {
    id: "05",
    category: "শিক্ষা",
    title: "পরীক্ষা পদ্ধতিতে বড় পরিবর্তন",
    description:
      "জাতীয় শিক্ষা বোর্ড পরীক্ষা পদ্ধতিতে বড় পরিবর্তনের ঘোষণা দিয়েছে, যা শিক্ষার্থীদের চাপ কমাবে।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "16:30",
    image: education,
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="border-t-2">
        <h1 className="text-3xl font-semibold py-2">চাকরি</h1>
      </div>
      <div className="space-y-4">
        {educationNews?.map((news, index) => (
          <div key={index}>
            {news?.news_type === "trending" && (
              <Image
                src={news?.image}
                alt={news?.title}
                className="w-full"
              />
            )}
            <h1 className="text-xl font-semibold py-2 border-b-2 hover:text-blue-500">
              <Link href={`view_details/${news?.id}`}>{news?.title}</Link>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
