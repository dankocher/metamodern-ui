import { textFieldState as stateTF } from "./textFieldState";

export type MetTextFieldProps = {
  /**
   * Additional component styles
   */
  style?: object;
  /**
   * Value
   */
  value: string;
  /**
   * Function for trigger event onChange
   */
  onChange: (event: any) => void;
  /**
   * Function for trigger event onBlur
   */
  onBlur?: (event: any) => void;
  /**
   * Placeholder
   */
  placeholder?: string;
  /**
   * Is component disabled
   */
  isDisabled?: boolean;
  /**
   * Set visual type of component with/without message
   */
  isHaveMessage: boolean;
  /**
   * Set an error icon for the component message
   */
  errorIcon?;
  /**
   * Set an success icon for the component message
   * *(if not specified, it will be without an icon)
   */
  successIcon?;
  /**
   * Set an error text for the component message
   * *(if not specified, it will be without an icon)
   */
  errorMessage?: string;
  /**
   * Set an success text for the component message
   */
  successMessage?: string;
  /**
   * Set component state
   */
  state?: stateTF;
  /**
   * Сhange border color when input is default
   */
  defaultColor?: string;
  /**
   * Сhange border color when input is hovered
   */
  hoverColor?: string;
  /**
   * Сhange border color when input is focused
   */
  focusColor?: string;
  /**
   * Сhange color of border/icon/message when input is error
   */
  errorColor?: string;
  /**
   * Сhange color of border/icon/message when input is success
   */
  successColor?: string;
};
