import React from "react";
import { IonContent, IonPage } from "@ionic/react";
/* Components */
import Banner from "../components/theme/Banner";
import Footer from "../components/theme/Footer";
import FormOne from "../components/theme/form/FormOne";
import FormTwo from "../components/theme/form/FormTwo";
import FormThree from "../components/theme/form/FormThree";

const Forms: React.FC = () => {
  return (
    <>
      <Banner label="Forms" subLabel="You can see all forms" />
      <IonContent fullscreen>
        <FormOne/>
        <FormTwo/>
        <FormThree/>
        <Footer />
      </IonContent>
    </>
  );
};

export default Forms;
