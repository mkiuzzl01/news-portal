import LeadSection from "@/components/LeadNews/LeadSection";
import Entertainment from "@/components/Entertainment/Entertainment";
import International from "@/components/International/International";
import Sports from "@/components/Sports/Sports";
import Trending from "@/components/Trending/Trending";
import Bangladesh from "@/components/Bangladesh/Bangladesh";

const Page = () => {
  return (
    <div>
      <LeadSection />
      <Trending />
      <Sports />
      <Bangladesh />
      <International />
      <Entertainment />
    </div>
  );
};

export default Page;
