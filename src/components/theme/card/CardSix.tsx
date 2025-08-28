import { IonIcon } from '@ionic/react';
import { ellipseOutline, removeCircleOutline, addCircleOutline } from 'ionicons/icons';

export interface CardSixProps {
  selected?: boolean;
  onSelect?: () => void;
  brand: string;
  rating: number;
  imageSrc: string;
  title: string;
  description: string;
  deliveryEstimate: string;
  soldCount: number;
  price: number;
  quantity: number;
  onQuantityChange: (delta: number) => void;
}

const CardSix: React.FC<CardSixProps> = ({
  selected = false,
  onSelect,
  brand,
  rating,
  imageSrc,
  title,
  description,
  deliveryEstimate,
  soldCount,
  price,
  quantity,
  onQuantityChange,
}) => {
  return (
    <div className="basketItemCard">
      <div className="basketCardHeader">
        <IonIcon
          icon={ellipseOutline}
          className={`selectIcon ${selected ? 'selected' : ''}`}
          onClick={onSelect}
        />
        <span className="brandText">{brand}</span>
        <span className="rating-badge">{rating.toFixed(1)}</span>
      </div>
      <div className="lineHorizontal" />
      <div className="basketCard">
        <img src={imageSrc} alt={title} className="basketCardImage" />

        <div className="basketCardInfo">
          <span className="basketCardTitle">{title}</span>
          <span className="basketCardDescription">
            {description.length > 30
               ? `${description.substring(0, 30)}…`
              : description}
          </span>
          <div className="basketCardDelivery">
            Tahmini Kargoya Teslim: {deliveryEstimate}
          </div>
          <div className="soldCount">+{soldCount} adet satıldı</div>
        </div>

        <div className="productActions">
          <IonIcon
            icon={removeCircleOutline}
            className="actionIcon"
            onClick={() => onQuantityChange(-1)}
          />
          <span className="quantity">{quantity}</span>
          <IonIcon
            icon={addCircleOutline}
            className="actionIcon"
            onClick={() => onQuantityChange(1)}
          />
        </div>
        <div className="priceText">
          {price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </div>
      </div>
    </div>
  );
};

export default CardSix;