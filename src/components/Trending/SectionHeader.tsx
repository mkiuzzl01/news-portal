import React from "react";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="bg-blue-100 p-4 text-center">
      <h2 className="text-2xl font-bold text-blue-800">{title}</h2>
    </div>
  );
};

export default SectionHeader;
