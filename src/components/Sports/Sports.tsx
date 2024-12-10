"use client"
import NewsCard from "./NewsCard";
import SaidTabs from "./SaidTabs";
import SaidBar from "./SaidBar";

const Sports = () => {
  return (
    <section className="container m-auto pt-10 border-b-2">
      <div className="border-s-4 border-green-500 mb-2">
        <h1 className="text-4xl font-bold my-4 ps-2 ">খেলাধুলা</h1>
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
