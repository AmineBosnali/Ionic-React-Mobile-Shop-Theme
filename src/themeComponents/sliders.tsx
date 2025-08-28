import { IonContent } from "@ionic/react";
/* Components */
import SwiperImageOne from "../components/theme/swiper/SwiperImageOne";
import SwiperImageTwo from "../components/theme/swiper/SwiperImageTwo";
import SwiperImageThree from "../components/theme/swiper/SwiperImageThree";
import SwiperCard from "../components/theme/swiper/SwiperCard";
import Banner from "../components/theme/Banner";
import Footer from "../components/theme/Footer";

const Sliders: React.FC = () => {

  const images = [
    { src: "/images.jpg", caption: "Header Five" },
    { src: "/images.jpg", caption: "Header Four" },
    { src: "/images.jpg", caption: "Header Three" },
    { src: "/images.jpg", caption: "Header Two" },
    { src: "/images.jpg", caption: "Header One" },
  ];

  return (
    <>
      <Banner label="Sliders" subLabel="You can see all sliders." />
      <IonContent fullscreen>
        <SwiperImageOne images={images} />
        <SwiperImageTwo images={images} />
        <SwiperImageThree images={images} />
        <SwiperCard />
        <Footer />
      </IonContent>
    </>
  );
};

export default Sliders;
