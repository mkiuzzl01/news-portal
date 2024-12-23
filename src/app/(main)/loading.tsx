"use client";
import Lottie from "lottie-react";
import loading from "@public/Loading.json";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-3xl font-semibold">Loading.....</h1>
      <Lottie
        animationData={loading}
        loop={true}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default Loading;
