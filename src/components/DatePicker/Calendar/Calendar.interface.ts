import { TypesDatePicker as Type } from "../typesDatePicker.enum";

export interface CalendarProps {
  onChange: (event: MouseEvent, date: number) => void;
  dateFontClass?: string;
  calendarFontClass?: string;
  selectMonthLabel?: string;
  selectYearLabel?: string;

  setIsOpen?: (isOpen: boolean) => void;
  selectedDate?: Date;
  currentDate?: Date;
  setSelectedDate?: (selectedDate: Date) => void;
  setIsFullCalendarOpen?: (isFullCalendarOpen: boolean) => void;
  type?: Type;
  moment: any;
  arrowIcon?;

  bgColor?: string;
  headerColor?: string;
  headerHoverColor?: string;
  weekDayFontColor?: string;
  primaryFontColor?: string;
  hoverDateBgColor?: string;
  selectedColor?: string;
  selectedFontColor?: string;
  secondaryFontColor?: string;
}
