import Advertisement from "@/util/Advertisement";
import OtherNews from "@/util/OtherNews";
import SideTabs from "@/util/SideTabs";
import TopNews from "@/util/TopNews";
import image1 from "@public/asset/Health/image (1).jpg";
import image2 from "@public/asset/Health/image (2).jpg";
import image3 from "@public/asset/Health/image (3).jpg";
import image4 from "@public/asset/Health/image (4).jpg";
import banner from "@public/asset/banner.jpg";

const healthNews = [
  {
    id: 1,
    category: "healt",
    title: "ডায়াবেটিস নিয়ন্ত্রণে খাদ্যাভ্যাসের ভূমিকা",
    description:
      "বিশেষজ্ঞরা বলছেন যে শর্করা নিয়ন্ত্রিত খাদ্যাভ্যাস এবং নিয়মিত ব্যায়াম ডায়াবেটিস নিয়ন্ত্রণে অত্যন্ত কার্যকর।",
    date: "2024-12-18",
    news_type: "trending",
    published_time: "10:00",
    image: image1,
  },
  {
    id: 2,
    category: "healt",
    title: "মানসিক চাপ হ্রাসে ধ্যানের গুরুত্ব",
    description:
      "ধ্যান এবং যোগব্যায়াম মানসিক চাপ হ্রাসে অত্যন্ত কার্যকর পদ্ধতি হিসেবে স্বীকৃত।",
    date: "2024-12-18",
    news_type: "normal",
    published_time: "11:30",
    image: image2,
  },
  {
    id: 3,
    category: "healt",
    title: "শীতকালে ফ্লু প্রতিরোধের উপায়",
    description:
      "ডাক্তাররা শীতকালে ফ্লু প্রতিরোধে টিকা নেওয়া, পর্যাপ্ত পানি পান করা এবং স্বাস্থ্যকর খাবার খাওয়ার পরামর্শ দিয়েছেন।",
    date: "2024-12-18",
    news_type: "normal",
    published_time: "12:15",
    image: image3,
  },
  {
    id: 4,
    category: "healt",
    title: "নতুন ম্যালেরিয়া টিকা নিয়ে আশার আলো",
    description:
      "বিশ্ব স্বাস্থ্য সংস্থা নতুন ম্যালেরিয়া টিকা উন্মোচন করেছে, যা লক্ষাধিক প্রাণ বাঁচাতে পারে।",
    date: "2024-12-18",
    news_type: "normal",
    published_time: "13:45",
    image: image4,
  },
  {
    id: 5,
    category: "healt",
    title: "হার্টের স্বাস্থ্য সুরক্ষায় সুষম খাদ্যের গুরুত্ব",
    description:
      "স্বাস্থ্য বিশেষজ্ঞরা হার্টের রোগ প্রতিরোধে সুষম খাদ্য গ্রহণ এবং নিয়মিত ব্যায়ামের গুরুত্বের উপর জোর দিয়েছেন।",
    date: "2024-12-18",
    news_type: "normal",
    published_time: "14:30",
    image: image4,
  },
];

const othersNews = [
  {
    id: 1,
    category: "Bangladesh",
    title: "বাংলাদেশে নতুন মেট্রোরেল উদ্বোধন",
    description: "ঢাকা শহরে প্রথমবারের মতো মেট্রোরেল সেবা চালু করা হয়েছে।",
    date: "2024-12-05",
    image: image1,
  },
  {
    id: 2,
    category: "International",
    title: "জাতিসংঘে শান্তি রক্ষায় বাংলাদেশের প্রশংসা",
    description: "জাতিসংঘ মিশনে বাংলাদেশি শান্তিরক্ষীদের প্রশংসা করেছে।",
    date: "2024-12-04",
    image: image1,
  },
  {
    id: 3,
    category: "Politics",
    title: "জাতীয় নির্বাচনের সময়সূচি প্রকাশ",
    description:
      "২০২৫ সালের জাতীয় নির্বাচন নিয়ে আনুষ্ঠানিক ঘোষণা দেওয়া হয়েছে।",
    date: "2024-12-03",
    image: image1,
  },
  {
    id: 4,
    category: "Economy",
    title: "রেমিটেন্স প্রবাহে নতুন রেকর্ড",
    description:
      "বাংলাদেশে প্রবাসীদের পাঠানো রেমিটেন্সে নতুন উচ্চতা অর্জিত হয়েছে।",
    date: "2024-12-02",
    image: image1,
  },
  {
    id: 5,
    category: "Technology",
    title: "৫জি ইন্টারনেট সেবা চালু",
    description: "বাংলাদেশে প্রথমবারের মতো ৫জি ইন্টারনেট সেবা চালু হয়েছে।",
    date: "2024-12-01",
    image: image1,
  },
  {
    id: 6,
    category: "Sports",
    title: "বিশ্বকাপে বাংলাদেশের ঐতিহাসিক জয়",
    description:
      "ক্রিকেট বিশ্বকাপে শক্তিশালী দলের বিরুদ্ধে বাংলাদেশের চমকপ্রদ জয়।",
    date: "2024-11-30",
    image: image1,
  },
];

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto p-2">
      <div className="flex lg:flex-row flex-col gap-4">
        {/* Main Content - Scrollable */}
        <div className="w-full lg:w-3/4 lg:pr-4 lg:order-1 order-2">
          <TopNews data={healthNews} />
          <Advertisement banner={banner} />
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
