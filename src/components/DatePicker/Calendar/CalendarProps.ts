import { TypesDatePicker as Type } from "../typesDatePicker.enum"

export interface CalendarProps {
  onChange?: (event: MouseEvent, date: number) => void;
  dateFontClass?: string;
  calendarFontClass?: string;

  setIsOpen?: (isOpen: boolean) => void;
  showDate?: Date;
  selectedDate?: Date;
  currentDate?: Date;
  setSelectedDate?: (selectedDate: Date) => void;
  setIsFullCalendarOpen?: (isFullCalendarOpen: boolean) => void;
  type?: Type;

  defaultArrowIcon?;

  bgColor?: string,
  calendarTitleColor?: string;
  hoverTitleColor?: string;
  weekDayNamesColor?: string;
  calendarColor?: string;
  calendarHoverBgColor?: string;
  calendarBgColor?: string;
  selectedDateColor?: string;
  anotherDateColor?: string;
}
