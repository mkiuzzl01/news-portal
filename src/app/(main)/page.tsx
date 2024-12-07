import Advertisement from "@/components/Advertisement/Advertisement";
import Bangladesh from "@/components/Bangladesh/Bangladesh";
import Economy from "@/components/Economy/page";
import International from "@/components/International/International";
import Politics from "@/components/Politics/Politics";

const Page = () => {
  return (
    <div>
      <Bangladesh />
      {/* this is section gap for others */}
      <Advertisement />
      <International />
      <Politics />
      <Economy />
    </div>
  );
};

export default Page;
