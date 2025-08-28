import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonModal,
  IonIcon,
} from "@ionic/react";
import { close } from "ionicons/icons";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
/* Components */
import Banner from "../components/theme/Banner";
import { Button } from "../components/theme/button/Button";
import Footer from "../components/theme/Footer";

import exampleImage from "/images.jpg";

const Images: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();

    // Helper functions to handle onClick events
    const handleZoomIn = () => zoomIn();
    const handleZoomOut = () => zoomOut();
    const handleResetTransform = () => resetTransform();

    return (
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
      >
        <Button color="default" label="Zoom In" onClick={handleZoomIn} />
        <Button color="default" label="Zoom Out" onClick={handleZoomOut} />
        <Button color="danger" label="Reset" onClick={handleResetTransform} />
      </div>
    );
  };

  const handleImageClick = (src: string) => {
    setModalImage(src);
    setShowModal(true);
  };

  return (
    <>
      <Banner label="Images" subLabel="You can see all images" />
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader className="cardThree">
            <IonCardTitle>Zoom Image</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="cardThree">
            <TransformWrapper>
              <TransformComponent>
                <img
                  src={exampleImage}
                  alt="image"
                  onClick={() => handleImageClick(exampleImage)}
                />
              </TransformComponent>
            </TransformWrapper>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader className="cardThree">
            <IonCardTitle>Zoom Image Control</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="cardThree">
            <TransformWrapper>
              <TransformComponent>
                <img
                  src={exampleImage}
                  alt="image"
                  onClick={() => handleImageClick(exampleImage)}
                />
              </TransformComponent>
              <Controls />
            </TransformWrapper>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader className="cardThree">
            <IonCardTitle>Full Screen Image</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="cardThree">
            <img src={exampleImage} alt="image" onClick={() => handleImageClick(exampleImage)} />
          </IonCardContent>
        </IonCard>
        <Footer />
        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonContent>
            <Button
              id="fullScreenCloseButton"
              color="default"
              size="default"
              icon={<IonIcon icon={close} />}
              onClick={() => setShowModal(false)}
            />
            <img
              className="fullScreenImage"
              src={modalImage}
              alt="Fullscreen Image"
            />
          </IonContent>
        </IonModal>
      </IonContent>
    </>
  );
};

export default Images;
