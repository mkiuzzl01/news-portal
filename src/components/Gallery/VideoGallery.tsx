"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  PlayIcon,
  X,
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
    videoUrl: "https://www.youtube.com/embed/lE6RYpe9IT0?autoplay=1",
  },
  {
    id: 2,
    title: "নবীন প্রযুক্তি রিনিউয়েবল এনার্জিতে বিপ্লব",
    description:
      "নতুন সৌর প্রযুক্তি বর্তমান মডেলের চেয়ে ৫০% বেশি কার্যকারিতা প্রদানের প্রতিশ্রুতি দেয়",
    date: "১১ ডিসেম্বর, ২০২৪",
    Thumbnail: "/asset/Gallery/image-4.jpg",
    alt: "Breaking News 2",
    videoUrl: "https://www.youtube.com/embed/BumD3DxlxeM?autoplay=1",
  },
  {
    id: 3,
    title: "জলবায়ু পরিবর্তন সম্মেলন ফলপ্রসূ হচ্ছে",
    description: "বিশ্ব নেতারা কঠোর কার্বন হ্রাস লক্ষ্য পূরণের অঙ্গীকার করেছেন",
    date: "১০ ডিসেম্বর, ২০২৪",
    Thumbnail: "/asset/Gallery/image-5.jpg",
    alt: "Breaking News 3",
    videoUrl: "https://www.youtube.com/embed/lE6RYpe9IT0?autoplay=1",
  },
  {
    id: 4,
    title: "জলবায়ু পরিবর্তন সম্মেলন ফলপ্রসূ হচ্ছে",
    description: "বিশ্ব নেতারা কঠোর কার্বন হ্রাস লক্ষ্য পূরণের অঙ্গীকার করেছেন",
    date: "১০ ডিসেম্বর, ২০২৪",
    Thumbnail: "/asset/Gallery/image02.jpg",
    alt: "Breaking News 3",
    videoUrl: "https://www.youtube.com/embed/lE6RYpe9IT0?autoplay=1",
  },
  {
    id: 5,
    title: "জলবায়ু পরিবর্তন সম্মেলন ফলপ্রসূ হচ্ছে",
    description: "বিশ্ব নেতারা কঠোর কার্বন হ্রাস লক্ষ্য পূরণের অঙ্গীকার করেছেন",
    date: "১০ ডিসেম্বর, ২০২৪",
    Thumbnail: "/asset/Gallery/image.jpg",
    alt: "Breaking News 3",
    videoUrl: "https://www.youtube.com/embed/lE6RYpe9IT0?autoplay=1",
  },
];

const VideoGallery = () => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToPrevious = useCallback(() => {
    setCurrentCarouselIndex((prevIndex) =>
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentCarouselIndex((prevIndex) =>
      prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (!isPaused && !isVideoModalOpen) {
      intervalRef.current = setInterval(goToNext, 2000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [goToNext, isPaused, isVideoModalOpen]);

  const handleSideImageClick = (index: React.SetStateAction<number>) => {
    setCurrentCarouselIndex(index);
  };

  const VideoModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-black overflow-hidden">
        <button
          onClick={() => setIsVideoModalOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <X size={24} />
        </button>
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={newsData[currentCarouselIndex].videoUrl}
            title={newsData[currentCarouselIndex].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );

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
              <ChevronsRight size={30} />
            </span>
          </p>
        </Link>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          <div
            className="w-full lg:w-2/3 relative"
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
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="bg-red-400 hover:bg-red-600 p-5 rounded-full text-white"
                >
                  <PlayIcon />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-1 lg:p-4">
                <h2 className="text-xl lg:text-2xl font-bold mb-2 hover:text-blue-500">
                  <Link href={`/view_details`}>
                    {newsData[currentCarouselIndex].title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-200 hidden lg:block">
                  {newsData[currentCarouselIndex].description}
                </p>
              </div>
              <div className="absolute top-3 right-3 space-x-2">
                <button
                  onClick={goToPrevious}
                  className="bg-white/50 rounded-full p-1 hover:bg-white/75 z-10"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={goToNext}
                  className="bg-white/50 rounded-full p-1 hover:bg-white/75 z-10"
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
                className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={newsItem.Thumbnail}
                  alt={newsItem.alt}
                  width={1200}
                  height={600}
                  className="object-cover"
                />
                <h2 className="font-semibold hover:text-blue-500">
                  <Link href={`/view_details`}> {newsItem.title}</Link>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isVideoModalOpen && <VideoModal />}
    </div>
  );
};

export default VideoGallery;
