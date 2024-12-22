"use client";
import Image, { StaticImageData } from "next/image";
import TaglineSlider from "../../../../util/TaglineSlider";

interface NewsTag {
  tag_id: string;
  image: StaticImageData;
  title: string;
}

interface NewsTypes {
  id: number;
  title: string;
  category: string;
  description: string;
  date: string;
  time: string;
  image: StaticImageData;
  tagLine: NewsTag[];
  author?: string;
  readTime?: string;
}

interface NewsCardProps {
  news: NewsTypes;
}
const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <article className=" pt-2 bg-white">
      <div className="relative w-full h-full lg:h-96 overflow-hidden">
        <Image src={news?.image} alt={news?.title} objectFit="cover" />
      </div>
      <header className="mt-4">
        <p className="text-sm text-gray-500">
          {news?.date} | {news?.time} {news?.author && `| By ${news.author}`}
        </p>
      </header>
      <div className="mt-2">
        <h2 className="text-2xl font-semibold text-gray-800">{news?.title}</h2>
        <p className="mt-2 text-gray-700">{news?.description}</p>

        {/* tagline related carousel */}
        <div>
          {news?.tagLine?.length !== 0 && <TaglineSlider data={news?.tagLine} />}
        </div>
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
