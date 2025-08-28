import {
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { checkmark, chevronForwardOutline, star } from "ionicons/icons";

export interface OrderCardProps {
  date: string;
  total: string;
  status: string;
  statusColor?: string;
  productImage: string;
  productCount: number;
  onDetails?: () => void;
  onReview?: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({
  date,
  total,
  status,
  statusColor = "--ion-color-success",
  productImage,
  productCount,
  onDetails,
  onReview,
}) => {
  return (
    <IonCard className="orderCard">
      <IonRow>
        <span className="order">
          {date}
          <p className="total">
            &nbsp;&nbsp;Total:<span className="price">{total}</span>
          </p>
        </span>
        <IonButton fill="clear" className="orderDetails" onClick={onDetails}>
          Details&nbsp;
          <IonIcon icon={chevronForwardOutline} />
        </IonButton>
      </IonRow>

      <IonCardContent className="orderCardContent">
        <div />
        <IonGrid>
          <IonRow className="orderStatusRow">
            <IonIcon
              icon={checkmark}
              className="orderStatusIcon"
              style={{ color: `var(${statusColor})` }}
            />
            <span
              className="orderStatusText"
              style={{ color: `var(${statusColor})` }}
            >
              {status}
            </span>
            <IonButton
              fill="outline"
              className="orderReviewBtn"
              onClick={onReview}
            >
              <IonIcon slot="start" icon={star} />
              Evaluate
            </IonButton>
          </IonRow>
          <IonRow className="orderProductRow" align-items-center>
            <img
              className="orderProductImage"
              src={productImage}
              alt="Product Image"
            />
            <img
              className="orderProductImage"
              src={productImage}
              alt="Product Image"
            />
          </IonRow>
          <IonRow>
            <span className="orderProductText">{productCount} delivered</span>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default OrderCard;
