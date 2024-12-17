import Image from "next/image";

const Advertisement = ({ banner }: any) => {
  return (
    <div className="bg-gray-400  my-4 max-h-[200px]">
      <Image src={banner} alt="banner" />
    </div>
  );
};

export default Advertisement;
