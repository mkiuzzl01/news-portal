import Advertise from "../Bangladesh/Advertise";
import NewsCard from "./NewsCard";

const International = () => {
  return (
    <div className="lg:w-4/5 m-auto flex lg:flex-row flex-col justify-between">
      {/* here add all section for ui */}
      <div className="lg:w-4/5">
        <NewsCard />
      </div>
      <div className="lg:w-1/2 ps-2 mt-[4.5rem]">
        <Advertise />
      </div>
    </div>
  );
};

export default International;
