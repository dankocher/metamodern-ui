import { TypesDatePicker as Type } from "./typesDatePicker.enum";

export interface MetDatePickerProps {
  /**
   * Additional component styles
   */
  style?: object;
  /**
   * Additional component classes
   */
  className?: string;
  /**
   * Date and week day names font for component
   */
  dateFontClass?: string;
  /**
   * Title of calendar and days of the month font for component
   */
  calendarFontClass?: string;
  /**
   * Sets the selected date by default
   */
  defaultSelectedDate?: number,
  /**
   * Type of DatePicker
   */
  type: Type;
  /**
   * To set the date format, refer to moment.js
   */
  format?: string,
  /**
   * Sets the main icon for a component
   */
  defaultCalendarIcon?;
  /**
   * Sets the arrow icon for a component
   */
  defaultArrowIcon?;
  /**
   * Callback function, can be executed when the selected time is changing
   */
  onChange: (event: MouseEvent, date: number) => void,
  /**
   * Change main color
   */
  mainColor?: string;
  /**
   * Change background color
   */
  bgColor?: string;
  /**
   * Change main color of hovered option
   */
  mainHoverColor?: string;
  /**
   * Change calendar title color
   */
  headerColor?: string;
  /**
   * Change calendar title color of hovered option
   */
  headerHoverColor?: string,
  /**
   * Change week day names color
   */
  weekDayFontColor?: string,
  /**
   * Change color in current day/month/year
   */
  primaryFontColor?: string,
  /**
   * Change color in current day/month/year of hovered option
   */
  hoverDateBgColor?: string,
  /**
   * Change background color in selected day/month/year and border color in present date
   */
  selectedColor?: string,
  /**
   * Change color in selected day/month/year
   */
  selectedFontColor?: string,
  /**
   * Change color in another day/year
   */
  secondaryFontColor?: string,
}
