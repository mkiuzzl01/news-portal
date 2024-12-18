import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import PaginationPages from "./PaginationPages";

interface NewsDataType {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string | StaticImageData;
}

interface newsData {
  data: NewsDataType[];
}

const OtherNews = ({ relatedNews }: newsData) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedNews.map((news) => (
          <div
            key={news.id}
            className="flex items-start space-x-3 bg-white rounded-lg p-3"
          >
            <div className="w-1/3 shrink-0">
              <Link href={`view_details/${news.id}`}>
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </Link>
            </div>

            <div className="w-2/3 space-y-2">
              <Link href={`view_details/${news.id}`}>
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
      <div className="py-5">
        <PaginationPages />
      </div>
    </div>
  );
};

export default OtherNews;
