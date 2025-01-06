import Advertisement from "@/util/Advertisement";
import OtherNews from "@/util/OtherNews";
import SideTabs from "@/util/SideTabs";
import TopNews from "@/util/TopNews";
import image from "@public/asset/bangladesh/environment.jpg";
import banner from "@public/asset/banner.jpg";
import image1 from "@public/asset/Religion/image (1).jpg";
import image2 from "@public/asset/Religion/image (2).jpg";
import image3 from "@public/asset/Religion/image (3).jpg";
import image4 from "@public/asset/Religion/image (4).jpg";

const religion = [
  {
    id: 1,
    category: "Religion",
    title: "পবিত্র হজ ২০২৫-এর নিবন্ধন শুরু",
    description:
      "পবিত্র হজ ২০২৫-এর জন্য নিবন্ধন শুরু হয়েছে, মুসলিমদের জন্য এটি অত্যন্ত গুরুত্বপূর্ণ একটি ধর্মীয় কার্যক্রম।",
    date: "2024-12-18",
    news_type: "trending",
    published_time: "08:00",
    image: image2,
  },
  {
    id: 2,
    category: "Religion",
    title: "ধর্মীয় সম্প্রীতির উদাহরণ স্থাপন",
    description:
      "বাংলাদেশে বিভিন্ন ধর্মের মানুষের মধ্যে সম্প্রীতির উদাহরণ হিসেবে একসঙ্গে ধর্মীয় উৎসব উদযাপন করা হচ্ছে।",
    date: "2024-12-17",
    news_type: "normal",
    published_time: "10:30",
    image: image1,
  },
  {
    id: 3,
    category: "Religion",
    title: "ধর্মীয় শিক্ষার মান উন্নয়ন কর্মসূচি",
    description:
      "ধর্মীয় শিক্ষার মান উন্নয়নে নতুন পাঠ্যক্রম প্রণয়নের উদ্যোগ নেওয়া হয়েছে।",
    date: "2024-12-16",
    news_type: "normal",
    published_time: "12:00",
    image: image3,
  },
  {
    id: 4,
    category: "Religion",
    title: "আন্তর্জাতিক কোরআন প্রতিযোগিতা অনুষ্ঠিত",
    description:
      "মক্কায় অনুষ্ঠিত আন্তর্জাতিক কোরআন প্রতিযোগিতায় বাংলাদেশি প্রতিযোগীরা অসাধারণ পারফর্ম করেছে।",
    date: "2024-12-15",
    news_type: "normal",
    published_time: "14:00",
    image: image4,
  },
  {
    id: 5,
    category: "Religion",
    title: "মন্দির উন্নয়ন প্রকল্পে সরকারি সহায়তা",
    description:
      "বাংলাদেশে মন্দির উন্নয়নের জন্য নতুন সরকারি সহায়তা প্রকল্প ঘোষণা করা হয়েছে।",
    date: "2024-12-14",
    news_type: "normal",
    published_time: "16:45",
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
        {/* Main Content - Scrollable */}
        <div className="w-full lg:w-3/4 lg:pr-4 lg:order-1 order-2">
          <TopNews data={religion} />
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
