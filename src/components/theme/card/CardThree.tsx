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
import { Button } from "../button/Button";

const CardThree: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader className="cardThree">
        <IonCardTitle>Blockchain Technology</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="cardThree">
        Blockchain is not just about cryptocurrencies. It offers a secure and
        transparent way to record transactions, manage supply chains, and verify
        identities, ensuring data integrity and trust.
      </IonCardContent>
      <Button id='mobileButton' expand='block' size='large' color='default' label='Card Button' />
    </IonCard>
  );
};

export default CardThree;
