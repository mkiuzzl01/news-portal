const politicsData = [
  {
    id: "01",
    title: "সংসদে নতুন কর সংস্কার বিল পাস",
    image: "/images/politics/tax-reform.jpg",
    description:
      "সরকার সংসদে নতুন কর সংস্কার বিল পাস করেছে, যা কর ব্যবস্থাকে সরলীকরণ ও রাজস্ব বৃদ্ধির প্রতিশ্রুতি দিচ্ছে।",
    category: "রাজনীতি",
    date: "২০২৪-১২-০৪",
    source: "জাতীয় সংবাদ সংস্থা",
  },
  {
    id: "02",
    title: "বিরোধী দলের নেতা বাজেট বরাদ্দ নিয়ে সমালোচনা করেছেন",
    image: "/images/politics/opposition-leader.jpg",
    description:
      "বিরোধী দলের নেতা সম্প্রতি ঘোষিত বাজেটকে সমালোচনা করেছেন, দাবি করেছেন এটি মধ্যবিত্তের উদ্বেগগুলিকে সমাধান করতে ব্যর্থ হয়েছে।",
    category: "রাজনীতি",
    date: "২০২৪-১২-০৪",
    source: "প্রতিদিনের খবর",
  },
  {
    id: "03",
    title: "স্থানীয় সরকার নির্বাচনের তারিখ ঘোষণা",
    image: "/images/politics/local-election.jpg",
    description:
      "নির্বাচন কমিশন স্থানীয় সরকার নির্বাচনের তারিখ ঘোষণা করেছে, যা আগামী মাসে অনুষ্ঠিত হবে।",
    category: "রাজনীতি",
    date: "২০২৪-১২-০৪",
    source: "নির্বাচন আপডেট",
  },
  {
    id: "04",
    title: "সাংসদদের বেতন বৃদ্ধির প্রস্তাব",
    image: "/images/politics/mp-salary.jpg",
    description:
      "সরকার সাংসদদের বেতন বাড়ানোর একটি প্রস্তাব বিবেচনা করছে, যা জনগণের মধ্যে মিশ্র প্রতিক্রিয়া সৃষ্টি করেছে।",
    category: "রাজনীতি",
    date: "২০২৪-১২-০৪",
    source: "রাজনৈতিক পর্যালোচনা",
  },
  {
    id: "05",
    title: "রাজনৈতিক দলগুলির মধ্যে ঐক্য আলোচনা শুরু",
    image: "/images/politics/political-unity.jpg",
    description:
      "রাজনৈতিক দলগুলির মধ্যে ঐক্য আলোচনা শুরু হয়েছে, যা দেশকে সামনে এগিয়ে নিতে সহায়ক হতে পারে বলে আশা করা হচ্ছে।",
    category: "রাজনীতি",
    date: "২০২৪-১২-০৪",
    source: "খবরের সময়",
  },
];

const Politics = () => {
  return (
    <section>
      <div>
        {politicsData?.map((news, index) => (
          <div key={index} className="m-2 p-5 bg-gray-500">
            <h1>{news?.title}</h1>
            <p>{news?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Politics;
