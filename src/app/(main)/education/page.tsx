import Advertisement from "@/util/Advertisement";
import OtherNews from "@/util/OtherNews";
import SideTabs from "@/util/SideTabs";
import TopNews from "@/util/TopNews";
import image from "@public/asset/bangladesh/environment.jpg";
import image1 from "@public/asset/education/image (1).jpg";
import image2 from "@public/asset/education/image (2).jpg";
import image3 from "@public/asset/education/image (3).jpg";
import image4 from "@public/asset/education/image (4).jpg";
import banner from "@public/asset/banner.jpg";

const education = [
  {
    id: 1,
    category: "Education",
    title: "জাতীয় শিক্ষানীতি ২০২৪ ঘোষণা",
    description:
      "বাংলাদেশে নতুন শিক্ষানীতি ২০২৪ ঘোষণা করা হয়েছে, যেখানে প্রযুক্তি নির্ভর শিক্ষার উপর গুরুত্বারোপ করা হয়েছে।",
    date: "2024-12-06",
    news_type: "trending",
    published_time: "09:30",
    image: image1,
  },
  {
    id: 2,
    category: "Education",
    title: "প্রাথমিক বিদ্যালয়ের মান উন্নয়ন কর্মসূচি",
    description:
      "দেশব্যাপী প্রাথমিক বিদ্যালয়ে মান উন্নয়নের জন্য নতুন কর্মসূচি গ্রহণ করা হয়েছে।",
    date: "2024-12-05",
    news_type: "normal",
    published_time: "10:45",
    image: image2,
  },
  {
    id: 3,
    category: "Education",
    title: "অনলাইন শিক্ষা প্ল্যাটফর্মের প্রসার",
    description:
      "অনলাইন শিক্ষা প্ল্যাটফর্মের জনপ্রিয়তা বৃদ্ধি পাচ্ছে, যা শিক্ষার্থীদের জন্য নতুন সুযোগ তৈরি করছে।",
    date: "2024-12-04",
    news_type: "normal",
    published_time: "12:15",
    image: image3,
  },
  {
    id: 4,
    category: "Education",
    title: "বিশ্ববিদ্যালয়ে গবেষণার সুযোগ বৃদ্ধি",
    description:
      "বাংলাদেশের বিভিন্ন বিশ্ববিদ্যালয়ে গবেষণার সুযোগ বৃদ্ধি করার জন্য নতুন তহবিল ঘোষণা করা হয়েছে।",
    date: "2024-12-03",
    news_type: "normal",
    published_time: "14:30",
    image: image4,
  },
  {
    id: 5,
    category: "Education",
    title: "গ্রামীণ এলাকায় শিক্ষার প্রসার",
    description:
      "গ্রামীণ এলাকায় শিক্ষার প্রসারে নতুন উদ্যোগ গ্রহণ করা হয়েছে, যা শিক্ষার মান বৃদ্ধিতে সহায়ক হবে।",
    date: "2024-12-02",
    news_type: "normal",
    published_time: "16:00",
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
          <TopNews data={education} />
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
