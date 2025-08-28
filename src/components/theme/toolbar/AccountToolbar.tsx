import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { notificationsOutline ,arrowBack} from "ionicons/icons";

export interface AccountToolbarProps {
  avatarSrc?: string;
  userName: string;
  userSubtitle?: string;
  notificationCount?: number;
  onBack?: () => void;
  onNotificationClick?: (e: React.MouseEvent) => void;
}

const AccountToolbar: React.FC<AccountToolbarProps> = ({
  avatarSrc,
  userName,
  userSubtitle,
  notificationCount = 0,
  onNotificationClick,
}) => {
  const [imgError, setImgError] = useState(false);
  const history = useHistory();

  const initials = userName
    .split(" ")
    .map((n) => n.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  return (
    <IonHeader className="accountToolbar">
      <IonToolbar>
        <div className="accountToolbarContent">
          <IonIcon
            className="backIcon"
            size="small"
            icon={arrowBack}
            onClick={() => history.goBack()}
          />
          <div className="accountAvatar">
            {avatarSrc && !imgError ? (
              <img
                src={avatarSrc}
                alt={`${userName} avatar`}
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="avatar-initials">{initials}</span>
            )}
          </div>
          <div className="account-info">
            <div className="account-name">{userName}</div>
            {userSubtitle && (
              <div className="account-subtitle">{userSubtitle}</div>
            )}
          </div>
        </div>

        <IonButtons slot="end">
          <IonButton
            fill="clear"
            onClick={onNotificationClick}
            className="notification-button"
          >
            <div className="notification-icon-wrap">
              <IonIcon icon={notificationsOutline} />
              {notificationCount > 0 && (
                <span className="notification-badge">{notificationCount}</span>
              )}
            </div>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default AccountToolbar;
