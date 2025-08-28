import { IonImg } from "@ionic/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
interface SwiperImageProps {
  images: { src: string; caption: string }[];
}

const SwiperImageThree: React.FC<SwiperImageProps> = ({ images }) => {
  const pagination = {
    clickable: true,
  };

  return (
    <Swiper
      slidesPerView={1} 
      slidesPerGroup={1}
      loopAdditionalSlides={0}
      autoplay={{ delay: 2000 }}
      pagination={pagination}
      modules={[Autoplay, Pagination]}
      spaceBetween={15}
      className="swiperThree"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <IonImg
            className="swiperThreeImg"
            src={image.src}
            alt={image.caption}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperImageThree;
