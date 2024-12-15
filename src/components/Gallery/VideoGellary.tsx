"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  PlayIcon,
} from "lucide-react";
import Link from "next/link";

const newsData = [
  {
    id: 1,
    title: "বিশ্ব অর্থনৈতিক পরিবর্তন চলছে",
    description:
      "বিশ্ব বাণিজ্যে গুরুত্বপূর্ণ পরিবর্তনের পূর্বাভাস দিয়েছেন বিশেষজ্ঞরা",
    date: "১২ ডিসেম্বর, ২০২৪",
    Thumbnail: "/asset/Gallery/image-3.jpg",
    alt: "Breaking News 1",
    category: "অর্থনীতি",
    videoUrl:
      "https://www.youtube.com/watch?v=lE6RYpe9IT0&t=3s&ab_channel=321Relaxing-MeditationRelaxClips",
  },
  {
    id: 2,
    title: "নবীন প্রযুক্তি রিনিউয়েবল এনার্জিতে বিপ্লব",
    description:
      "নতুন সৌর প্রযুক্তি বর্তমান মডেলের চেয়ে ৫০% বেশি কার্যকারিতা প্রদানের প্রতিশ্রুতি দেয়",
    date: "১১ ডিসেম্বর, ২০২৪",
    Thumbnail: "/asset/Gallery/image-4.jpg",
    alt: "Breaking News 2",
    category: "প্রযুক্তি",
    videoUrl:
      "https://www.youtube.com/watch?v=lE6RYpe9IT0&t=3s&ab_channel=321Relaxing-MeditationRelaxClips",
  },
  {
    id: 3,
    title: "জলবায়ু পরিবর্তন সম্মেলন ফলপ্রসূ হচ্ছে",
    description: "বিশ্ব নেতারা কঠোর কার্বন হ্রাস লক্ষ্য পূরণের অঙ্গীকার করেছেন",
    date: "১০ ডিসেম্বর, ২০২৪",
    Thumbnail: "/asset/Gallery/image-5.jpg",
    alt: "Breaking News 3",
    category: "পরিবেশ",
    videoUrl:
      "https://www.youtube.com/watch?v=lE6RYpe9IT0&t=3s&ab_channel=321Relaxing-MeditationRelaxClips",
  },
  {
    id: 4,
    title: "স্বাস্থ্যখাতে উদ্ভাবন রোগী সেবা উন্নত করছে",
    description:
      "এআই-চালিত ডায়াগনস্টিক সিস্টেমগুলি রোগের প্রাথমিক শনাক্তকরণে অসাধারণ নির্ভুলতা দেখাচ্ছে",
    date: "৯ ডিসেম্বর, ২০২৪",
    Thumbnail: "/asset/Gallery/image-6.jpg",
    alt: "Breaking News 4",
    category: "স্বাস্থ্য",
    videoUrl:
      "https://www.youtube.com/watch?v=lE6RYpe9IT0&t=3s&ab_channel=321Relaxing-MeditationRelaxClips",
  },
  {
    id: 5,
    title: "মহাকাশ অন্বেষণ নতুন মাইলফলকে পৌঁছেছে",
    description:
      "আন্তর্জাতিক মিশন চাঁদে গুরুত্বপূর্ণ গবেষণার জন্য প্রস্তুতি নিচ্ছে",
    date: "৮ ডিসেম্বর, ২০২৪",
    Thumbnail: "/asset/Gallery/image02.jpg",
    alt: "Breaking News 5",
    category: "বিজ্ঞান",
    videoUrl:
      "https://www.youtube.com/watch?v=lE6RYpe9IT0&t=3s&ab_channel=321Relaxing-MeditationRelaxClips",
  },
];

const NewsSlider: React.FC = () => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToPrevious = useCallback((): void => {
    setCurrentCarouselIndex((prevIndex) =>
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );
  }, []);

  const goToNext = useCallback((): void => {
    setCurrentCarouselIndex((prevIndex) =>
      prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (!isPaused) {
      intervalRef.current = setInterval(goToNext, 2000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [goToNext, isPaused]);

  const handleSideImageClick = (index: number): void => {
    setCurrentCarouselIndex(index);
  };

  return (
    <div className="py-8">
      <div className="border-t-2 py-2 flex justify-between">
        <h1 className="text-4xl font-semibold border-s-4 border-blue-500 ps-2">
          ভিডিও
        </h1>
        <Link href="/allNews">
          <p className="text-blue-600 hover:text-blue-700 flex items-center text-xl">
            আরো দেখুন{" "}
            <span>
              {" "}
              <ChevronsRight size={30} />{" "}
            </span>
          </p>
        </Link>
      </div>
      <div>
        <div className="flex flex-col md:flex-row-reverse gap-6">
          <div
            className="w-full md:w-2/3 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative overflow-hidden">
              <Image
                src={newsData[currentCarouselIndex].Thumbnail}
                alt={newsData[currentCarouselIndex].alt}
                width={1200}
                height={600}
                className="object-cover"
                priority={currentCarouselIndex === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-100 transition-opacity duration-300">
                <Link
                  href={newsData[currentCarouselIndex].videoUrl}
                  target="_blank"
                >
                  <div className="bg-red-400 hover:bg-red-600 p-5 rounded-full text-white ">
                    <PlayIcon />
                  </div>
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-300">
                    {newsData[currentCarouselIndex].date}
                  </span>
                </div>
                <Link
                  href={`view_details/${currentCarouselIndex}`}
                  className="hover:text-blue-500"
                >
                  <h2 className="text-2xl font-bold mb-2">
                    {newsData[currentCarouselIndex].title}
                  </h2>
                  <p className="text-sm text-gray-200">
                    {newsData[currentCarouselIndex].description}
                  </p>
                </Link>
              </div>
              <div className="absolute top-3 right-3 space-x-2">
                <button
                  onClick={goToPrevious}
                  aria-label="Previous News"
                  className=" bg-white/50 rounded-full p-1 hover:bg-white/75 z-10"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={goToNext}
                  aria-label="Next News"
                  className=" bg-white/50 rounded-full p-1 hover:bg-white/75 z-10"
                >
                  <ChevronRight size={32} />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex-1 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {newsData.map((newsItem, index) => (
              <div
                key={newsItem.id}
                onClick={() => handleSideImageClick(index)}
                className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300 relative"
              >
                <div>
                  <Image
                    src={newsItem.Thumbnail}
                    alt={newsItem.alt}
                    width={1200}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="mt-2">
                  <p className="font-semibold hover:text-blue-500">
                    <Link href={`view_details/${newsItem.id}`}>
                      {newsItem.title}
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;
