import { IonContent, IonPage, IonCard } from "@ionic/react";
/* Components */
import Banner from "../components/theme/Banner";
import CustomList from "../components/theme/list/CustomList";
import Footer from "../components/theme/Footer";

const Components: React.FC = () => {
  return (
    <IonPage>
      <Banner
        label="Components"
        subLabel="You can create your own design using the components here."
      />
      <IonContent>
        <CustomList />
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Components;
