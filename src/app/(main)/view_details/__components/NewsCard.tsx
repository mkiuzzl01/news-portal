"use client";

import Image, { StaticImageData } from "next/image";

interface News {
  id: number;
  title: string;
  category: string;
  description: string;
  date: string;
  time: string;
  image: StaticImageData;
  author?: string;
  readTime?: string;
}

interface NewsCardProps {
  news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <article className="w-full lg:w-3/4 mx-auto pt-2 bg-white">
      <div className="relative w-full h-96 overflow-hidden">
        <Image
          src={news?.image}
          alt={news?.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <header className="mt-4">
        <p className="text-sm text-gray-500">
          {news?.date} | {news?.time} {news?.author && `| By ${news.author}`}
        </p>
      </header>
      <div className="mt-2">
        <h2 className="text-2xl font-semibold text-gray-800">{news?.title}</h2>
        <p className="mt-2 text-gray-700">{news?.description}</p>
        {news?.readTime && (
          <p className="mt-1 text-sm text-gray-500">
            Estimated Read Time: {news.readTime}
          </p>
        )}
      </div>
    </article>
  );
};

export default NewsCard;
