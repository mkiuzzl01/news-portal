"use client";
import Image from "next/image";
import DateAndTime from "@/lib/dateAndTime";
import Link from "next/link";
import logo from "@public/asset/dailyTimes24.png";
import banner from "@public/asset/banner.jpg";

const topNews = [
  {
    id: "01",
    title:
      "ঢাকায় বড় পরিসরে শুরু হয়েছে বইমেলা ঢাকায় বড় পরিসরে শুরু হয়েছে বইমেলা",
    image: "/asset/topnews/image-1 (1).jpeg",
    description:
      "জাতীয় গ্রন্থাগারের প্রাঙ্গণে শুরু হয়েছে এবারের বইমেলা, যেখানে শতাধিক প্রকাশনা প্রতিষ্ঠান অংশগ্রহণ করছে।",
  },
  {
    id: "02",
    title:
      "বিশ্বকাপ ক্রিকেটে বাংলাদেশের জয় ঢাকায় বড় পরিসরে শুরু হয়েছে বইমেলা",
    image: "/asset/topnews/image-1 (1).jpg",
    description:
      "বিশ্বকাপ ক্রিকেটে পাকিস্তানকে ৫ উইকেটে হারিয়ে বাংলাদেশ দলের দুর্দান্ত পারফরম্যান্স।",
  },
  // {
  //   id: "03",
  //   title:
  //     "বিশ্বকাপ ক্রিকেটে বাংলাদেশের জয় ঢাকায় বড় পরিসরে শুরু হয়েছে বইমেলা",
  //   image: "/asset/topnews/image-1 (1).jpg",
  //   description:
  //     "বিশ্বকাপ ক্রিকেটে পাকিস্তানকে ৫ উইকেটে হারিয়ে বাংলাদেশ দলের দুর্দান্ত পারফরম্যান্স।",
  // },
];

const Header = () => {
  return (
    <section className="hidden lg:block border-b-2 border-[#B99470] py-2 bg-blue-100">
      <div className="container mx-auto px-4 grid grid-cols-4 items-center justify-between gap-4">
        
        <div className="flex items-center grid-cols-1 gap-4">
          <Link href="/">
            {" "}
            <Image
              src={logo?.src}
              placeholder="blur"
              blurDataURL={logo?.src}
              alt="daily times 24"
              width={150}
              height={100}
            />
          </Link>
          <div>
            <DateAndTime />
          </div>
        </div>

        <div className="flex col-span-1 flex-col lg:flex-row  gap-2">
          <Image
            src={banner}
            alt="banner"
            className="w-full"
            placeholder="blur"
          />
        </div>

        <div className="col-span-2 flex">
          {topNews.map((item) => (
            <div
              key={item.id}
              className="gap-2 border-s-2 border-gray-300 px-2 flex"
            >
              <div>
                <Image
                  src={item.image}
                  alt={item.title}
                  className=" object-cover"
                  placeholder="blur"
                  blurDataURL={item?.title}
                  width={100}
                  height={50}
                />
              </div>

              <div className="col-span-1 flex-1">
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
