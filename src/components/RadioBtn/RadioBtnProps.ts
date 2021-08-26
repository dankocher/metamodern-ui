export type MetRadioBtnProps = {
  /**
   * Additional component styles
   */
  style?: object;
  /**
   * Additional component classes
   */
  className?: string;
  /**
   * Label font for component
   */
  labelFontClass?: string;
  /**
   * Set default state 
   */
   defaultSelection?: string;
  /**
   * Function for trigger event onChange
   */
  onChange: (e) => void;
  /**
   * Set variants type { id: number; value: string }
   */
  items: Array<{ id: string; value: string; label: string }>;
  /**
   * Сhange background color
   */
  bgColor?: string;
  /**
   * Set component disabled
   */
  isDisabled?: boolean;
  /**
   * Сhange background color when component is hovered
   */
  hoverColor?: string;
  /**
   * Сhange color of circle/text when input is error
   */
  errorColor?: string;
  /**
   * Сhange border color
   */
  radioButtonColor?: string;
  /**
   * Paint the component red
   */
  isError?: boolean;
};
