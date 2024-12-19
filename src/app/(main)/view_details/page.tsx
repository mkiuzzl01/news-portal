import SaidBar from "@/components/Sports/SaidBar";
import NewsCard from "./__components/NewsCard";
import image1 from "@public/asset/Gallery/image-6.jpg";
import RelatedNews from "./__components/RelatedNews";
import related_news from "@public/asset/Gallery/image02.jpg";
import PaginationPages from "@/util/PaginationPages";

const newsData = {
  id: 1,
  title: "বাংলাদেশে জলবায়ু পরিবর্তন মোকাবেলা",
  category: "environment",
  description: `
    বাংলাদেশে জলবায়ু পরিবর্তন মোকাবেলা করার জন্য নতুন পরিকল্পনা ঘোষণা করা হয়েছে। 
    বাংলাদেশ সরকার বিশ্বজুড়ে জলবায়ু পরিবর্তন মোকাবেলার জন্য কাজ করছে এবং নতুন একটি পদক্ষেপ গ্রহণ করেছে। 
    এই পদক্ষেপের মধ্যে রয়েছে জলবায়ু অভিযোজন, বন্যা প্রতিরোধ এবং অন্যান্য পরিবেশবান্ধব উদ্যোগ। 
    জলবায়ু পরিবর্তনের প্রভাব বাংলাদেশে মারাত্মক হতে পারে, তাই সরকারের এই উদ্যোগ পরিবেশগত দৃষ্টিকোণ থেকে খুবই গুরুত্বপূর্ণ।`,
  date: "2024-12-10",
  time: "10:00 AM",
  image: image1,
};

const relatedNews = [
  {
    id: 1,
    title: "বিশ্বব্যাপী জলবায়ু পরিবর্তনের চ্যালেঞ্জ",
    category: "Environment",
    date: "2024-12-12",
    image: related_news,
    description:
      "জলবায়ু পরিবর্তনের চ্যালেঞ্জ মোকাবেলায় বিশ্বব্যাপী বিভিন্ন উদ্যোগ নেওয়া হচ্ছে। বাংলাদেশও এই চ্যালেঞ্জে সামনের সারিতে রয়েছে, যেখানে পরিবেশ রক্ষা এবং টেকসই উন্নয়ন নিশ্চিত করা গুরুত্বপূর্ণ।",
  },
  {
    id: 2,
    title: "কৃষিতে প্রযুক্তির ভূমিকা ও উন্নয়ন",
    category: "Agriculture",
    date: "2024-12-11",
    image: related_news,
    description:
      "বাংলাদেশের কৃষিতে প্রযুক্তির সংযোজন নতুন সম্ভাবনার দ্বার উন্মোচন করেছে। আধুনিক যন্ত্রপাতি এবং ডিজিটাল সেবা ব্যবহার করে কৃষি উৎপাদন বৃদ্ধি এবং কৃষকদের জীবনমান উন্নত হচ্ছে।",
  },
  {
    id: 3,
    title: "নতুন প্রযুক্তির যুগে বাংলাদেশ",
    category: "Technology",
    date: "2024-12-10",
    image: related_news,
    description:
      "বাংলাদেশ দ্রুত প্রযুক্তিগত অগ্রগতির পথে এগিয়ে যাচ্ছে। ই-গভর্নেন্স থেকে শুরু করে এআই এবং ব্লকচেইনের মতো নতুন প্রযুক্তি দেশের অর্থনীতি এবং সমাজে ইতিবাচক পরিবর্তন আনছে।",
  },
  {
    id: 4,
    title: "উন্নয়নের পথে বাংলাদেশের স্বাস্থ্যসেবা",
    category: "Health",
    date: "2024-12-09",
    image: related_news,
    description:
      "স্বাস্থ্যসেবা খাতে বাংলাদেশের অগ্রগতি উল্লেখযোগ্য। নতুন হাসপাতাল, উন্নত চিকিৎসা ব্যবস্থা এবং জনসচেতনতার বৃদ্ধির মাধ্যমে দেশের মানুষের স্বাস্থ্য সুরক্ষা নিশ্চিত করা হচ্ছে।",
  },
];

const Page = () => {
  return (
    <div className="container m-auto">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-3/4">
          <NewsCard news={newsData} />
          <RelatedNews data={relatedNews} />
          <PaginationPages />
        </div>

        <aside className="w-full lg:w-1/4">
          <SaidBar />
        </aside>
      </div>
    </div>
  );
};

export default Page;
