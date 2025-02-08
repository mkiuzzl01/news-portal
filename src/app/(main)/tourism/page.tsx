import OtherNews from "@/util/OtherNews";
import TopNews from "@/util/TopNews";
import image1 from "@public/asset/environment/forest-2.jpg";
import image2 from "@public/asset/environment/forest-3.jpg";
import image3 from "@public/asset/environment/forest-4.jpg";
import image4 from "@public/asset/environment/forest-5.jpg";
import banner from "@public/asset/banner.jpg";
import image from "@public/asset/bangladesh/environment.jpg";
import SideTabs from "@/util/SideTabs";
import Advertisement_2 from "@/util/Advertisement_2";



const tourism = [
  {
    id: 1,
    category: "Tourism",
    title: "কক্সবাজারে পর্যটকের ভিড় বেড়েছে",
    description:
      "বিশ্বের দীর্ঘতম সমুদ্র সৈকত কক্সবাজারে শীত মৌসুমে পর্যটকের সংখ্যা উল্লেখযোগ্যভাবে বৃদ্ধি পেয়েছে।",
    date: "2024-12-06",
    news_type: "trending",
    published_time: "10:00",
    image: image1,
  },
  {
    id: 2,
    category: "Tourism",
    title: "সুন্দরবনে নতুন ইকো-ট্যুরিজম প্রকল্প",
    description:
      "সুন্দরবনের জীববৈচিত্র্য রক্ষা ও পর্যটনের উন্নয়নে সরকার নতুন ইকো-ট্যুরিজম প্রকল্প হাতে নিয়েছে।",
    date: "2024-12-05",
    news_type: "normal",
    published_time: "12:30",
    image: image2,
  },
  {
    id: 3,
    category: "Tourism",
    title: "সাজেক ভ্যালিতে পর্যটকদের জন্য বিশেষ অফার",
    description:
      "সাজেক ভ্যালিতে শীতকালীন ভ্রমণে আকর্ষণীয় প্যাকেজ চালু করেছে পর্যটন প্রতিষ্ঠানগুলো।",
    date: "2024-12-04",
    news_type: "normal",
    published_time: "14:00",
    image: image3,
  },
  {
    id: 4,
    category: "Tourism",
    title: "সেন্ট মার্টিনে পরিবেশ সংরক্ষণ অভিযান",
    description:
      "পর্যটনকে টেকসই রাখতে সেন্ট মার্টিন দ্বীপে পরিবেশ সংরক্ষণ কার্যক্রম শুরু হয়েছে।",
    date: "2024-12-03",
    news_type: "normal",
    published_time: "15:30",
    image: image4,
  },
  {
    id: 5,
    category: "Tourism",
    title: "রাঙামাটিতে পাহাড়ি পর্যটন বৃদ্ধি",
    description:
      "রাঙামাটির পাহাড়ি অঞ্চলে নতুন পর্যটন কেন্দ্র গড়ে উঠছে, যা পর্যটকদের জন্য নতুন আকর্ষণ হয়ে উঠেছে।",
    date: "2024-12-02",
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
        <div className="w-full lg:w-3/4 lg:pr-4 lg:order-1 order-2">
          <TopNews data={tourism} />
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
