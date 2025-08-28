import React from "react";
import {
  IonCard,
  IonCardContent,
} from "@ionic/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "@ionic/react/css/ionic-swiper.css";

const CardTwo: React.FC = () => {
  return (
    <IonCard className="cardTwo">
      <IonCardContent>
      Artificial Intelligence (AI) is poised to revolutionize the way we live and work. From self-driving cars to personalized medicine, AI technologies are creating new opportunities and transforming industries.
      </IonCardContent>
    </IonCard>
  );
};

export default CardTwo;
