import { IonGrid, IonRow, IonCol } from "@ionic/react";

export interface MenuItem {
  title: string;
  badgeText: string;
  badgeColor: string;
  imageSrc: string;
  onClick?: () => void;
}

interface MenuGridProps {
  items: MenuItem[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ items }) => (
  <IonGrid className="menu-grid">
    <IonRow className="menu-row">
      {items.map((item, idx) => (
        <IonCol key={idx} size="3" className="menu-col" onClick={item.onClick}>
          <div className="menu-circle-wrapper">
            <div
              className="menu-circle"
              style={{ borderColor: item.badgeColor }}
            >
              <img
                src={item.imageSrc}
                alt={item.title}
                className="menu-image"
              />
            </div>
            <div
              className="menu-badge"
              style={{ backgroundColor: item.badgeColor }}
            >
              {item.badgeText}
            </div>
          </div>
          <div className="menu-title">{item.title}</div>
        </IonCol>
      ))}
    </IonRow>
  </IonGrid>
);

export default MenuGrid;
