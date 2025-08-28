import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import type { ToggleChangeEventDetail } from '@ionic/react';
import {
  IonPage,
  IonIcon,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonBadge,
  IonToggle,
  IonPopover,
  IonList
} from "@ionic/react";
import {
  notificationsOutline,
  timeOutline,
  chatbubbleEllipsesOutline,
  bagHandleOutline,
} from "ionicons/icons";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import AccountToolbar from "../components/theme/toolbar/AccountToolbar";
import AdsOne from "../components/theme/ads/AdsOne";
import AdsImage from "../../public/ads/exampleAds1.png";
import Logout from "../components/theme/auth/LogoutButton";

const Profile: React.FC = () => {
  const history = useHistory();
  const user = useSelector((state: RootState) => state.auth.user);
  const [paletteToggle, setPaletteToggle] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [popoverEvent, setPopoverEvent] = useState<Event | undefined>(undefined);

  interface AppNotification {
    title: string;
    subtitle: string;
  }
  
  const notifications: AppNotification[] = [
    { title: "Your order has been sent", subtitle: "30 April 2025" },
    { title: "New coupon added",     subtitle: "Don't miss your discount!" },
    { title: "You've got a message",  subtitle: "Send message to seller" },
  ];

   const handleNotificationClick = (e: React.MouseEvent) => {
       setPopoverEvent(e.nativeEvent);
       setShowNotifications(true);
     };
  const toggleChange = (ev: CustomEvent<ToggleChangeEventDetail>) => {
    const isDark = ev.detail.checked;
    setPaletteToggle(isDark);
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("IONSHOP_DARK", JSON.stringify(isDark));
  };

  const toggleDarkPalette = (shouldAdd: boolean) => {
    document.body.classList.toggle("dark", shouldAdd);
  };

  useEffect(() => {
    const saved = localStorage.getItem("IONSHOP_DARK");
    if (saved !== null) {
      const asBool = JSON.parse(saved);
      setPaletteToggle(asBool);
      toggleDarkPalette(asBool);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const init = prefersDark.matches;
    setPaletteToggle(init);
    toggleDarkPalette(init);

    const listener = (e: MediaQueryListEvent) => {
      setPaletteToggle(e.matches);
      toggleDarkPalette(e.matches);
    };
    prefersDark.addEventListener("change", listener);
    return () => prefersDark.removeEventListener("change", listener);
  }, []);

  return (
    <IonPage>
      <AccountToolbar
        avatarSrc="/assets/avatar.jpg"
        userName="Amine Kara"
        userSubtitle="aminnebosnali@gmail.com"
        notificationCount={9}
        onBack={() => history.goBack()}
        onNotificationClick={handleNotificationClick}
      />
      <IonContent fullscreen>
        <IonCard className="colorMode">
          <IonToggle
            checked={paletteToggle}
            onIonChange={toggleChange}
            justify="space-between"
          >
            Dark Mode
          </IonToggle>
        </IonCard>
        <IonGrid className="quickMenu">
          <IonRow>
            <IonCol>
              <IonItem button onClick={() => history.push("products")}>
                <IonIcon icon={timeOutline} slot="start" />
                <IonLabel>Visited Before</IonLabel>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem button onClick={() => history.push("chats")}>
                <IonIcon icon={chatbubbleEllipsesOutline} slot="start" />
                <IonLabel>IonShop Asistan</IonLabel>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem button onClick={() => history.push("messages")}>
                <IonIcon icon={notificationsOutline} slot="start" />
                <IonLabel>My Seller Messages</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem
                button
                onClick={() => history.push("/orders")}
              >
                <IonIcon icon={bagHandleOutline} slot="start" />
                <IonLabel>All My Orders</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>{" "}
        <AdsOne
          imageSrc={AdsImage}
          alt="Special Offer"
          onClick={() => window.open("https://example.com", "_blank")}
        />
        <IonCard className="servicesCard">
          <IonCardHeader>
            <IonCardTitle>My services</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel>
                IonShop Plus <IonBadge color="danger">NEW</IonBadge>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                Lucky Draw <IonBadge color="warning">Popular</IonBadge>
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <Logout />
        </IonCard>
        <IonPopover
          event={popoverEvent}
          isOpen={showNotifications}
          onDidDismiss={() => setShowNotifications(false)}
          translucent
        >
          <IonList>
            {notifications.map((n, idx) => (
              <IonItem key={idx}>
                <IonLabel>
                  <h3>{n.title}</h3>
                  <p>{n.subtitle}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonPopover>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
