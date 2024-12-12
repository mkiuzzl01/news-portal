import { ChevronsRight } from "lucide-react";
import Link from "next/link";

const VideoGallery = () => {
  return (
    <div className="container m-auto">
      <div className="border-t-2 mt-4 py-4 flex justify-between">
        <h1 className="text-4xl font-semibold border-s-4 border-blue-500 ps-2">
          ভিডিও
        </h1>
        <Link href="/allNews">
          <p className="text-blue-600 hover:text-blue-700 flex items-center text-xl">
            আরো দেখুন{" "}
            <span>f
              {" "}
              <ChevronsRight size={30} />{" "}
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default VideoGallery;
