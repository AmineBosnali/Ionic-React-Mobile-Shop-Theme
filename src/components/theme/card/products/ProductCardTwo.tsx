import React, { useEffect, useState } from "react";
import { IonCard, IonImg, IonIcon } from "@ionic/react";
import { heartOutline } from "ionicons/icons";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  labels: string[];
  discountDeals: string[];
  onClick?: () => void;  
}

const ProductCardTwo: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  description,
  labels,
  discountDeals,
  onClick
}) => {
  const [visibleLabel, setVisibleLabel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLabel((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <IonCard className="productCard" onClick={onClick}>
      <IonImg className="productImage" src={imageSrc} />
      <IonIcon className="likeButton" icon={heartOutline} />

      {labels.map((label, index) => (
        <div key={index} className="infoLabel">
          {label}
        </div>
      ))}

      <div className="discountDeals">
        {discountDeals.map((deal, index) => (
          <div
            key={index}
            className={`label${index + 1} ${
              visibleLabel === index ? "labelVisible" : "labelHidden"
            }`}
          >
            <div>{deal}</div>
          </div>
        ))}
      </div>
      
      <p>
        {title} <span className="description">{description}</span>
      </p>
    </IonCard>
  );
};

export default ProductCardTwo;
