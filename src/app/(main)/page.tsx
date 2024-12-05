import Politics from "@/components/Politics/Politics";
import SaidBar from "@/util/SideBar";

const Page = () => {
  return (
    <div className="lg:w-4/5 m-auto flex lg:flex-row flex-col justify-between p-2">
      <div className="lg:w-3/5">
    {/* here add all section for ui */}
    
        <Politics />
      </div>
      <div className="lg:w-2/5 ps-2">
        <SaidBar />
      </div>
    </div>
  );
};

export default Page;
