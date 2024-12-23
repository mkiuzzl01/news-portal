import { X } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  Thumbnail: string;
  alt: string;
  videoUrl: string;
}

interface VideoModalProps {
  newsData: NewsItem[];
  setIsVideoModalOpen: (isOpen: boolean) => void;
  currentCarouselIndex: number;
}

const VideoModal: React.FC<VideoModalProps> = ({ newsData, setIsVideoModalOpen, currentCarouselIndex }) => {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-black overflow-hidden">
          <button
            onClick={() => setIsVideoModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X size={24} />
          </button>
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={newsData[currentCarouselIndex]?.videoUrl}
              title={newsData[currentCarouselIndex]?.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
