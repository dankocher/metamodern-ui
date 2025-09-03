import { TextFieldState as stateTF } from "./textFieldState.enum";
import React from "react";

export interface MetTextFieldProps {
  /**
   * Additional component styles
   */
  style?: object;
  /**
   * Additional component styles
   */
  className?: string;
  /**
   * Input font for component
   */
  inputFontClass?: string;
  /**
   * Label font for component
   */
  labelFontClass?: string;
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
   * When true, pressing Enter will blur the input (triggering onBlur)
   */
  blurOnEnter?: boolean;
  /**
   * Is the text selected in text field
   */
  isTextSelected?: boolean;
  /**
   * Placeholder
   */
  placeholder?: string;
  /**
   * Is component disabled
   */
  isDisabled?: boolean;
  /**
   * Set visual type of component TextField/Input
   */
  isTextField: boolean;
  /**
   * Set label for TextField component
   */
  label?: string;
  /**
   * The element that comes after label, or instead of him
   */
  labelChildren?: React.ReactNode;
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
}
