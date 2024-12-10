import cricket from "@public/asset/Sports/crikect.jpg";
import football from "@public/asset/Sports/football.jpg";
import hokeei from "@public/asset/Sports/hokei.jpg";
import sport from "@public/asset/Sports/sports.jpg";
import Image from "next/image";

const sports = [
  {
    id: "01",
    category: "খেলাধুলা",
    title: "বিশ্বকাপে বাংলাদেশ জয়ী",
    description:
      "বিশ্বকাপে বাংলাদেশ তাদের প্রথম ম্যাচে দুর্দান্ত জয় পেয়েছে, যা ক্রিকেটপ্রেমীদের আনন্দিত করেছে।",
    date: "২০২৪-১২-০৪",
    news_type: "trending",
    published_time: "09:00",
    image: cricket,
  },
  {
    id: "02",
    category: "খেলাধুলা",
    title: "ফুটবলে নতুন রেকর্ড",
    description:
      "ফুটবল বিশ্বে নতুন রেকর্ড তৈরি হয়েছে, যেখানে একজন প্লেয়ার এক ম্যাচে ৫ গোল করেছেন।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "12:00",
    image: football,
  },
  {
    id: "03",
    category: "খেলাধুলা",
    title: "বাংলাদেশ বেসবল টিমের সাফল্য",
    description:
      "বাংলাদেশ দেশের খেলাধুলা সম্প্রসারণের প্রতি নতুন দৃষ্টিভঙ্গি প্রদান করেছে।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "14:30",
    image: hokeei,
  },
  {
    id: "05",
    category: "খেলাধুলা",
    title: "টেনিস বিশ্বকাপে শিরোপা জয়",
    description:
      "বিশ্বকাপে একটি নতুন ইতিহাস সৃষ্টি হয়েছে, যেখানে একজন টেনিস খেলোয়াড় প্রথমবার শিরোপা জয়ী হন।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "16:00",
    image: sport,
  },
  {
    id: "06",
    category: "খেলাধুলা",
    title: "টেনিস বিশ্বকাপে শিরোপা জয়",
    description:
      "বিশ্বকাপে একটি নতুন ইতিহাস সৃষ্টি হয়েছে, যেখানে একজন টেনিস খেলোয়াড় প্রথমবার শিরোপা জয়ী হন।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "16:00",
    image: sport,
  },
  {
    id: "07",
    category: "খেলাধুলা",
    title: "টেনিস বিশ্বকাপে শিরোপা জয়",
    description:
      "বিশ্বকাপে একটি নতুন ইতিহাস সৃষ্টি হয়েছে, যেখানে একজন টেনিস খেলোয়াড় প্রথমবার শিরোপা জয়ী হন।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "16:00",
    image: sport,
  },
  {
    id: "08",
    category: "খেলাধুলা",
    title: "টেনিস বিশ্বকাপে শিরোপা জয়",
    description:
      "বিশ্বকাপে একটি নতুন ইতিহাস সৃষ্টি হয়েছে, যেখানে একজন টেনিস খেলোয়াড় প্রথমবার শিরোপা জয়ী হন।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "16:00",
    image: sport,
  },
  {
    id: "09",
    category: "খেলাধুলা",
    title: "টেনিস বিশ্বকাপে শিরোপা জয়",
    description:
      "বিশ্বকাপে একটি নতুন ইতিহাস সৃষ্টি হয়েছে, যেখানে একজন টেনিস খেলোয়াড় প্রথমবার শিরোপা জয়ী হন।",
    date: "২০২৪-১২-০৪",
    news_type: "normal",
    published_time: "16:00",
    image: sport,
  },
];

const SaidBar = () => {
  return (
    <div
      className="p-4 max-h-[400px] lg:max-h-[900px] overflow-y-auto [&::-webkit-scrollbar]:hidden 
        [-ms-overflow-style:none] 
        [scrollbar-width:none]"
    >
      <div className="grid grid-cols-1 gap-4">
        {sports?.map((news, index) => (
          <div key={index} className="flex gap-4 items-start border-b pb-4">
            {/* Content Section */}
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                {news?.title}
              </h1>
              <p>{news?.date}</p>
            </div>
            {/* Image Section */}
            <div className="w-1/2 h-full flex-shrink-0 overflow-hidden  hover:scale-105 duration-300">
              <Image
                src={news?.image}
                alt={news?.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaidBar;
