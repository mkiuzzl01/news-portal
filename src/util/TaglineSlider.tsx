"use client";
import React, { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

interface NewsTag {
  tag_id: string;
  image: StaticImageData;
  title: string;
}

interface TaglineSliderProps {
  data: NewsTag[];
}

const TaglineSlider: FC<TaglineSliderProps> = ({ data }) => {
  
  return (
    <div className="mt-4 relative">
      <Carousel>
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem key={item.tag_id} className="px-4">
              <div className="flex flex-col items-center">
               <div className="w-full lg:h-[300px]">
               <Image
                  src={item?.image}
                  alt={`Tagline image: ${item.title}`}
                  width={1200}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
               </div>
                <p className="mt-2 text-center text-gray-700">{item.title}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrow buttons */}
        <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all">
          &lt;
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all">
          &gt;
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default TaglineSlider;
