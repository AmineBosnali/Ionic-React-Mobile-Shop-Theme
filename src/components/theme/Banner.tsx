import { useHistory } from "react-router-dom";
import { IonHeader, IonToolbar, IonIcon, IonTitle } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import Search from "./Search";

interface BannerProps {
  label: string;
  subLabel?: string;
}

const Banner: React.FC<BannerProps> = ({ label, subLabel }) => {
  const history = useHistory();

  return (
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
  );
};

export default Banner;
