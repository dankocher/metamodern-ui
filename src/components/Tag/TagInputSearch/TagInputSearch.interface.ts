import { MetTagProps } from "../Tag.interface";
import { MetCircleIconBtnProps } from "../../CircleIconBtn";

export interface MetTagInputSearchProps
  extends MetTagProps,
    MetCircleIconBtnProps {
  /**
   * Font color when component is hovered
   */
  hoverFontColor?: string;
  /**
   * Default border color
   */
  defaultBorderColor?: string;
  /**
   * Default font color
   */
  defaultFontColor?: string;
  /**
   * Function for trigger event onChange
   */
  onChange: (event: any) => void;
  /**
   * Function for trigger event onBlur
   */
  onBlur?: (event: any) => void;
  /**
   * Function for trigger when clicked checkbox
   */
  onToggle?: () => void;
  /**
   * Set state when component is checked/unchecked
   */
  isChecked: boolean;
  /**
   * Substring to highlight
   */
  searchValue?: string;
  /**
   * Сhange hover checkbox color
   */
  hoverCheckboxColor?: string;
  /**
   * Add ref to input
   */
  innerRef?: any;
}
