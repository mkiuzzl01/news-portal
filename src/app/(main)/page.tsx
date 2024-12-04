import Politics from "@/components/Politics/Politics";

const Page = () => {
  return (
    <div className="lg:w-4/5 m-auto flex lg:flex-row flex-col justify-between">
      <div className="lg:w-3/5">
        <Politics />
      </div>
      <div className="lg:w-2/5">
        <h1>This is Sidebar</h1>
      </div>
    </div>
  );
};

export default Page;
