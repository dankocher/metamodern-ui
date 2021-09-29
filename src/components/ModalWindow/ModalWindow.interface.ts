export type MetModalWindowProps = {
  /**
   * Additional component styles
   */
  style?: object;
  /**
   * Additional component classes
   */
  className?: string;
  /**
   * Set title for component
   */
  title?: string;
  /**
   * Set text for component
   */
  text?: string;
  /**
   * Set text for button "proceed"
   */
   acceptText?: string;
  /**
   * Set text for button "cancel"
   */
  cancelText?: string;
  /**
   * Change background and border color
   */
  acceptColor?: string;
  /**
   * Change background and border color
   */
  cancelColor?: string;
  /**
   * Change background and border color
   */
  iconColor?: string;
  /**
   * Function for triggering the onClick event for the "accept" button
   */
  acceptOnClick: (e) => void;
  /**
   * Function for triggering the onClick event for the "cancel" button
   */
  cancelOnClick: (e) => void;
  /**
   * Function to handle closing a modal window
   */
  onClose: () => void;
  /**
   * Font for component
   */
  fontClass?: string;
  /**
   * Parameter allowing display of the component
   */
  isDisplayed?: boolean;
  /**
   * Set an icon for the component
   */
  icon?;
};
