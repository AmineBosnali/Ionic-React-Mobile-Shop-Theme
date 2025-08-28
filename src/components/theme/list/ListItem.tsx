import {
    IonItem,
    IonLabel,
    IonIcon,
  } from "@ionic/react";
  import {
    arrowRedoCircleOutline,
  } from "ionicons/icons";
  
  interface ListItemProps {
    color?: 'danger' | 'info' | 'success' |'default' | 'primary' | 'secondary';
    size?: 'small' | 'default' | 'large';
    icon?: any;
    label?: string;
    subLabel?: string;
    arrow?: boolean;
    line?:boolean;
    onClick?: () => void;
  }
  
  const ListItem: React.FC<ListItemProps> = ({
    size = 'default', 
    color,
    icon,
    label,
    subLabel,
    arrow,
    line,
    ...props
  }) => {
    return (
     <>
      <IonItem {...props}>
        <IonIcon style={{ backgroundColor: color }} size={size} 
        className={['iconBoxList', `iconBoxList ${color}`].join(' ')}
         icon={icon} />
        <IonLabel>
          {label}
          <div className="subtext">{subLabel}</div>
        </IonLabel>
        {arrow && <IonIcon size="small" icon={arrowRedoCircleOutline} />}        
      </IonItem>
      {line && <hr/> }
     </>
    );
  };
  
  export default ListItem;
  