import { Route, useLocation } from "react-router-dom";
import {
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import {
  starOutline,
  personOutline,
  homeOutline,
  cartOutline,
  heartOutline,
} from "ionicons/icons";
import Home from "../../pages/home";
import Components from "../../pages/components";
import Categories from "../../pages/categories";
import Profile from "../../pages/profile";
import Basket from "../../pages/basket";

const TabComponent: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const showTabs = ["/messages","/profile","/chats","/login","/category","/product","/products","/orders"].includes(location.pathname);

  return (
    <>
      {!showTabs && (

          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/basket">
                <Basket />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/components">
                <Components />
              </Route>
              <Route exact path="/category">
                <Categories />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon aria-hidden="true" icon={homeOutline} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="components" href="/components">
                <IonIcon aria-hidden="true" icon={starOutline} />
                <IonLabel>Components</IonLabel>
              </IonTabButton>
              <IonTabButton tab="basket" href="/basket">
                <IonIcon aria-hidden="true" icon={cartOutline} />
                <IonLabel>
                <small>Shopping Cart</small></IonLabel>
              </IonTabButton>
              <IonTabButton tab="categories" href="/category">
                <IonIcon aria-hidden="true" icon={heartOutline} />
                <IonLabel>Categories</IonLabel>
              </IonTabButton>
              <IonTabButton tab="profile" href="/profile">
                <IonIcon aria-hidden="true" icon={personOutline} />
                <IonLabel>My Account</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
  
      )}
    </>
  );
};

export default TabComponent;
