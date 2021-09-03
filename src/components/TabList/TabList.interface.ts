export type MetTabListProps = {
  /**
   * Additional component styles
   */
  style?: object;
  /**
   * Additional component classes
   */
  className?: string;
  /**
   * Set variants type { id: string; value: string }
   */
  items: Array<{ id: string; value: string; onClick: (event) => void }>;
  /**
   * Font for component
   */
  fontClass?: string;
  /**
   * Сhange background color when tab is not selected
   */
  defaultBgColor?: string;
  /**
   * Сhange background color when tab is selected
   */
  selectedBgColor?: string;
  /**
   * Сhange border color
   */
  borderColor?: string;
};
