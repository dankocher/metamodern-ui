import { Type } from "./index";

export type MetRectangleIconBtnProps = {
  /**
   * Is component disabled
   */
  isDisabled?: boolean;
  /**
   * Additional component styles
   */
  style?: object;
  /**
   * Additional component classes
   */
  className?: string;
  /**
   * Set an icon for the component
   */
  icon?;
  /**
   * Type of Button
   */
  type: Type.fill | Type.line | Type.ghost;
  /**
   * Function for trigger event onClick
   */
  onClick: (e) => void;
  /**
   * Change border color
   */
  borderColor?: string;
  /**
   * Change background color
   */
  bgColor?: string;
  /**
   * Change default icon color
   */
  defaultIconColor?: string;
  /**
   * Change background color when component is hovered
   */
  hoverColor?: string;
};
