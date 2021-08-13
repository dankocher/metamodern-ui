import { Size } from "./size";
import { Type } from "./type";

export type MetRectangleTextBtnProps = {
  /**
   * Function for trigger event onClick
   */
  onClick: (e) => void;
  /**
   * Is component disabled
   */
  isDisabled?: boolean;
  /**
   * Size of Button
   */
  size?: Size.lg | Size.md;
  /**
   * Type of Button
   */
  type: Type.fill | Type.line | Type.ghost | Type.red;
  /**
   * Additional component styles
   */
  style?: object;
  /**
   * Additional component classes
   */
  className?: string;
  /**
   * Button title font for component
   */
  titleFontClass?: string;
  /**
   * Change border
   */
  border?: string,
  /**
   * Change background color
   */
  bgColor?: string;
  /**
   * Change background color when component is hovered
   */
  hoverColor?: string;
};
