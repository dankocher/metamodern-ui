import { TypesDatePicker as Type } from "../typesDatePicker.enum"

export interface CalendarProps {
  onChange: (event: MouseEvent, date: number) => void;
  dateFontClass?: string;
  calendarFontClass?: string;

  setIsOpen?: (isOpen: boolean) => void;
  selectedDate?: Date;
  currentDate?: Date;
  setSelectedDate?: (selectedDate: Date) => void;
  setIsFullCalendarOpen?: (isFullCalendarOpen: boolean) => void;
  type?: Type;

  defaultArrowIcon?;

  bgColor?: string,
  headerColor?: string;
  headerHoverColor?: string;
  weekDayFontColor?: string;
  primaryFontColor?: string;
  hoverDateBgColor?: string;
  selectedColor?: string;
  selectedFontColor?: string;
  secondaryFontColor?: string;
}
