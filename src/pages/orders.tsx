import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonToolbar,
  IonIcon,
  IonTitle,
  IonHeader,
  IonPage,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import OrderCard from "../components/theme/card/OrderCard";

const Orders: React.FC = () => {
  const history = useHistory();

  const orders = [
    {
      date: "30 Nisan 2025",
      total: "359.90 TL",
      status: "Teslim Edildi",
      statusColor: "--ion-color-success",
      productImage: "product/productImageOne.jpg",
      productCount: 1,
    },
    {
      date: "15 Mart 2025",
      total: "129.50 TL",
      status: "Kargoya Verildi",
      statusColor: "--ion-color-primary",
      productImage: "product/productImageOne.jpg",
      productCount: 2,
    },
    {
      date: "01 Şubat 2025",
      total: "89.00 TL",
      status: "Hazırlanıyor",
      statusColor: "--ion-color-warning",
      productImage: "product/productImageOne.jpg",
      productCount: 1,
    },
  ];

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
        {orders.map((o, i) => (
          <OrderCard
            key={i}
            date={o.date}
            total={o.total}
            status={o.status}
            statusColor={o.statusColor}
            productImage={o.productImage}
            productCount={o.productCount}
            onDetails={() => console.log("Detaylar tıklandı:", o)}
            onReview={() => console.log("Değerlendir tıklandı:", o)}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Orders;
