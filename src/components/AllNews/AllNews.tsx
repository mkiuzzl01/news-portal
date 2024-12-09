import React from "react";
import Education from "../News/Education";
import Jobs from "../News/Jobs";
import Technology from "../News/Technology";

const AllNews = () => {
  return (
    <div className="container m-auto">
      <div className="grid grid-cols-3 gap-4 my-10">
        <Education></Education>
        <Jobs />
        <Technology />
      </div>
    </div>
  );
};

export default AllNews;
