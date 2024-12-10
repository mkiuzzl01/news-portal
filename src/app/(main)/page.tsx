import LeadSection from "@/components/LeadNews/LeadSection";
import Entertainment from "@/components/Entertainment/Entertainment";
import International from "@/components/International/International";
import Sports from "@/components/Sports/Sports";
import Trending from "@/components/Trending/Trending";
import Bangladesh from "@/components/Bangladesh/Bangladesh";
import AllNews from "@/components/AllNews/AllNews";

const Page = () => {
  return (
    <div className="container mx-auto px-4">
      <LeadSection />
      <Trending />
      <Entertainment />
      <Sports />
      <Bangladesh />
      <International />
      <AllNews />
    </div>
  );
};

export default Page;
