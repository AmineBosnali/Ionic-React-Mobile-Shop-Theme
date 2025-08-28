import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonToolbar,
  IonIcon,
  IonTitle,
  IonHeader,
  IonPage,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";

interface Message {
  seller: string;
  text: string;
}

const messages: Message[] = [
  { seller: "FastShop", text: "Fast seller, fast turnaround. Fast shipping." },
  { seller: "QualityStore", text: "Excellent quality, highly recommended." },
  { seller: "ShopMart", text: "Item as described, very satisfied." },
  { seller: "ElectroWorld", text: "Great electronics, works perfectly." },
  { seller: "BookBazaar", text: "Books arrived in mint condition." },
  { seller: "ClothCorner", text: "Clothing fits well, great material." },
  { seller: "BeautyBox", text: "Cosmetics are authentic and long-lasting." },
  { seller: "HomeGoods", text: "Home decor looks stylish in my living room." },
  { seller: "TechTrend", text: "Latest gadgets, exactly what I needed." },
  { seller: "ToyTown", text: "Kids love the toys, good quality." },
];

const Messages: React.FC = () => {
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
        {messages.map((msg, idx) => (
          <IonItem key={idx} className="sellerComment">
            <IonLabel>
              <p className="commentText">{msg.text}</p>
              <span className="commentDate">{msg.seller}</span>
            </IonLabel>
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Messages;
