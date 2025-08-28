import React, { useRef, useState, useEffect } from "react";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonIcon,
  IonPage,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import { closeCircleOutline } from "ionicons/icons";
/* Components */
import Banner from "../components/theme/Banner";
import { Button } from "../components/theme/button/Button";
import Footer from "../components/theme/Footer";

const Advertising: React.FC = () => {
  const modalOne = useRef<HTMLIonModalElement>(null);
  const modalTwo = useRef<HTMLIonModalElement>(null);
  const modalThree = useRef<HTMLIonModalElement>(null);

  const [showCloseButton, setShowCloseButton] = useState(false);
  const [countdown, setCountdown] = useState(10);

  function dismissModalOne() {
    modalOne.current?.dismiss();
  }

  function dismissModalTwo() {
    modalTwo.current?.dismiss();
  }

  function dismissModalThree() {
    modalThree.current?.dismiss();
    setShowCloseButton(false);
    setCountdown(10);
  }

  useEffect(() => {
    const handleOpenModalThree = () => {
      setShowCloseButton(false);
      setCountdown(10);
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            clearInterval(timer);
            setShowCloseButton(true);
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);
    };

    const modalThreeElement = modalThree.current;
    if (modalThreeElement) {
      modalThreeElement.addEventListener(
        "ionModalDidPresent",
        handleOpenModalThree
      );
    }

    return () => {
      if (modalThreeElement) {
        modalThreeElement.removeEventListener(
          "ionModalDidPresent",
          handleOpenModalThree
        );
      }
    };
  }, []);

  return (
    <>
      <Banner label="Advertising" subLabel="You can see all adv" />
      <IonContent fullscreen>
        <IonCard className="cardTwo">
          <IonCardContent>
            You can use these modals to add your ads{" "}
          </IonCardContent>
        </IonCard>
        <Button
          id="open-modal-one"
          color="default"
          expand="block"
          label="SHOW FULL AD"
        />
        <Button
          id="open-modal-two"
          color="default"
          expand="block"
          label="SHOW MODAL"
        />
        <Button
          id="open-modal-three"
          color="default"
          expand="block"
          label="SHOW 10 SEC MODAL"
        />
        <IonModal ref={modalOne} trigger="open-modal-one">
          <IonHeader>
            <IonToolbar>
              <div className="modalTitle" slot="start">
                Sponsored Content
              </div>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => dismissModalOne()}>
                  <IonIcon className="modalClose" icon={closeCircleOutline} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <div className="modalBackground">
            <div className="advFullContent">
              <div className="advFullTitle">Full Ad</div>
              Timed ads show for the amount of time you want. During this time,
              users cannot click the close button. After the time has elapsed,
              the ad can be closed.
              <Button
                color="danger"
                expand="block"
                label="Close Button"
                onClick={() => dismissModalOne()}
              />
            </div>
          </div>
        </IonModal>
        <IonModal id="theme-modal" ref={modalTwo} trigger="open-modal-two">
          <IonToolbar>
            <div className="modalTitle" slot="start">
              Sponsored Content
            </div>
            <IonButtons slot="end">
              <IonButton strong={true} onClick={() => dismissModalTwo()}>
                <IonIcon className="modalClose" icon={closeCircleOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <div className="modalBackground">
            <div className="advFullContent">
              <div className="advFullTitle">Full Ad</div>
              Timed ads show for the amount of time you want. During this time,
              users cannot click the close button. After the time has elapsed,
              the ad can be closed.
              <Button
                color="danger"
                expand="block"
                label="Close Button"
                onClick={() => dismissModalTwo()}
              />
            </div>
          </div>
        </IonModal>
        <IonModal id="modal-three" ref={modalThree} trigger="open-modal-three">
          <IonHeader>
            <IonToolbar>
              <div className="modalTitle" slot="start">
                Sponsored Content
              </div>
              <IonButtons slot="end">
                {showCloseButton && (
                  <IonButton strong={true} onClick={() => dismissModalThree()}>
                    <IonIcon className="modalClose" icon={closeCircleOutline} />
                  </IonButton>
                )}
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <div className="modalBackground">
            <div className="advFullContent">
              <div className="advFullTitle">Full Ad</div>
              Timed ads show for the amount of time you want. During this time,
              users cannot click the close button. After the time has elapsed,
              the ad can be closed.
              {showCloseButton ? (
                <Button
                  color="danger"
                  expand="block"
                  label="Close Button"
                  onClick={() => dismissModalThree()}
                />
              ) : (
                <div>{countdown}</div>
              )}
            </div>
          </div>
        </IonModal>
        <Footer />
      </IonContent>
    </>
  );
};

export default Advertising;
