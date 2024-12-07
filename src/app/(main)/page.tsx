import Advertisement from "@/components/Advertisement/Advertisement";
import Bangladesh from "@/components/Bangladesh/Bangladesh";
import Economy from "@/components/Economy/Economy";
import Entertainment from "@/components/Entertainment/Entertainment";
import Environment from "@/components/Environment/Environment";
import International from "@/components/International/International";
import Politics from "@/components/Politics/Politics";
import Sports from "@/components/Sports/Sports";
import Technology from "@/components/Technology/Technology";

const Page = () => {
  return (
    <div>
      <Bangladesh />
      {/* this is section gap for others */}
      <Advertisement />
      <International />
      {/* this is section gap for others */}
      <Advertisement />
      <Politics />
      {/* this is section gap for others */}
      <Advertisement />
      <Economy />
      {/* this is section gap for others */}
      <Advertisement />
      <Technology />
      {/* this is section gap for others */}
      <Advertisement />
      <Sports />
      {/* this is section gap for others */}
      <Advertisement />
      <Environment />
      {/* this is section gap for others */}
      <Advertisement />
      <Entertainment />
    </div>
  );
};

export default Page;
