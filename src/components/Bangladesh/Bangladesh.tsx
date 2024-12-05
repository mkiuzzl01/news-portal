import SaidBar from "@/util/SideBar";
import NewsCard from "./NewsCard";
import Advertise from "./Advertise";

const Bangladesh = () => {
  return (
    <div className="lg:w-4/5 m-auto flex lg:flex-row flex-col justify-between">
      {/* here add all section for ui */}
      <div className="lg:w-4/5">
        <NewsCard />
      </div>
      <div className="lg:w-1/2 ps-2 mt-[4.5rem]">
        <div className="sticky top-20">
          <SaidBar />
        </div>
        <Advertise />
      </div>
    </div>
  );
};

export default Bangladesh;
