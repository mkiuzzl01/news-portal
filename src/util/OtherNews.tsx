import Link from "next/link";
import PaginationPages from "./PaginationPages";
import Image, { StaticImageData } from "next/image";

interface newsData {
  relatedNews: {
    id: number;
    category: string;
    title: string;
    description: string;
    date: string;
    image: StaticImageData;
  }[];
}

const OtherNews = ({ relatedNews }:newsData) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedNews.map((news) => (
          <div
            key={news.id}
            className="flex items-start space-x-3 bg-white rounded-lg p-3"
          >
            <div className="w-1/3 shrink-0">
              <Link href={`view_details`}>
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </Link>
            </div>

            <div className="w-2/3 flex-1 ms-2 space-y-2">
              <Link href={`view_details`}>
                <h2 className="text-base font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
                  {news.title}
                </h2>
              </Link>

              <p className="text-sm text-gray-600 line-clamp-2">
                {news.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <PaginationPages />
      </div>
    </div>
  );
};

export default OtherNews;
