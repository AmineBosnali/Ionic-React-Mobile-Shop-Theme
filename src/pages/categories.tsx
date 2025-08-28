import React from "react";
import { useHistory } from "react-router-dom";
import {
  IonPage,
  IonHeader,
  IonCard,
  IonCardContent,
  IonBadge,
  IonCardTitle,
  IonIcon,
  IonContent,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { bag, bedOutline, heart } from "ionicons/icons";
import { arrowBack } from "ionicons/icons";
import CategoryCard from "../components/theme/card/CategoryCard";

const Categories: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonIcon
            className="backIcon"
            size="small"
            icon={arrowBack}
            onClick={() => history.goBack()}
          />
          <IonTitle>
            <small>IonShop</small>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <CategoryCard
          onClick={() => history.push("/products")}
          imageSrc="/category/exampleCategory1.png"
          overlayText="Check Out the Store"
          brandName="Brand Name"
          bottomText="January 3 - December 31"
        />

        <IonCard className="pageCard" onClick={() => history.push("/product")}>
          <IonCardContent>
            <div>
              <IonCardTitle className="pageCardTitle">
                Same Day Order
              </IonCardTitle>
              <p className="pageCardSubtitle">
                Browse products available for the same delivery
              </p>
            </div>
          </IonCardContent>
          <IonIcon icon={bag} color="tertiary" className="pageIcon" />
          <IonBadge className="badge">1034</IonBadge>
        </IonCard>
        <CategoryCard
          onClick={() => history.push("/products")}
          imageSrc="/category/exampleCategory1.png"
          overlayText="Check Out the Store"
          brandName="Brand Name"
          bottomText="January 3 - December 31"
          color="rgba(63, 1, 1, 0.65)"
        />
        <CategoryCard
          onClick={() => history.push("/products")}
          imageSrc="/category/exampleCategory1.png"
          overlayText="Check Out the Store"
          brandName="Brand Name"
          bottomText="January 3 - December 31"
          color="rgba(7, 48, 1, 0.53)"
        />
      </IonContent>
    </IonPage>
  );
};

export default Categories;
