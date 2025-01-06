"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface News {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
  news_type: string;
  published_time: string;
  image: StaticImageData;
}

const TrendingCard = ({ data }: { data: News[] }) => {
  return (
    <div className="grid">
      {data.map((news) => (
        <div key={news.id} className="flex flex-row bg-white pt-2">
          <Image
            src={news.image}
            alt={news.title}
            className="object-cover"
            width={200}
            height={100}
          />
          <div className="ms-4">
            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-500">
              <Link href="/view_details">{news.title}</Link>
            </h3>
            <p className="text-sm text-gray-600 mt-2">{news.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingCard;
