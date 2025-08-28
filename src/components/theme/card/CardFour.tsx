import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
} from "@ionic/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "@ionic/react/css/ionic-swiper.css";

const CardFour: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader className="cardThree">
        <IonCardTitle>Smart Home Systems</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="cardThree">
      Smart home systems are designed to enhance convenience and efficiency in our daily lives. From automated lighting and climate control to security systems, smart homes offer greater control and energy savings.
      </IonCardContent>
    </IonCard>
  );
};

export default CardFour;
