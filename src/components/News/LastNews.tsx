import Link from "next/link";

const newsData = [
  {
    id: 1,
    title: "বাংলাদেশে উন্নয়ন প্রকল্পে বড় সাফল্য",
    description:
      "বাংলাদেশ সম্প্রতি নতুন উন্নয়ন প্রকল্পে বড় অগ্রগতি অর্জন করেছে।",
    date: "২০২৪-১২-০৫",
  },
  {
    id: 2,
    title: "বিশ্বকাপে বাংলাদেশের জয়",
    description: "বিশ্বকাপে বাংলাদেশের ক্রিকেট দল দুর্দান্ত জয় লাভ করেছে।",
    date: "২০২৪-১২-০৪",
  },
  {
    id: 3,
    title: "পরিবেশ রক্ষায় নতুন উদ্যোগ",
    description:
      "বাংলাদেশ সরকার নতুন বনায়ন প্রকল্প শুরু করেছে পরিবেশ রক্ষার জন্য।",
    date: "২০২৪-১২-০৩",
  },
  {
    id: 4,
    title: "শীতকালীন আবহাওয়ার পূর্বাভাস",
    description:
      "আগামী সপ্তাহে শীতকাল আরো তীব্র হতে পারে বলে আবহাওয়া অধিদপ্তর জানিয়েছে।",
    date: "২০২৪-১২-০৩",
  },
  {
    id: 5,
    title: "ডিজিটাল বাংলাদেশ প্রকল্পের উন্নতি",
    description:
      "ডিজিটাল বাংলাদেশ প্রকল্পে প্রযুক্তিগত অগ্রগতির ফলে ইন্টারনেট সেবা সারা দেশে পৌঁছেছে।",
    date: "২০২৪-১২-০২",
  },
];
const LastNews = () => {
  return (
    <div
      className="p-4 h-[300px] overflow-y-auto scrollbar-hide  [&::-webkit-scrollbar]:hidden 
        [-ms-overflow-style:none] 
        [scrollbar-width:none]"
    >
      <ul className="space-y-4">
        {newsData.map((news, index) => (
          <li key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
            <Link href={`view_details/${news?.id}`}>
              <h3 className="text-lg font-semibold hover:text-blue-500">
                {news.title}
              </h3>
              <p className="text-sm text-gray-600">{news.description}</p>
              <span className="text-xs text-gray-500">{news.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastNews;
