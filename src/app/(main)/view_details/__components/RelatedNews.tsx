"use client";

import Image, { StaticImageData } from "next/image";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: StaticImageData | string;
  description: string;
  author?: string;
  time?: string;
}

interface RelatedNewsProps {
  data: NewsItem[];
}

const RelatedNews = ({ data }: RelatedNewsProps) => {
  return (
    <div className="w-full lg:w-3/4 m-auto pt-10">
      <h1 className="text-2xl font-bold">সম্পর্কিত খবর</h1>
      <div className="grid grid-cols-2">
        {data.map((newsItem) => (
          <div
            key={newsItem.id}
            className="flex items-start gap-4"
          >
            <Image
              src={newsItem?.image}
              alt={newsItem.title}
              className="w-20 h-20 object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold">{newsItem.title}</h2>
              <p className="text-sm text-gray-600">{newsItem.description}</p>
              <p className="text-xs text-gray-500">
                {newsItem.date} {newsItem.time ? `| ${newsItem.time}` : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedNews;
