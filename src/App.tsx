import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { CartProvider } from "./contexts/ShoppingCartContext";
/* CSS imports */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.system.css";

/* Components */
import Cards from "./themeComponents/cards";
import Adv from "./themeComponents/advertising";
import Accordions from "./themeComponents/accordions";
import Forms from "./themeComponents/forms";
import Charts from "./themeComponents/charts";
import Images from "./themeComponents/images";
import Chats from "./themeComponents/chats";
import Categories from "./themeComponents/categories";
import Login from "./pages/login";
import Sliders from "./themeComponents/sliders";
import QR from "./themeComponents/qr";
import Tables from "./themeComponents/tables";
import Comments from "./themeComponents/comments";
import TabArea from "./components/theme/TabArea";
import ProtectedRoute from "./components/theme/auth/ProtectedRoute";
//You can prevent the page from being used without logging in by using ProtectedRoute instead of Route
import Profile from "./pages/profile";
import Product from "./pages/product";
import Products from "./pages/products";
import Messages from "./pages/messages";
import CategoriesPages from "./pages/categories";
import Orders from "./pages/orders";

/* Theme variables */
import "./theme/theme.scss";
import "./theme/global.scss";

setupIonicReact();

const App: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const saved = localStorage.getItem("IONSHOP_DARK");
  
    if (saved === null) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("IONSHOP_DARK", JSON.stringify(false));
    } else {
      const isDark = JSON.parse(saved);
      document.body.classList.toggle("dark", isDark);
      document.body.classList.toggle("light", !isDark);
    }
  }, []);
  

  return (
    <CartProvider>
      <IonApp>
        <IonReactRouter>
          <Route path="/login" component={Login} exact={true} />
          <TabArea />
          <Route path="/cards" component={Cards} exact={true} />
          <Route path="/adv" component={Adv} exact={true} />
          <Route path="/accordions" component={Accordions} exact={true} />
          <Route path="/forms" component={Forms} exact={true} />
          <Route path="/sliders" component={Sliders} exact={true} />
          <Route path="/tables" component={Tables} exact={true} />
          <Route path="/comments" component={Comments} exact={true} />
          <Route path="/categories" component={Categories} exact={true} />
          <Route path="/charts" component={Charts} exact={true} />
          <Route path="/qr" component={QR} exact={true} />
          <Route path="/chats" component={Chats} exact={true} />
          <Route path="/messages" component={Messages} exact={true} />
          <Route path="/images" component={Images} exact={true} />
          <Route path="/orders" component={Orders} exact={true} />
          <Route path="/profile" component={Profile} exact={true} />
          <Route path="/category" component={CategoriesPages} exact={true} />
          <Route path="/product" component={Product} exact={true} />
          <Route path="/products" component={Products} exact={true} />
          <Redirect from="/" to="/home" exact />
        </IonReactRouter>
      </IonApp>
    </CartProvider>
  );
};

export default App;
