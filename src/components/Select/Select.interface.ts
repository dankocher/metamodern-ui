import { SelectState } from "./selectState.enum";

export interface MetSelectProps {
  /**
   * Additional component styles
   */
  style?: object;
  /**
   * Additional component classes
   */
  className?: string;
  /**
   * Selector font for component
   */
  selectorFontClass?: string;
  /**
   * Label font for component
   */
  labelFontClass?: string;
  /**
   * Value by default
   */
  defaultSelection?: Array<{ id: number; value: string }>;
  /**
   * Function get selection
   */
  onChange?: (selection: Array<{ id: number; value: string }>) => void;
  /**
   * Set visual type of component Select
   */
  isHaveLabel?: boolean;
  /**
   * Set label for Select component
   */
  label?: string;
  /**
   * Set an error icon for the component message
   */
  icon?: any;
  /**
   * Set placeholder when variant not selected
   */
  placeholder?: string;
  /**
   * Is component disabled
   */
  isDisabled?: boolean;
  /**
   * Set component state
   */
  state?: SelectState;
  /**
   * Set variants type { id: number; value: string }
   */
  items: Array<{ id: number; value: string }>;
  /**
   *  When true you can choose 2 or more variants
   */
  multiSelect?: boolean;
  /**
   * Change border color
   */
  borderColor?: string;
  /**
   * Change background color of selected option
   */
  selectedColor?: string;
  /**
   * Change background color of hovered option
   */
  hoverColor?: string;
  /**
   * Change color of placeholder
   */
  placeholderColor?: string;
  /**
   * Change color of border when input is error
   */
  errorColor?: string;
  /**
   * Change color of border when input is success
   */
  successColor?: string;
}
