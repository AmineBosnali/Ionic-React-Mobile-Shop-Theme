import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonIcon,
  IonButton,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
} from "@ionic/react";
/* Components */
import Banner from "../components/theme/Banner";
import Footer from "../components/theme/Footer";
import {
  eyeOutline,
  pencilOutline,
  pencilSharp,
  saveOutline,
  searchOutline,
} from "ionicons/icons";
import { Button } from "../components/theme/button/Button";

const Tables: React.FC = () => {
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<{
    name: string;
    age: number;
    city: string;
  } | null>(null);

  const sortTable = (n: number, direction: string) => {
    const table = document.querySelector(".sortableTable")!;
    let rows = Array.from(table.querySelectorAll(".row"));
    rows.sort((a, b) => {
      const x = a.querySelectorAll("ion-col")[n].innerHTML.toLowerCase();
      const y = b.querySelectorAll("ion-col")[n].innerHTML.toLowerCase();

      if (direction === "asc") {
        return x > y ? 1 : -1;
      } else {
        return x < y ? 1 : -1;
      }
    });
    rows.forEach((row) => table.appendChild(row));
  };

  useEffect(() => {
    filterTable(filter);
  }, [filter]);

  const filterTable = (value: string) => {
    const filter = value.toLowerCase();
    const rows = document.querySelectorAll(
      ".filterableTable .row"
    ) as NodeListOf<HTMLTableRowElement>;
    rows.forEach((row, index) => {
      const cells = row.getElementsByTagName("ion-col");
      const cellValue = cells[0].innerText.toLowerCase();
      row.style.display = cellValue.includes(filter) ? "" : "none";
      row.style.backgroundColor = index % 2 === 0 ? "rgb(46 46 46)" : "none";
      row.style.color = index % 2 === 0 ? "#ffffff" : "";
    });
  };

  return (
    <>
      <Banner label="Tables" subLabel="You can see all tables" />
      <IonContent fullscreen>
        <IonCard className="cardThree">
          <IonCardHeader>
            <IonCardTitle>Simple Table</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="tableContainer">
              <IonGrid className="simpleTable">
                <IonRow className="headerRow">
                  <IonCol>Name</IonCol>
                  <IonCol>Age</IonCol>
                  <IonCol>City</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>John Doe</IonCol>
                  <IonCol>25</IonCol>
                  <IonCol>New York</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>Jane Smith</IonCol>
                  <IonCol>30</IonCol>
                  <IonCol>Los Angeles</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>Sam Johnson</IonCol>
                  <IonCol>22</IonCol>
                  <IonCol>Chicago</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>Sam Johnson</IonCol>
                  <IonCol>22</IonCol>
                  <IonCol>Chicago</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>Sam Johnson</IonCol>
                  <IonCol>22</IonCol>
                  <IonCol>Chicago</IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard className="cardThree">
          <IonCardHeader>
            <IonCardTitle>Table with Images</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="tableContainer">
              <IonGrid className="imageTable">
                <IonRow className="headerRow">
                  <IonCol>Profile</IonCol>
                  <IonCol>Name</IonCol>
                  <IonCol>Position</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>
                    <img src="/images.jpg" className="tableImage" alt="Profile 1" />
                  </IonCol>
                  <IonCol>Emily Davis</IonCol>
                  <IonCol>Manager</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>
                    <img src="/images.jpg" className="tableImage" alt="Profile 2" />
                  </IonCol>
                  <IonCol>Michael Brown</IonCol>
                  <IonCol>Developer</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>
                    <img src="/images.jpg" alt="Profile 3" />
                  </IonCol>
                  <IonCol>Sarah Wilson</IonCol>
                  <IonCol>Designer</IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard className="cardThree">
          <IonCardHeader>
            <IonCardTitle>Table with Checkboxes</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="tableContainer">
              <IonGrid className="checkboxTable">
                <IonRow className="headerRow">
                  <IonCol>Select</IonCol>
                  <IonCol>Product</IonCol>
                  <IonCol>Price</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>
                    <IonCheckbox />
                  </IonCol>
                  <IonCol>Laptop</IonCol>
                  <IonCol>$999</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>
                    <IonCheckbox />
                  </IonCol>
                  <IonCol>Smartphone</IonCol>
                  <IonCol>$599</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>
                    <IonCheckbox />
                  </IonCol>
                  <IonCol>Tablet</IonCol>
                  <IonCol>$399</IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard className="cardThree">
          <IonCardHeader>
            <IonCardTitle>Sortable Table</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="tableContainer">
              <IonGrid className="sortableTable">
                <IonRow className="headerRow">
                  <IonCol>
                    Name
                    <IonSelect
                      className="sortableButton"
                      onIonChange={(e) =>
                        sortTable(0, e.detail.value.split(" ")[1])
                      }
                    >
                      <IonSelectOption value="0 asc">A-Z</IonSelectOption>
                      <IonSelectOption value="0 desc">Z-A</IonSelectOption>
                    </IonSelect>
                  </IonCol>
                  <IonCol>
                    Age
                    <IonSelect
                      className="sortableButton"
                      onIonChange={(e) =>
                        sortTable(1, e.detail.value.split(" ")[1])
                      }
                    >
                      <IonSelectOption value="1 asc">Low-High</IonSelectOption>
                      <IonSelectOption value="1 desc">High-Low</IonSelectOption>
                    </IonSelect>
                  </IonCol>
                  <IonCol>
                    City
                    <IonSelect
                      className="sortableButton"
                      onIonChange={(e) =>
                        sortTable(2, e.detail.value.split(" ")[1])
                      }
                    >
                      <IonSelectOption value="2 asc">A-Z</IonSelectOption>
                      <IonSelectOption value="2 desc">Z-A</IonSelectOption>
                    </IonSelect>
                  </IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>Anna Lee</IonCol>
                  <IonCol>28</IonCol>
                  <IonCol>San Francisco</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>Tom Hanks</IonCol>
                  <IonCol>45</IonCol>
                  <IonCol>Boston</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>James Bond</IonCol>
                  <IonCol>35</IonCol>
                  <IonCol>Miami</IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard className="cardThree">
          <IonCardHeader>
            <IonCardTitle>Filterable Table</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonInput
                labelPlacement="floating"
                label="Filter by Name"
                value={filter}
                onIonChange={(e) => setFilter(e.detail.value!)}
              />
            </IonItem>
            <div className="tableContainer">
              <IonGrid className="filterableTable">
                <IonRow className="headerRow">
                  <IonCol>Name</IonCol>
                  <IonCol>Age</IonCol>
                  <IonCol>City</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>Oliver Twist</IonCol>
                  <IonCol>21</IonCol>
                  <IonCol>Seattle</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>Harry Potter</IonCol>
                  <IonCol>25</IonCol>
                  <IonCol>Orlando</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>Frodo Baggins</IonCol>
                  <IonCol>33</IonCol>
                  <IonCol>Shire</IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </IonCardContent>
        </IonCard>
        <IonCard className="cardThree">
          <IonCardHeader>
            <IonCardTitle>Editable Table</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="tableContainer">
              <IonGrid className="editableTable">
                <IonRow className="headerRow">
                  <IonCol>Name</IonCol>
                  <IonCol>Age</IonCol>
                  <IonCol>City</IonCol>
                  <IonCol>Save</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol contentEditable>John Doe</IonCol>
                  <IonCol contentEditable>25</IonCol>
                  <IonCol contentEditable>New York</IonCol>
                  <IonCol>
                    <Button
                      color="success"
                      size="small"
                      className="tableButton"
                      icon={<IonIcon icon={saveOutline} />}
                    />
                  </IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol contentEditable>Jane Smith</IonCol>
                  <IonCol contentEditable>30</IonCol>
                  <IonCol contentEditable>Los Angeles</IonCol>
                  <IonCol>
                    <Button
                      color="success"
                      size="small"
                      className="tableButton"
                      icon={<IonIcon icon={saveOutline} />}
                    />
                  </IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol contentEditable>Sam Johnson</IonCol>
                  <IonCol contentEditable>22</IonCol>
                  <IonCol contentEditable>Chicago</IonCol>
                  <IonCol>
                    <Button
                      color="default"
                      size="small"
                      className="tableButton"
                      icon={<IonIcon icon={saveOutline} />}
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard className="cardThree">
          <IonCardHeader>
            <IonCardTitle>Details Table</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="tableContainer">
              <IonGrid className="detailsTable">
                <IonRow className="headerRow">
                  <IonCol>Name</IonCol>
                  <IonCol>Age</IonCol>
                  <IonCol>City</IonCol>
                  <IonCol>Details</IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>Oliver Twist</IonCol>
                  <IonCol>21</IonCol>
                  <IonCol>Seattle</IonCol>
                  <IonCol>
                    <Button
                      color="default"
                      size="small"
                      onClick={() => {
                        setModalData({
                          name: "Oliver Twist",
                          age: 21,
                          city: "Seattle",
                        });
                        setShowModal(true);
                      }}
                      className="tableButton"
                      icon={<IonIcon icon={eyeOutline} />}
                    />
                  </IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>Harry Potter</IonCol>
                  <IonCol>25</IonCol>
                  <IonCol>Orlando</IonCol>
                  <IonCol>
                    <Button
                      color="default"
                      size="small"
                      onClick={() => {
                        setModalData({
                          name: "Harry Potter",
                          age: 25,
                          city: "Orlando",
                        });
                        setShowModal(true);
                      }}
                      icon={<IonIcon icon={eyeOutline} />}
                      className="tableButton"
                    />
                  </IonCol>
                </IonRow>
                <IonRow className="row">
                  <IonCol>Frodo Baggins</IonCol>
                  <IonCol>33</IonCol>
                  <IonCol>Shire</IonCol>
                  <IonCol>
                    <Button
                      color="default"
                      size="small"
                      onClick={() => {
                        setModalData({
                          name: "Frodo Baggins",
                          age: 33,
                          city: "Shire",
                        });
                        setShowModal(true);
                      }}
                      icon={<IonIcon icon={eyeOutline} />}
                      className="tableButton"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </IonCardContent>
        </IonCard>

        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Details</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {modalData && (
              <div style={{ padding: 20 }}>
                <p>
                  <strong>Name:</strong> {modalData.name}
                </p>
                <p>
                  <strong>Age:</strong> {modalData.age}
                </p>
                <p>
                  <strong>City:</strong> {modalData.city}
                </p>
              </div>
            )}
          </IonContent>
        </IonModal>

        <Footer />
      </IonContent>
    </>
  );
};

export default Tables;
