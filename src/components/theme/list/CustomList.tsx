import { useHistory } from "react-router-dom";
import { IonList } from "@ionic/react";
import {
  albumsOutline,
  giftOutline,
  magnetOutline,
  checkboxOutline,
  imagesOutline,
  arrowBackOutline,
  chatbox,
  qrCode,
  listOutline,
  textOutline,
} from "ionicons/icons";
/* Components */
import ListItem from "./ListItem";

const CustomList: React.FC = () => {
  const history = useHistory();

  return (
    <IonList lines="none">
      <ListItem
        color="danger"
        size="small"
        icon={giftOutline}
        label="Basic Cards"
        subLabel="Click and use"
        arrow={true}
        line={true}
        onClick={() => history.push("/cards")}
      />
      <ListItem
        color="success"
        size="small"
        icon={magnetOutline}
        label="Advertising"
        subLabel="Click and use"
        onClick={() => history.push("/adv")}
        arrow={true}
        line={true}
      />
      <ListItem
        color="primary"
        size="small"
        icon={albumsOutline}
        onClick={() => history.push("/accordions")}
        label="Accordions"
        subLabel="Click and use"
        arrow={true}
        line={true}
      />
      <ListItem
        color="default"
        size="small"
        icon={checkboxOutline}
        label="Forms"
        subLabel="Click and use"
        onClick={() => history.push("/forms")}
        arrow={true}
        line={true}
      />
      <ListItem
        color="danger"
        size="small"
        icon={imagesOutline}
        onClick={() => history.push("/images")}
        label="Images"
        subLabel="Click and use"
        arrow={true}
        line={true}
      />
      <ListItem
        color="secondary"
        size="small"
        icon={checkboxOutline}
        onClick={() => history.push("/charts")}
        label="Charts"
        subLabel="Click and use"
        arrow={true}
        line={true}
      />
      <ListItem
        color="default"
        size="small"
        icon={chatbox}
        onClick={() => history.push("/chats")}
        label="Chats"
        subLabel="Click and use"
        arrow={true}
        line={true}
      />
      <ListItem
        color="primary"
        size="small"
        icon={arrowBackOutline}
        label="Sliders"
        onClick={() => history.push("/sliders")}
        subLabel="Click and use"
        arrow={true}
        line={true}
      />
      <ListItem
        color="secondary"
        size="small"
        icon={textOutline}
        label="Comments"
        onClick={() => history.push("/comments")}
        subLabel="Click and use"
        arrow={true}
        line={true}
      />
      <ListItem
        color="success"
        size="small"
        icon={qrCode}
        onClick={() => history.push("/qr")}
        label="QR"
        subLabel="Click and use"
        arrow={true}
        line={true}
      />
      <ListItem
        color="danger"
        size="small"
        icon={listOutline}
        label="Tables"
        onClick={() => history.push("/tables")}
        subLabel="Click and use"
        arrow={true}
        line={true}
      />
      <ListItem
        color="default"
        size="small"
        icon={checkboxOutline}
        label="Categories"
        onClick={() => history.push("/categories")}
        subLabel="Click and use"
        arrow={true}
        line={false}
      />
    </IonList>
  );
};

export default CustomList;
