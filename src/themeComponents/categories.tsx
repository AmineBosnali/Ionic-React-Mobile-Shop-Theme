import React, { useRef, useEffect } from "react";
import {
  IonContent,
  IonCard,
  IonPage,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { musicalNote, phoneLandscapeOutline, tabletLandscapeOutline } from 'ionicons/icons';
/* Components */
import Banner from "../components/theme/Banner";
import Footer from "../components/theme/Footer";

const Categories: React.FC = () => {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);

  useEffect(() => {
    if (!accordionGroup.current) {
      return;
    }
    accordionGroup.current.value = ["first", "third"];
  }, []);

  return (
    <>
      <Banner label="Categories" subLabel="You can see all categories" />
      <IonContent fullscreen>
        <IonCard className="cardThree">
          <IonAccordionGroup ref={accordionGroup} multiple={true}>
            <IonAccordion toggleIcon={musicalNote} toggleIconSlot="start">
              <IonItem slot="header">
                <IonLabel>Earphones</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                Content
              </div>
            </IonAccordion>
            <IonAccordion toggleIcon={tabletLandscapeOutline} toggleIconSlot="start">
              <IonItem slot="header">
                <IonLabel>Tablet</IonLabel>
              </IonItem>
            </IonAccordion>
            <IonAccordion toggleIcon={phoneLandscapeOutline} toggleIconSlot="start" value="third">
              <IonItem slot="header">
                <IonLabel>Phone</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                Content
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        </IonCard>
        <IonCard className="cardThree">
          <IonAccordionGroup ref={accordionGroup} multiple={true}>
            <IonAccordion value="first">
              <IonItem slot="header">
                <IonLabel>First Accordion</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                First Content
              </div>
            </IonAccordion>
            <IonAccordion value="second">
              <IonItem slot="header">
                <IonLabel>Second Accordion</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                <IonAccordionGroup>
                  <IonAccordion disabled={true}>
                    <IonItem slot="header">
                      <IonLabel>Inner First Accordion</IonLabel>
                    </IonItem>

                  </IonAccordion>
                  <IonAccordion value="innerSecond">
                    <IonItem slot="header">
                      <IonLabel>Inner Second Accordion</IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                      Inner Second Content
                    </div>
                  </IonAccordion>
                </IonAccordionGroup>
              </div>
            </IonAccordion>
            <IonAccordion value="third">
              <IonItem slot="header">
                <IonLabel>Third Accordion</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                Third Content
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        </IonCard>
        <Footer />
      </IonContent>
    </>
  );
};

export default Categories;