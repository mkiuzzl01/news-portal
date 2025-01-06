"use client";

import dynamic from "next/dynamic";
import loading from "@public/Loading.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Loading = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-4">Loading.....</h1>
      <Lottie
        animationData={loading}
        loop={true}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default Loading;
