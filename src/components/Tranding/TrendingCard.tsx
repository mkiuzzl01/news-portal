import React from "react";
import Image from "next/image";

const TrendingCard = ({ data }) => {
  return (
    <div className="grid gap-6">
      {data.map((news) => (
        <div
          key={news.id}
          className="flex flex-row bg-white p-4"
        >
          <Image
            src={news.image}
            alt={news.title}
            className="object-cover"
            width={200}
            height={100}
          />
          <div className="ms-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {news.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{news.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingCard;
