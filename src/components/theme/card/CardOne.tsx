import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from "@ionic/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "@ionic/react/css/ionic-swiper.css";
import { heartOutline, starOutline } from 'ionicons/icons';
import {
  giftOutline,
  locateOutline,
  callOutline,
  apertureOutline,
} from "ionicons/icons";

const CardOne: React.FC = () => {

  const categoryItems = [
    {
      title: 'Shoes',
      badgeText: '150+ Sold',
      badgeColor: 'var(--custom-yellow)',
      imageSrc: '/banner/category/shoes.png',
    },
    {
      title: 'Sports',
      badgeText: '50% OFF',
      badgeColor: 'var(--custom-dark-green)',
      imageSrc: '/banner/category/sports.png',
    },
    {
      title: 'Apparel',
      badgeText: 'New Season',
      badgeColor: 'var(--custom-dark-blue)',
      imageSrc: '/banner/category/apparel.png',
    },
    {
      title: 'Accessories',
      badgeText: 'Hot Deals',
      badgeColor: 'var(--custom-dark-red)',
      imageSrc: '/banner/category/accessories.png',
    },
  ];

  
  return (
    <IonCard className="cardCategory">
      <IonCardHeader>
        <IonCardTitle>Most visited</IonCardTitle>
      </IonCardHeader>
      <IonCardSubtitle>YCheck out our most popular products</IonCardSubtitle>
      <IonCardContent>
        <IonGrid>
        <IonRow>
          {categoryItems.slice(0, 2).map((item, idx) => (
            <IonCol key={idx} size="6" className="categoryCol">
              <div className="categoryImageWrapper">
                <img src={item.imageSrc} alt={item.title} className="categoryImage" />
                {/* Top-left icon and count */}
                <div className="categoryTopOverlay" style={{ color: item.badgeColor }}>
                  <IonIcon icon={heartOutline} />
                  <span className="categoryTopText">{item.badgeText}</span>
                </div>
                {/* Bottom title overlay */}
                <div className="categoryOverlay">{item.title}</div>
              </div>
            </IonCol>
          ))}
        </IonRow>
        <IonRow>
          {categoryItems.slice(2, 4).map((item, idx) => (
            <IonCol key={idx} size="6" className="categoryCol">
              <div className="categoryImageWrapper">
                <img src={item.imageSrc} alt={item.title} className="categoryImage" />
                {/* Top-left icon and count */}
                <div className="categoryTopOverlay" style={{ color: item.badgeColor }}>
                  <IonIcon icon={starOutline} />
                  <span className="categoryTopText">{item.badgeText}</span>
                </div>
                {/* Bottom title overlay */}
                <div className="categoryOverlay">{item.title}</div>
              </div>
            </IonCol>
          ))}
        </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default CardOne;
