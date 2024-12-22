"use client";
import Lottie from "lottie-react";
import loading from "@public/Loading.json";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Lottie
        animationData={loading}
        loop={true}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default Loading;
