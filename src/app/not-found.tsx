"use client";
import Lottie from "lottie-react";
import Link from "next/link";
import error from "@public/error.json";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center">
        <Lottie 
          animationData={error} 
          loop={true} 
          style={{ width: 300, height: 300 }}
        />
      </div>
      <h2 className="text-4xl font-semibold">Not Found</h2>
      <p>Could not find the requested resource.</p>
      <button className="px-4 py-2 bg-gray-200 my-4 hover:bg-gray-400">
        <Link href="/" className="text-xl">
          Return Home
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
