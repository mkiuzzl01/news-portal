import LeadSection from "@/components/LeadNews/LeadSection";
import Entertainment from "@/components/Entertainment/Entertainment";
import International from "@/components/International/International";
import Sports from "@/components/Sports/Sports";
import Trending from "@/components/Trending/Trending";
import Bangladesh from "@/components/Bangladesh/Bangladesh";
import AllNews from "@/components/AllNews/AllNews";

const Page = () => {
  return (
    <div>
      <LeadSection />
      <Trending />
      <Sports />
      <Bangladesh />
      <International />
      <Entertainment />
      <AllNews />
    </div>
  );
};

export default Page;
