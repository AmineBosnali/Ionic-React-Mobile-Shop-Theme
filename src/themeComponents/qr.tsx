import React, { useState, useRef, useEffect } from "react";
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonInput,
  IonItem,
  IonAlert,
  IonIcon,
} from "@ionic/react";
import QRCode from "qrcode.react";
import { BrowserMultiFormatReader } from "@zxing/library";
/* Components */
import Banner from "../components/theme/Banner";
import Footer from "../components/theme/Footer";
import { Button } from "../components/theme/button/Button";
import { cameraSharp } from "ionicons/icons";

const QR: React.FC = () => {
  const [qrData, setQrData] = useState("");
  const [scannedData, setScannedData] = useState("");
  const [showCameraPrompt, setShowCameraPrompt] = useState(false);
  const [cameraAccessGranted, setCameraAccessGranted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (cameraAccessGranted) {
      const codeReader = new BrowserMultiFormatReader();
      codeReader
        .listVideoInputDevices()
        .then((videoInputDevices) => {
          const firstDeviceId = videoInputDevices[0].deviceId;
          codeReader.decodeFromVideoDevice(firstDeviceId, videoRef.current, (result, err) => {
            if (result) {
              setScannedData(result.getText());
            }
            if (err) {
              console.error("err", err);
            }
          });
        })
        .catch((err) => console.error(err));

      return () => {
        codeReader.reset();
      };
    }
  }, [cameraAccessGranted]);

  const handleCameraPrompt = (grantAccess: boolean) => {
    setShowCameraPrompt(false);
    setCameraAccessGranted(grantAccess);
  };

  return (
    <>
      <Banner label="QR" subLabel="You can see all QR transactions" />
      <IonContent fullscreen>
        <IonCard className="cardThree">
          <IonCardContent>
            <IonItem>
              <IonInput
                labelPlacement="floating"
                label="Enter Data to Generate QR Code"
                value={qrData}
                onIonChange={(e) => setQrData(e.detail.value!)}
              />
            </IonItem>
            {qrData && (
              <div className="qrCode">
                <QRCode value={qrData} size={256} />
              </div>
            )}
          </IonCardContent>
        </IonCard>

        <IonCard className="cardThree">
          <IonCardContent>
            {!cameraAccessGranted && (
                     <Button
                     color="default"
                     size="default"
                     icon={<IonIcon size="small" icon={cameraSharp}></IonIcon>}
                     onClick={() => setShowCameraPrompt(true)}
                   />
            )}
            {cameraAccessGranted && <video ref={videoRef} className="qrVideo" />}
            <div className="scannedData">
              <h3>Scanned Data:</h3>
              <p>{scannedData}</p>
            </div>
          </IonCardContent>
        </IonCard>

        <Footer />

        <IonAlert
          isOpen={showCameraPrompt}
          onDidDismiss={() => setShowCameraPrompt(false)}
          header={"Camera Access"}
          message={"Do you want to allow camera access for scanning QR codes?"}
          buttons={[
            {
              text: "No",
              role: "cancel",
              handler: () => handleCameraPrompt(false),
            },
            {
              text: "Yes",
              handler: () => handleCameraPrompt(true),
            },
          ]}
        />
      </IonContent>
    </>
  );
};

export default QR;
