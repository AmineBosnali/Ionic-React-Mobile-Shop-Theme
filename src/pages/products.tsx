import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonIcon,
  IonTitle,
  IonRow,
  IonCol,
  IonHeader,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
/* Components */
import ProductCardTwo from "../components/theme/card/products/ProductCardTwo";
import Footer from "../components/theme/Footer";

interface ProductData {
  imageSrc: string;
  title: string;
  description: string;
  labels: string[];
  discountDeals: string[];
}

const Products: React.FC = () => {
  const history = useHistory();
  const [products, setProducts] = useState<ProductData[] | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts([
        {
          imageSrc: "product/productImageOne.jpg",
          title: "Cream",
          description: "Pore ​​tightening for combination skin",
          labels: ["for pores"],
          discountDeals: ["15% discount", "buy 2 pay 1"],
        },
        {
          imageSrc: "product/productImageOne.jpg",
          title: "Serum",
          description: "Hydrating vitamin C serum",
          labels: ["for glow"],
          discountDeals: ["20% discount"],
        },
        {
          imageSrc: "product/productImageOne.jpg",
          title: "Mask",
          description: "Detox clay mask",
          labels: ["for impurities"],
          discountDeals: ["buy 1 get 1"],
        },
        {
          imageSrc: "product/productImageOne.jpg",
          title: "Lotion",
          description: "Daily moisturizer lotion",
          labels: ["for dryness"],
          discountDeals: ["10% discount"],
        },
      ]);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!products) {
    return (
      <IonContent fullscreen>
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
        <div
          style={{
            display: "flex",
            height: "calc(100vh - 56px)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="loading.png"
            alt="Loading..."
            style={{ width: 100, height: 100 }}
          />
        </div>
      </IonContent>
    );
  }

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
        <IonRow className="productPageScrollCards">
          {products.map((p, i) => (
            <IonCol key={i} size="6">
              <ProductCardTwo
                onClick={() => history.push("/product")}
                imageSrc={p.imageSrc}
                title={p.title}
                description={p.description}
                labels={p.labels}
                discountDeals={p.discountDeals}
              />
            </IonCol>
          ))}
        </IonRow>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Products;
