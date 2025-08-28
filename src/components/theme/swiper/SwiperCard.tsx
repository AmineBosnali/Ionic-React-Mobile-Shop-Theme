import React from "react";
import {
  IonRow,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
/* Components */
import { Button } from "../button/Button";

import { logoWhatsapp, logoFacebook, logoTwitter } from "ionicons/icons";

const SwiperCard: React.FC = () => {
  return (
    <Swiper

    autoplay={{ delay: 3000 }}
    modules={[Autoplay, Pagination]}
    >
      <SwiperSlide>
        <IonCard className="swiperCard">
          <IonCardHeader>
            <IonCardTitle>Check out hourly deals</IonCardTitle>
          </IonCardHeader>
          <IonCardSubtitle>Don't miss the coupons</IonCardSubtitle>
          <IonCardContent>
            Make your shopping more affordable by using coupons
            <IonRow className="swiperCard row">
              <Button
                color="default"
                size="default"
                label="Coupons"
                onClick={() => console.log("Coupons clicked")}
              />
            </IonRow>
          </IonCardContent>
        </IonCard>
      </SwiperSlide>
      <SwiperSlide>
        <IonCard className="swiperCard">
          <IonCardHeader>
            <IonCardTitle>Let's get Social</IonCardTitle>
          </IonCardHeader>
          <IonCardSubtitle>Share with your friends and earn</IonCardSubtitle>
          <IonCardContent>
            Invite and earn coupons
            <IonRow className="swiperCard row">
              <Button
                color="default"
                size="default"
                icon={<IonIcon size="small" icon={logoFacebook}></IonIcon>}
                onClick={() => console.log("Coupons clicked")}
              />
              <Button
                color="success"
                size="default"
                icon={<IonIcon size="small" icon={logoWhatsapp}></IonIcon>}
                onClick={() => console.log("Coupons clicked")}
              />
              <Button
                color="info"
                size="default"
                icon={<IonIcon size="small" icon={logoTwitter}></IonIcon>}
                onClick={() => console.log("Coupons clicked")}
              />
            </IonRow>
          </IonCardContent>
        </IonCard>
      </SwiperSlide>
      <SwiperSlide>
        <IonCard className="swiperCard">
          <IonCardHeader>
            <IonCardTitle>Us on Instagram</IonCardTitle>
          </IonCardHeader>
          <IonCardSubtitle>Share with your friends and earn</IonCardSubtitle>
          <IonCardContent>
            Invite and earn coupons
            <IonRow className="swiperCard row">
              <Button
                color="success"
                size="default"
                label="Invite"
                onClick={() => console.log("Coupons clicked")}
              />

              <Button
                color="danger"
                size="default"
                label="Check Out the Deals"
                onClick={() => console.log("Coupons clicked")}
              />
            </IonRow>
          </IonCardContent>
        </IonCard>
      </SwiperSlide>
      <SwiperSlide>
        <IonCard className="swiperCard">
          <IonCardHeader>
            <IonCardTitle>Us on Instagram</IonCardTitle>
          </IonCardHeader>
          <IonCardSubtitle>Share with your friends and earn</IonCardSubtitle>
          <IonCardContent>
            Invite and earn coupons
            <IonRow className="swiperCard row">
              <Button
                color="success"
                size="default"
                label="Invite"
                onClick={() => console.log("Coupons clicked")}
              />

              <Button
                color="danger"
                size="default"
                label="Check Out the Deals"
                onClick={() => console.log("Coupons clicked")}
              />
            </IonRow>
          </IonCardContent>
        </IonCard>
      </SwiperSlide>
      <SwiperSlide>
        <IonCard className="swiperCard">
          <IonCardHeader>
            <IonCardTitle>Us on Instagram</IonCardTitle>
          </IonCardHeader>
          <IonCardSubtitle>Share with your friends and earn</IonCardSubtitle>
          <IonCardContent>
            Invite and earn coupons
            <IonRow className="swiperCard row">
              <Button
                color="success"
                size="default"
                label="Invite"
                onClick={() => console.log("Coupons clicked")}
              />

              <Button
                color="danger"
                size="default"
                label="Check Out the Deals"
                onClick={() => console.log("Coupons clicked")}
              />
            </IonRow>
          </IonCardContent>
        </IonCard>
      </SwiperSlide>
      <SwiperSlide>
        <IonCard className="swiperCard">
          <IonCardHeader>
            <IonCardTitle>Us on Instagram</IonCardTitle>
          </IonCardHeader>
          <IonCardSubtitle>Share with your friends and earn</IonCardSubtitle>
          <IonCardContent>
            Invite and earn coupons
            <IonRow className="swiperCard row">
              <Button
                color="success"
                size="default"
                label="Invite"
                onClick={() => console.log("Coupons clicked")}
              />

              <Button
                color="danger"
                size="default"
                label="Check Out the Deals"
                onClick={() => console.log("Coupons clicked")}
              />
            </IonRow>
          </IonCardContent>
        </IonCard>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCard;
