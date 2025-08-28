import { IonContent, IonPage, IonCard } from "@ionic/react";
/* Components */
import Banner from "../components/theme/Banner";
import CardTwo from "../components/theme/card/CardTwo";
import CardThree from "../components/theme/card/CardThree";
import CardFour from "../components/theme/card/CardFour";
import CardFive from "../components/theme/card/CardFive";
import Footer from "../components/theme/Footer";

const Cards: React.FC = () => {
  return (
    <>
      <Banner label="Cards" subLabel="You can see all cards" />
      <IonContent fullscreen>
        <CardTwo />
        <CardThree />
        <CardFour />
        <CardFive/>
        <Footer/>
      </IonContent>
    </>
  );
};

export default Cards;
