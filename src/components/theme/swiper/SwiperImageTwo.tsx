import React, { useRef, useCallback } from "react";
import { IonCard, IonImg, IonIcon } from "@ionic/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { chevronBackOutline, chevronForwardOutline } from "ionicons/icons";

interface SwiperImageProps {
  images: { src: string; caption: string }[];
}

const SwiperImageTwo: React.FC<SwiperImageProps> = ({ images }) => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index:any, className:any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <IonCard>
      <Swiper
        ref={sliderRef}
        slidesPerView={1} 
        slidesPerGroup={1}
        loopAdditionalSlides={0}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <IonImg src={image.src} alt={image.caption}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <IonIcon
        icon={chevronBackOutline}
        className="prev-arrow"
        onClick={handlePrev}
      />
      <IonIcon
        icon={chevronForwardOutline}
        className="next-arrow"
        onClick={handleNext}
      />
    </IonCard>
  );
};

export default SwiperImageTwo;
