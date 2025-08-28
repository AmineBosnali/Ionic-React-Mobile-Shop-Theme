import React, { useEffect, useState } from "react";
import { IonCard, IonImg } from "@ionic/react";

interface ProductCardProps {
  imageSrc: string;
  topText?: string; 
  salesSort?: number; 
  discountDeals: string[];
  title: string; 
  description: string;
  onClick?: () => void;  
}

const ProductCardOne: React.FC<ProductCardProps> = ({
  imageSrc,
  topText,
  salesSort,
  discountDeals,
  title,
  description,
  onClick
}) => {
  const [visibleLabel, setVisibleLabel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLabel((prev) => (prev + 1) % discountDeals.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [discountDeals.length]);

  return (
    <IonCard className="productCard" onClick={onClick}>
      <IonImg className="productImage" src={imageSrc} />
      
      {/* En Üst Yazı (Opsiyonel) */}
      {topText && <div className="topText">{topText}</div>}
      
      {/* Satış Sıralaması (Opsiyonel) */}
      {salesSort !== undefined && <div className="salesSort">{salesSort}</div>}

      <div className="discountDealsVertical" />

      {/* Kampanya Etiketleri */}
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

export default ProductCardOne;
