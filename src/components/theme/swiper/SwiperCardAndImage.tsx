import React from "react";
import {
  IonRow,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonCol,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { useHistory } from 'react-router-dom';
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  arrowRedoCircle,
  heartCircleSharp,
  star,
  starOutline,
  starHalf,
} from "ionicons/icons";
/* Components */
import { Button } from "../button/Button";

import type { ImageItem } from "../../../types";

interface SwiperImageProps {
  images: ImageItem[];
  onAddToCart: (item: ImageItem) => void;
}

const SwiperCardAndImage: React.FC<SwiperImageProps> = ({
  images,
  onAddToCart,
}) => {
  const history = useHistory();
  return (
    <Swiper
      slidesPerView={1}
      slidesPerGroup={1}
      loopAdditionalSlides={0}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay, Pagination]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <IonCard className="swiperCard">
            <IonImg src={image.src} alt={image.caption} />
            <IonCardHeader>
              <IonCardTitle>
                <h2 className="swiperCardTitle">
                  {image.title}
                  <span>
                    <span className="originalPrice">{image.originalPrice}</span>
                    {image.discountedPrice}
                  </span>
                </h2>
                <IonCardSubtitle className="swiperCardSubTitle">
                  {image.subtitle}
                  <span>
                    <IonIcon className="star" icon={star} />
                    <IonIcon className="star" icon={star} />
                    <IonIcon className="star" icon={starHalf} />
                    <IonIcon className="star" icon={starOutline} />
                    <IonIcon className="star" icon={starOutline} />
                    <p>(456 comment)</p>
                  </span>
                </IonCardSubtitle>
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <IonRow>
                <IonCol className="shareCol" size="6">
                  <b>Share or Save for later</b>
                </IonCol>
                <IonCol size="2" />
                <IonCol size="4">
                  <span>
                    <IonIcon
                      className="shareButton"
                      color="primary"
                      icon={arrowRedoCircle}
                    />
                    <IonIcon
                      className="heartButton"
                      color="danger"
                      icon={heartCircleSharp}
                    />
                  </span>
                </IonCol>
              </IonRow>
              <IonAccordionGroup>
                <IonAccordion value="details" toggleIconSlot="start">
                  <IonItem slot="header">
                    <IonLabel>Details</IonLabel>
                  </IonItem>
                  <div className="ion-padding" slot="content">
                    {image.details}
                  </div>
                </IonAccordion>
              </IonAccordionGroup>
              <Button
                color="success"
                label="ADD TO CART"
                onClick={() => {
                  onAddToCart(image);
                  history.push("/basket");
                }}
              />
            </IonCardContent>
          </IonCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCardAndImage;
