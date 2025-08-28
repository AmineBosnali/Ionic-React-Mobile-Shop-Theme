import React from "react";
import { useHistory } from "react-router-dom";
import { IonCard, IonRow, IonIcon, IonCardSubtitle } from "@ionic/react";
import {
  logoWhatsapp,
  logoFacebook,
  logoTwitter,
  shareSocialOutline,
} from "ionicons/icons";
/* Components */
import { Button } from "./button/Button";

const Footer: React.FC = () => {
  const history = useHistory();

  const shareOnSocialMedia = (platform: string) => {
    const url = window.location.href;
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/share?url=${url}`;
        break;
      case "share":
        if (navigator.share) {
          navigator
            .share({
              title: document.title,
              url: url,
            })
            .then(() => {
              console.log("Successful share");
            })
            .catch((error) => {
              console.log("Error sharing", error);
            });
        } else {
          alert("Share not supported on this browser. Copy the URL manually.");
        }
        return;
      default:
        break;
    }

    window.open(shareUrl, "_blank");
  };

  return (
    <IonCard>
      <div className="companyTitle">IonShop</div>
      <IonCardSubtitle className="footerSubtitle">
        It's designed to give your page the gorgeous look it deserves.
      </IonCardSubtitle>
      <IonRow className="footer-card row">
        <Button
          color="default"
          size="default"
          className="socialButton"
          icon={<IonIcon size="small" icon={logoFacebook}></IonIcon>}
          onClick={() => shareOnSocialMedia("facebook")}
        />
        <Button
          color="success"
          size="default"
          className="socialButton"
          icon={<IonIcon size="small" icon={logoWhatsapp}></IonIcon>}
          onClick={() => shareOnSocialMedia("whatsapp")}
        />
        <Button
          color="info"
          size="default"
          className="socialButton"
          icon={<IonIcon size="small" icon={logoTwitter}></IonIcon>}
          onClick={() => shareOnSocialMedia("twitter")}
        />
        <Button
          color="danger"
          size="default"
          className="socialButton"
          icon={<IonIcon size="small" icon={shareSocialOutline}></IonIcon>}
          onClick={() => shareOnSocialMedia("share")}
        />
      </IonRow>
      <hr />
      <div className="copyright">
        Copyright © {new Date().getFullYear()} Vevasoft. All rights reserved.{" "}
      </div>
      <div className="copyright">All rights reserved. </div>
    </IonCard>
  );
};

export default Footer;
