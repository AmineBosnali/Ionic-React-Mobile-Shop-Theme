import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "@ionic/react/css/ionic-swiper.css";

const CardFive: React.FC = () => {
  return (
    <IonCard className="cardFive">
      <img
        alt="product image"
        src="/product/productImageOne.jpg"
      />
      <IonCardHeader>
        <IonCardTitle>Internet of Things (IoT)</IonCardTitle>
        <IonCardSubtitle>Technology Information</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      IoT connects everyday objects to the internet, enabling them to send and receive data. This connectivity allows for smarter cities, efficient energy management, and innovative healthcare solutions.
      </IonCardContent>
    </IonCard>
  );
};

export default CardFive;
