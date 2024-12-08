import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const newsData = [
    "দেশের সকল নাগরিকদের জন্য সুখবর - নতুন আইন চালু হয়েছে।",
    "বাংলাদেশের GDP ২০২৪ সালে বৃদ্ধি পাবে ৭%।",
    "রাজধানীতে নতুন মেট্রোরেল চালু, যাত্রীদের জন্য সুখবর।",
    "করোনা ভাইরাসের নতুন ধরনের সংক্রমণ ছড়াচ্ছে, সতর্ক থাকুন।",
    "ফুটবল বিশ্বকাপে বাংলাদেশ ফুটবল দল বড় জয় পেয়েছে!",
  ];

  return (
    <div className="flex" style={{ background: "#333", color: "#fff", padding: "10px 0" }}>
      <h2 style={{ textAlign: "center",  }}>
        ব্রেকিং নিউজ
      </h2>
      <Marquee>
        {newsData.map((news, index) => (
          <div key={index} style={{ marginRight: "50px", fontSize: "16px" }}>
            {news}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
