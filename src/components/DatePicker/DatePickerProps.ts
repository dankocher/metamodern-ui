import { TypesDatePicker as Type } from "./typesDatePicker.enum";

export type MetDatePickerProps = {
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
   * Type of DatePicker
   */
  type: Type;
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
  onChange?: (event: MouseEvent, date: number) => void,
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
  calendarTitleColor?: string;
  /**
   * Change calendar title color of hovered option
   */
  hoverTitleColor?: string,
  /**
   * Change week day names color
   */
  weekDayNamesColor?: string,
  /**
   * Change color in current day/month/year
   */
  calendarColor?: string,
  /**
   * Change color in current day/month/year of hovered option
   */
  calendarHoverBgColor?: string,
  /**
   * Change background color in selected day/month/year
   */
  calendarBgColor?: string,
  /**
   * Change color in selected day/month/year
   */
  selectedDateColor?: string,
  /**
   * Change color in another day/year
   */
  anotherDateColor?: string,
};
