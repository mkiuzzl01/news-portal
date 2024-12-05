import Bangladesh from "@/components/Bangladesh/Bangladesh";
import SaidBar from "@/util/SideBar";

const Page = () => {
  return (
    <div className="lg:w-4/5 m-auto flex lg:flex-row flex-col justify-between p-2">
      
        {/* here add all section for ui */}
      <div className="lg:w-4/5">
        <Bangladesh />
        {/* <Politics /> */}
      </div>
      <div className="lg:w-1/2 ps-2 mt-[4.5rem]">
        <SaidBar />
      </div>
    </div>
  );
};

export default Page;
