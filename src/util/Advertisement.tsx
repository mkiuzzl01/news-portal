import Image, { StaticImageData } from "next/image";
interface AdvertisementProps {
  banner: StaticImageData;
}

const Advertisement = ({ banner }: AdvertisementProps) => {
  return (
    <div className="bg-gray-400 my-4 max-h-[200px]">
      <Image
        src={banner.src}
        alt="banner"
        width={1200}
        height={600}
        className="w-full h-auto"
      />
    </div>
  );
};

export default Advertisement;
