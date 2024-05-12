import React from "react";

type IconType = "arrow" | "close";

type iconPosition = "left" | "right";
export interface TopBarProps {
  title: string;
  iconType: IconType;
  iconPosition?: iconPosition;
  style?: React.CSSProperties;
}
