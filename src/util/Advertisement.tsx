import Image, { StaticImageData } from "next/image";

interface AdvertisementProps {
  banner: StaticImageData;
}

const Advertisement = ({ banner }: AdvertisementProps) => {
  return (
    <div className="w-full my-4 h-[300px]">
      <Image
        src={banner}
        placeholder="blur"
        alt="Advertisement banner"
        layout="responsive"
        objectFit="cover"
        width={1000} 
        height={300}
        className="w-full"
      />
    </div>
  );
};

export default Advertisement;
