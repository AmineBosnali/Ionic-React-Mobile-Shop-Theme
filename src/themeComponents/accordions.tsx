import { IonContent, IonPage } from "@ionic/react";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { addOutline, arrowDownCircleOutline } from "ionicons/icons";
/* Components */
import Banner from "../components/theme/Banner";
import Footer from "../components/theme/Footer";

const Cards: React.FC = () => {
  return (
    <>
      <Banner label="Accordions" subLabel="You can see all accordions" />
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader className="cardThree">
            <IonCardTitle>Classic Accordion</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="cardThree">
            Simple accordions, you can use them with or without icons, it's
            incredibly simple.
          </IonCardContent>
          <IonAccordionGroup expand="inset">
            <IonAccordion toggleIcon={addOutline} value="first">
              <IonItem slot="header" color="rose">
                <IonLabel>First Accordion</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                First Content
              </div>
            </IonAccordion>
            <IonAccordion value="second">
              <IonItem slot="header" color="rose">
                <IonLabel>Second Accordion</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                Second Content
              </div>
            </IonAccordion>
            <IonAccordion toggleIcon={arrowDownCircleOutline} value="third">
              <IonItem slot="header" color="rose">
                <IonLabel>Third Accordion</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                Third Content
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        </IonCard>
        <IonCard>
          <IonCardHeader className="cardThree">
            <IonCardTitle>Highlight Accordion</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="cardThree">
            Highlight accordions, you can use them with or without icons, it's
            incredibly Highlight.
          </IonCardContent>
          <IonAccordionGroup expand="inset">
            <IonAccordion
              toggleIcon={addOutline}
              className="highlight"
              value="first"
            >
              <IonItem className="highlightColor" slot="header" color="gray">
                <IonLabel>First Accordion</IonLabel>
              </IonItem>
              <div id="highlightContent" className="ion-padding" slot="content">
                First Content
              </div>
            </IonAccordion>
            <IonAccordion className="highlight" value="second">
              <IonItem className="highlightColor" slot="header" color="gray">
                <IonLabel>Second Accordion</IonLabel>
              </IonItem>
              <div id="highlightContent" className="ion-padding" slot="content">
                Second Content
              </div>
            </IonAccordion>
            <IonAccordion
              toggleIcon={arrowDownCircleOutline}
              className="highlight"
              value="third"
            >
              <IonItem className="highlightColor" slot="header" color="gray">
                <IonLabel>Third Accordion</IonLabel>
              </IonItem>
              <div id="highlightContent" className="ion-padding" slot="content">
                Third Content
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        </IonCard>
        <IonCard>
          <IonCardHeader className="cardThree">
            <IonCardTitle>Picture Accordion</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="cardThree">
            Highlight accordions, you can use them with or without icons, it's
            incredibly Highlight.
          </IonCardContent>
          <IonAccordionGroup expand="inset">
            <IonAccordion
              toggleIcon={addOutline}
              value="first"
              className="accordion-background one"
            >
              <IonItem className="highlightColor" slot="header" color="gray">
                <IonLabel className="pictureAccordionLabel">
                  First Accordion
                </IonLabel>
              </IonItem>
              <div id="highlightContent" className="ion-padding" slot="content">
                First Content
              </div>
            </IonAccordion>
            <IonAccordion className="accordion-background two" value="second">
              <IonItem className="highlightColor" slot="header" color="gray">
                <IonLabel className="pictureAccordionLabel">
                  Second Accordion
                </IonLabel>
              </IonItem>
              <div id="highlightContent" className="ion-padding" slot="content">
                Second Content
              </div>
            </IonAccordion>
            <IonAccordion
              toggleIcon={arrowDownCircleOutline}
              className="accordion-background three"
              value="third"
            >
              <IonItem className="highlightColor" slot="header" color="gray">
                <IonLabel className="pictureAccordionLabel">
                  Third Accordion
                </IonLabel>
              </IonItem>
              <div id="highlightContent" className="ion-padding" slot="content">
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

export default Cards;
