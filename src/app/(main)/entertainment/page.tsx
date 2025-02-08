import OtherNews from "@/util/OtherNews";
import SideTabs from "@/util/SideTabs";
import TopNews from "@/util/TopNews";
import banner from "@public/asset/banner.jpg";
import image from "@public/asset/bangladesh/environment.jpg";
import Image2 from "@public/asset/entertainment/concert-1.jpg";
import Image3 from "@public/asset/entertainment/concert-2.jpg";
import Image4 from "@public/asset/entertainment/concert-3.jpg";
import Image1 from "@public/asset/entertainment/concert-4.jpg";
import Advertisement_2 from "@/util/Advertisement_2";

const entertainment = [
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
    title: "মঞ্চ নাটক এবং থিয়েটারের উন্নতি",
    description:
      "বাংলাদেশের মঞ্চ নাটক এবং থিয়েটারের শিল্পে দ্রুত উন্নতি ঘটছে, আন্তর্জাতিক দৃষ্টি আকর্ষণ করছে।",
    date: "2024-12-03",
    news_type: "normal",
    published_time: "16:30",
    image: Image4,
  },
];

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
];

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto p-2">
      <div className="flex lg:flex-row flex-col gap-4">
        <div className="w-full lg:w-3/4 lg:pr-4 lg:order-1 order-2">
          <TopNews data={entertainment} />
          <Advertisement_2 banner={banner} />
          <OtherNews relatedNews={othersNews} />
        </div>
        <div className="w-full lg:w-1/4 lg:sticky lg:top-20 lg:self-start lg:order-2 order-1">
          <SideTabs />
        </div>
      </div>
    </div>
  );
};

export default Page;
