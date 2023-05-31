import { SelectState } from "./selectState.enum";

export type ItemProps = {
  id: string;
  value: string;
};

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
   * React component added at the end of the list
   */
  bottomChildren?: React.ReactNode;
  /**
   * Default value ID
   */
  defaultSelectionIDList?: Array<string>;
  /**
   * It is used when you need to set a value without using a selector and it is not the default (use only state value) *
   */
  valueIDList?: Array<string>;
  /**
   * Function get selection
   */
  onChange?: (selection: Array<ItemProps>) => void;
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
  items: Array<ItemProps>;
  /**
   *  When true you can choose 2 or more variants
   */
  multiSelect?: boolean;
  /**
   *  The number of items that are visible when the list is expanded
   */
  countItemList?: number;
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
