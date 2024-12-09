import Bangladesh from "@/components/Bangladesh/Bangladesh";
import Economy from "@/components/Economy/Economy";
import Entertainment from "@/components/Entertainment/Entertainment";
import Environment from "@/components/Environment/Environment";
import International from "@/components/International/International";
import Politics from "@/components/Politics/Politics";
import Sports from "@/components/Sports/Sports";
import Technology from "@/components/Technology/Technology";
import Trending from "@/components/Tranding/Tranding";

const Page = () => {
  return (
    <div>
      <Bangladesh />
      {/* this is section gap for others */}
      <Trending />

      <Sports />
      {/* this is section gap for others */}
      
      <International />
      {/* this is section gap for others */}

      <Politics />
      {/* this is section gap for others */}

      <Economy />
      {/* this is section gap for others */}

      <Technology />
      {/* this is section gap for others */}

      <Environment />
      {/* this is section gap for others */}

      <Entertainment />
    </div>
  );
};

export default Page;
