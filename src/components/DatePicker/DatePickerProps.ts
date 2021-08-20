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
   * Originally shown date as placeholder
   */
  //shownDate?: Date | number;
  /**
   * Type of Button
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
  onChange?: (date: Date) => void,


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


  weekDayNamesColor?: string,
  dayColor?: string,
  dayHoverBgColor?: string,
  dayBgColor?: string,
  selectedDayColor?: string,
  anotherMonthDayColor?: string,
};
