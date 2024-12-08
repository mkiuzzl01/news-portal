import Image from "next/image";
import DateAndTime from "@/lib/dateAndTime";
import Link from "next/link";

const topNews = [
  {
    id: "01",
    title: "ঢাকায় বড় পরিসরে শুরু হয়েছে বইমেলা",
    image: "/asset/topnews/image-1 (1).jpeg",
    description:
      "জাতীয় গ্রন্থাগারের প্রাঙ্গণে শুরু হয়েছে এবারের বইমেলা, যেখানে শতাধিক প্রকাশনা প্রতিষ্ঠান অংশগ্রহণ করছে।",
  },
  {
    id: "02",
    title: "বিশ্বকাপ ক্রিকেটে বাংলাদেশের জয়",
    image: "/asset/topnews/image-1 (1).jpg",
    description:
      "বিশ্বকাপ ক্রিকেটে পাকিস্তানকে ৫ উইকেটে হারিয়ে বাংলাদেশ দলের দুর্দান্ত পারফরম্যান্স।",
  },
  {
    id: "03",
    title: "শীতকালীন শৈত্যপ্রবাহ শুরু",
    image: "/asset/topnews/image-1 (1).jpeg",
    description:
      "উত্তরাঞ্চলে শুরু হয়েছে শীতকালীন শৈত্যপ্রবাহ, তাপমাত্রা নেমে এসেছে ১০ ডিগ্রি সেলসিয়াসের নিচে।",
  },
];

const Header = () => {
  return (
    <section className="hidden lg:block border-b-2 border-[#B99470]  py-4 bg-gray-200">
      <div className="container mx-auto flex flex-row items-center gap-4">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl font-extrabold pb-2">
            Daily Time <span className="text-red-500">24</span>
          </h1>
          <div>
            <DateAndTime />
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row gap-2">
          {topNews.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 border-s-2 border-gray-300 p-2"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-md object-cover"
                width={80}
                height={80}
              />

              <div className="flex flex-col justify-center">
                <h2 className="text-sm font-semibold hover:text-blue-500">
                  <Link href={item?.id}>{item.title}</Link>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
