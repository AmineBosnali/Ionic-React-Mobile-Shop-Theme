import {
  IonContent,
  IonPage,
  IonCard,
  IonToggle,
  IonRow,
  IonCol,
  IonImg,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
/* Components */
import Header from "../components/theme/Header";
import Search from "../components/theme/Search";
import CategoryBanner from "../components/theme/CategoryBanner";
import AdsOne from "../components/theme/ads/AdsOne";
import SwiperImage from "../components/theme/swiper/SwiperImageOne";
import SwiperCard from "../components/theme/swiper/SwiperCard";
import ProductCardOne from "../components/theme/card/products/ProductCardOne";
import ProductCardTwo from "../components/theme/card/products/ProductCardTwo";
import CardOne from "../components/theme/card/CardOne";
import CategoryCard from "../components/theme/card/CategoryCard";
import Footer from "../components/theme/Footer";

import AdsImage from "../../public/ads/exampleAds1.png";
const Home: React.FC = () => {
  const history = useHistory();
  const images = [
    {
      src: "header/headerFive.jpg",
      caption: "campaings boots",
      title: "%15 Discount on Boots",
      subTitle: "End of season deals",
    },
    {
      src: "header/headerFour.jpg",
      caption: "campaings boots",
      title: "%30 All Sports Equipment",
      subTitle: "End of season deals",
    },
    {
      src: "header/headerThree.jpg",
      caption: "campaings boots",
      title: "Grab Spring Opportunities",
      subTitle: "End of season deals",
    },
    {
      src: "header/headerOne.jpg",
      caption: "campaings boots",
      title: "10% Discount on Sneakers",
      subTitle: "End of season deals",
    },
    {
      src: "header/headerTwo.jpg",
      caption: "campaings boots",
      title: "Share Coupon Codes",
      subTitle: "Follow on Social Media",
    },
  ];

  const menuItems = [
    {
      title: "Shoes",
      badgeText: "150+ Sold",
      badgeColor: "var(--custom-yellow)",
      imageSrc: "/banner/category/shoes.png",
      onClick: () => history.push("/products")
    },
    {
      title: "Sports",
      badgeText: "50% OFF",
      badgeColor: "var(--custom-dark-green)",
      imageSrc: "/banner/category/sports.png",
      onClick: () => history.push("/products")
    },
    {
      title: "Apparel",
      badgeText: "New Season",
      badgeColor: "var(--custom-dark-blue)",
      imageSrc: "/banner/category/apparel.png",
      onClick: () => history.push("/products")
    },
    {
      title: "Accessories",
      badgeText: "Hot Deals",
      badgeColor: "var(--custom-dark-red)",
      imageSrc: "/banner/category/accessories.png",
      onClick: () => history.push("/products")
    },
  ];

  return (
    <IonPage>
      <IonContent fullscreen>
        <Header
          className="ion-no-border"
          label="IonShop"
          sublabel="Examine hundreds of different shoe models."
          image="header/headerBackground2.png"
        />
        <div className="homePage">
          <Search
            placeholder="Search.."
            onSearch={() => console.log("search")}
          />
          <CategoryBanner items={menuItems} />
          <AdsOne
            imageSrc={AdsImage}
            alt="Special Offer"
            onClick={() => window.open("https://example.com", "_blank")}
          />
          <IonCard>
            <SwiperImage images={images} />
          </IonCard>
          <label className="productListLabel">Recommended for you</label>
          <IonRow className="productScrollCards">
            <IonCol size="5">
              <ProductCardOne
                onClick={() => history.push("/product")}
                imageSrc="product/productImageOne.jpg"
                topText="Best Seller"
                salesSort={10}
                discountDeals={["buy 2 pay 1", "buy more, pay less"]}
                title="Trousers"
                description="Casual linen trousers"
              />
            </IonCol>
            <IonCol size="5">
              <ProductCardTwo
                onClick={() => history.push("/product")}
                imageSrc="product/productImageOne.jpg"
                title="Cream"
                description="Pore ​​tightening for combination skin"
                labels={["for pores"]}
                discountDeals={["15% discount", "buy 2 pay 1"]}
              />
            </IonCol>
            <IonCol size="5">
              <ProductCardOne
                onClick={() => history.push("/product")}
                imageSrc="product/productImageOne.jpg"
                topText="Best Seller"
                salesSort={10}
                discountDeals={["buy 2 pay 1", "buy more, pay less"]}
                title="Trousers"
                description="Casual linen trousers"
              />
            </IonCol>
            <IonCol size="5">
              <ProductCardTwo
                onClick={() => history.push("/product")}
                imageSrc="product/productImageOne.jpg"
                title="Cream"
                description="Pore ​​tightening for combination skin"
                labels={["for pores"]}
                discountDeals={["15% discount", "buy 2 pay 1"]}
              />
            </IonCol>
          </IonRow>
          <div className="advantageFramework">
            <label className="productListLabel">Advantage products</label>
            <IonRow className="productScrollCards">
              <IonCol size="5">
                <ProductCardOne
                  onClick={() => history.push("/product")}
                  imageSrc="product/productImageOne.jpg"
                  topText="Best Seller"
                  salesSort={10}
                  discountDeals={["buy 2 pay 1", "buy more, pay less"]}
                  title="Trousers"
                  description="Casual linen trousers"
                />
              </IonCol>
              <IonCol size="5">
                <ProductCardTwo
                  onClick={() => history.push("/product")}
                  imageSrc="product/productImageOne.jpg"
                  title="Cream"
                  description="Pore ​​tightening for combination skin"
                  labels={["for pores"]}
                  discountDeals={["15% discount", "buy 2 pay 1"]}
                />
              </IonCol>
              <IonCol size="5">
                <ProductCardOne
                  onClick={() => history.push("/product")}
                  imageSrc="product/productImageOne.jpg"
                  topText="Best Seller"
                  salesSort={10}
                  discountDeals={["buy 2 pay 1", "buy more, pay less"]}
                  title="Trousers"
                  description="Casual linen trousers"
                />
              </IonCol>
              <IonCol size="5">
                <ProductCardTwo
                  onClick={() => history.push("/product")}
                  imageSrc="product/productImageOne.jpg"
                  title="Cream"
                  description="Pore ​​tightening for combination skin"
                  labels={["for pores"]}
                  discountDeals={["15% discount", "buy 2 pay 1"]}
                />
              </IonCol>
            </IonRow>
          </div>
          <SwiperCard />
          <CategoryCard
            onClick={() => history.push("/products")}
            imageSrc="/category/exampleCategory1.png"
            overlayText="Check Out the Store"
            brandName="Brand Name"
            bottomText="January 3 - December 31"
          />
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
          <CardOne />
          <Footer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
