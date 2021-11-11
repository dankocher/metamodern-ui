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
   * Child element of tab list
   * (required element)
   */
  children: React.ReactNode;
  /**
   * Set variants type { id: string; value: string, onClick(event, id), notifications: number }.
   * Field "notifications" is not required.
   */
  items: Array<{
    id: string;
    value: string;
    onChange: (event, id) => void;
    notifications?: number;
  }>;
  /**
   * Set default selection by id of item
   */
  defaultSelection?: string;
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
  /**
   * Change notification color
   */
  notificationColor?: string;
  /**
   * Change notification background color
   */
  notificationBgColor?: string;
};
