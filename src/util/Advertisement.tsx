import Image, { StaticImageData } from "next/image";

interface AdvertisementProps {
  banner: StaticImageData;
}

const Advertisement = ({ banner }: AdvertisementProps) => {
  return (
    <div className="bg-gray-400 w-full">
      <Image
        src={banner?.src}
        alt="banner"
        width={1200}
        height={200}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default Advertisement;
