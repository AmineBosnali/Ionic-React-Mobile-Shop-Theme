import { IonCardTitle, IonIcon, IonButton } from "@ionic/react";
import { arrowForwardOutline } from 'ionicons/icons';

interface HeaderProps {
  label: string;
  sublabel:string;
  className?: string;
  image?:string;
}

const Header: React.FC<HeaderProps> = ({ label,sublabel,image, className }) => {
  return (
    <div className={`customHeader ${className}`}>
      <div className="headerText">
        <IonCardTitle className="headerTitle">{label}</IonCardTitle>
        <p className="headerSubTitle">Discover the best prices</p>
        <IonButton className="headerButton">Start Shopping
        <IonIcon icon={arrowForwardOutline} size="medium"></IonIcon>
        </IonButton>
      </div>
      <img src={image} alt="Header Image Two" className="headerImageTwo" />
    </div>
  );
};

export default Header;
