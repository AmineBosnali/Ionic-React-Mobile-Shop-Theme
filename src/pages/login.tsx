import { IonContent, IonPage } from "@ionic/react";
/* Components */
import LoginForm from "../components/theme/auth/LoginForm";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen  className="loginPage">
       <LoginForm/>
      </IonContent>
    </IonPage>
  );
};

export default Login;
