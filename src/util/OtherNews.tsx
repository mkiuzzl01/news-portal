import Link from "next/link";
import Image from "next/image";
import PaginationPages from "./PaginationPages";

interface NewsItem {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
  image: any;
}

interface OtherNewsProps {
  relatedNews: NewsItem[];
}

const OtherNews: React.FC<OtherNewsProps> = ({ relatedNews }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedNews.map((news) => (
          <article
            key={news.id}
            className="flex items-start space-x-3 bg-white rounded-lg p-3"
          >
            <div className="w-1/3">
              <Link href={`/news/${news?.id}`} className="block">
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src={news?.image}
                    alt={news?.title}
                    placeholder="blur"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>

            <div className="w-2/3 ps-2 space-y-2">
              <Link href={`/news/${news.id}`} className="block group">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {news.title}
                </h2>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <PaginationPages />
    </div>
  );
};

export default OtherNews;
