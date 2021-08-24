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
   *
   */
  defaultSelectedDate?: number,
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
  primaryColor?: string,
  /**
   * Change color in current day/month/year of hovered option
   */
  hoverDateBgColor?: string,
  /**
   * Change background color in selected day/month/year and border color in present date
   */
  extraColor?: string,
  /**
   * Change color in selected day/month/year
   */
  selectedDateColor?: string,
  /**
   * Change color in another day/year
   */
  secondaryDateColor?: string,
}
