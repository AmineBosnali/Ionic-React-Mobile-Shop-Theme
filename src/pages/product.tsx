import { useHistory } from "react-router-dom";
import { useCart } from "../contexts/ShoppingCartContext";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonCardContent,
  IonRow,
  IonCol,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonPage,
} from "@ionic/react";
import { star, starOutline, starHalf, arrowBack } from "ionicons/icons";
/* Components */
import Footer from "../components/theme/Footer";
import SwiperCardAndImage from "../components/theme/swiper/SwiperCardAndImage";
import Comment from "../components/theme/comments/CommentOne";
import { Button } from "../components/theme/button/Button";

import type { ImageItem } from "../types";

const Product: React.FC = () => {
  const history = useHistory();
  const { addItem } = useCart();
  const images = [
    {
      src: "/product/productImageOne.jpg",
      caption: "Header One",
      title: "APPLE WATCH S3",
      subtitle: "Space gray with dark rubber band",
      details:
        "The Apple Watch Series 3, released in September 2017, is a versatile and powerful smartwatch that offers a range of features to enhance your daily life. Equipped with GPS and cellular capabilities, it allows you to stay connected without needing your iPhone nearby.",
      originalPrice: "$250",
      discountedPrice: "$225",
    },
    {
      src: "/product/productImageOne.jpg",
      caption: "Header Two",
      title: "APPLE WATCH S4",
      subtitle: "Silver with white band",
      details:
        "The Apple Watch Series 4, released in September 2018, is a modern smartwatch with a larger display and advanced health monitoring features. It supports fall detection and an ECG app for heart health monitoring.",
      originalPrice: "$300",
      discountedPrice: "$275",
    },
    {
      src: "/product/productImageOne.jpg",
      caption: "Header Three",
      title: "APPLE WATCH S5",
      subtitle: "Gold with pink sand band",
      details:
        "The Apple Watch Series 5, released in September 2019, features an always-on display, built-in compass, and international emergency calling. It offers a seamless user experience and integrates perfectly with other Apple devices.",
      originalPrice: "$350",
      discountedPrice: "$320",
    },
  ];

  const handleAddToCart = (item: ImageItem) => {
    addItem({
      id: item.title,
      brand: item.title,
      rating: 0,
      imageSrc: item.src,
      title: item.title,
      description: item.subtitle,
      deliveryEstimate: "—",
      soldCount: 0,
      price: parseFloat(item.discountedPrice.replace("$", "")),
    });
  };

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
      <IonContent>
        <SwiperCardAndImage images={images} onAddToCart={handleAddToCart} />
        <IonRow>
          <IonCol size="6">
            <IonCard className="cardFiveSmall">
              <img
                alt="product image"
                src="/product/productImageOne.jpg"
              />
              <IonCardHeader>
                <IonCardTitle>White Edition</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <span>
                  <IonIcon className="star" icon={star} />
                  <IonIcon className="star" icon={star} />
                  <IonIcon className="star" icon={starHalf} />
                  <IonIcon className="star" icon={starOutline} />
                  <IonIcon className="star" icon={starOutline} />
                </span>
                <Button color="default" label="View" />
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="6">
            <IonCard className="cardFiveSmall">
              <img
                alt="product image"
                src="/product/productImageOne.jpg"
              />
              <IonCardHeader>
                <IonCardTitle>Dark Edition</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <span>
                  <IonIcon className="star" icon={star} />
                  <IonIcon className="star" icon={star} />
                  <IonIcon className="star" icon={starHalf} />
                  <IonIcon className="star" icon={starOutline} />
                  <IonIcon className="star" icon={starOutline} />
                </span>
                <Button color="default" label="View" />
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <Comment />
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Product;
