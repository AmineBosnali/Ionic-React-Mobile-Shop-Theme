import React from "react";
import { IonButton } from "@ionic/react";

interface ButtonProps {
  id?: string;
  expand?: "block" | "full";
  color?: "danger" | "info" | "success" | "default" | "warning";
  size?: "small" | "default" | "large";
  icon?: any;
  label?: string;
  disabled?: any;
  type?: "submit" | "reset" | "button";
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  size = "default",
  expand = "block",
  color,
  icon,
  label,
  disabled,
  type,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <IonButton
      className={`themeButton ${color} ${expand} ${className}`}
      size={size}
      expand={expand}
      disabled={disabled}
      type={type}
      {...props}
    >
      {icon && icon}
      {label && label}
    </IonButton>
  );
};
