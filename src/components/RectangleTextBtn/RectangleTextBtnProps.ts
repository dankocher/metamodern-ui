import { Size } from "./sizeRetangleTextBtn";
import { Type } from "./typesRetangleTextBtn";

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
  size?: Size.LARGE | Size.MEDIUM;
  /**
   * Type of Button
   */
  type: Type.PRIMARY | Type.SECONDARY | Type.GHOST | Type.ATTENTION;
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
  borderColor?: string,
  /**
   * Change background color
   */
  bgColor?: string;
  /**
   * Change background color when component is hovered
   */
  hoverColor?: string;
};
