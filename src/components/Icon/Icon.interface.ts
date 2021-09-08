import { Icons } from "./icons.enum";

export interface MetIconProps {
  /**
   * Additional component styles
   */
  style?: object;
  /**
   * Additional component classes
   */
  className?: string;
  /**
   * Change color icon
   */
  color?: string;
  /**
   * Icon name or custom icon in svg format
   */
  icon: Icons | string;
  /**
   * Height and width of the icon
   */
  size?: number;
}
