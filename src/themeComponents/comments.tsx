import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonTextarea,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { star, starOutline } from "ionicons/icons";
import Banner from "../components/theme/Banner";
import Footer from "../components/theme/Footer";
import CommentOne from "../components/theme/comments/CommentOne";
import CommentTwo from "../components/theme/comments/CommentTwo";

const Comments: React.FC = () => {
  return (
    <>
      <Banner label="Comment" subLabel="You can see all comments" />
      <IonContent fullscreen>
        <CommentOne/>
        <CommentTwo/>
        <Footer />
      </IonContent>
    </>
  );
};

export default Comments;
