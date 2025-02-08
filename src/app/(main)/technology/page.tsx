import TopNews from "@/util/TopNews";
import image_1 from "@public/asset/Technology/coding.jpg";
import image_2 from "@public/asset/Technology/industry.jpg";
import image_3 from "@public/asset/Technology/monitoring.jpg";
import image_4 from "@public/asset/Technology/programming.jpg";
import banner from "@public/asset/banner.jpg";
import image from "@public/asset/bangladesh/environment.jpg";
import OtherNews from "@/util/OtherNews";
import SideTabs from "@/util/SideTabs";
import Advertisement_2 from "@/util/Advertisement_2";

const technology = [
  {
    id: 1,
    category: "Technology",
    title: "বাংলাদেশে প্রথমবারের মতো ৫জি ইন্টারনেট চালু",
    description:
      "বাংলাদেশে ৫জি প্রযুক্তির যুগ শুরু হয়েছে, যা দ্রুতগতির ইন্টারনেট সংযোগের জন্য নতুন সম্ভাবনার দরজা খুলে দিচ্ছে।",
    date: "2024-12-06",
    news_type: "trending",
    published_time: "10:30",
    image: image_1,
  },
  {
    id: 2,
    category: "Technology",
    title: "দেশীয় প্রযুক্তি স্টার্টআপে বিনিয়োগ বাড়ছে",
    description:
      "বাংলাদেশে নতুন নতুন প্রযুক্তি স্টার্টআপে বিনিয়োগ বৃদ্ধি পাচ্ছে, যা অর্থনীতিতে ইতিবাচক প্রভাব ফেলছে।",
    date: "2024-12-05",
    news_type: "normal",
    published_time: "12:00",
    image: image_2,
  },
  {
    id: 3,
    category: "Technology",
    title: "আর্টিফিশিয়াল ইন্টেলিজেন্সে দেশের সাফল্য",
    description:
      "বাংলাদেশে আর্টিফিশিয়াল ইন্টেলিজেন্স প্রযুক্তিতে বড় সাফল্য এসেছে, যা আন্তর্জাতিক পরিমণ্ডলে দেশের নাম উজ্জ্বল করছে।",
    date: "2024-12-04",
    news_type: "normal",
    published_time: "14:00",
    image: image_3,
  },
  {
    id: 4,
    category: "Technology",
    title: "ই-গভর্ন্যান্স সেবার নতুন যুগ",
    description:
      "সরকার ই-গভর্ন্যান্স সেবাকে আরও উন্নত করতে ডিজিটাল প্ল্যাটফর্মে নতুন সেবা চালু করেছে।",
    date: "2024-12-03",
    news_type: "normal",
    published_time: "15:30",
    image: image_4,
  },
  {
    id: 5,
    category: "Technology",
    title: "স্থানীয়ভাবে তৈরি ড্রোন প্রযুক্তি",
    description:
      "বাংলাদেশে স্থানীয়ভাবে ড্রোন তৈরি ও এর ব্যবহার প্রযুক্তি খাতকে সমৃদ্ধ করছে।",
    date: "2024-12-02",
    news_type: "normal",
    published_time: "17:00",
    image: image_4,
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
          <TopNews data={technology} />
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
