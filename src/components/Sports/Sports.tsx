"use client";
import NewsCard from "./NewsCard";
import SaidTabs from "./SaidTabs";
import SaidBar from "./SaidBar";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

const Sports = () => {
  return (
    <section className="container m-auto border-b-2">
      <div className="border-s-4 border-blue-500 my-2 flex justify-between items-center">
        <h1 className="text-4xl font-bold my-4 ps-2 ">খেলাধুলা</h1>
        <Link href="/sports">
          <p className="text-blue-600 hover:text-blue-700 flex items-center text-xl">
            আরো দেখুন{" "}
            <span>
              {" "}
              <ChevronsRight size={30} />{" "}
            </span>
          </p>
        </Link>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-3 my-4">
        <div className="lg:w-1/5 w-full lg:mt-0 mt-4">
          <SaidTabs />
        </div>
        {/* here add all section for ui */}
        <div className="lg:w-3/5">
          <NewsCard />
        </div>
        <div className="lg:w-1/5">
          <SaidBar />
        </div>
      </div>
    </section>
  );
};

export default Sports;
