import React, { useRef } from "react";
import { IonImg } from "@ionic/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface SwiperImageProps {
  images: { 
    src: string; 
    caption: string; 
    title?: string; 
    subTitle?: string;
  }[];
}

const SwiperImageOne: React.FC<SwiperImageProps> = ({ images }) => {
  const sliderRef = useRef<any>(null);

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper
      autoplay={{ delay: 3000 }}
      pagination={pagination}
      modules={[Autoplay, Pagination]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="swiperOne">
          <div />
          <p>{image.title && image.title}</p>
          <span>{image.subTitle && image.subTitle}</span>
          <IonImg
            className="swiperOneImg"
            src={image.src}
            alt={image.caption}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperImageOne;
