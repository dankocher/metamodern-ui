import React, { useState } from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetDatePicker, {
  MetDatePickerProps,
  TypesDatePicker as Type,
} from "./index";

import { action } from "@storybook/addon-actions";
import { withKnobs, color, select, boolean, date } from "@storybook/addon-knobs";

import mdx from "./DatePicker.mdx";

export default {
  title: "Example/DatePicker",
  component: MetDatePicker,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

const calendarDate = "Calendar date";
const calendarMonth = "Calendar month";

export const Default = () => {
  const [date, setDate] = useState()
  const onChange = (date) => {
    setDate(date);
  }

  const DatePickerProps = (): MetDatePickerProps => ({
    dateFontClass: "caption",
    calendarFontClass: "subtitle3",

    //shownDate: date("Date"),
    type: select(
      "Type of date",
      {
        Date: Type.DATE,
        Month: Type.MONTH,
      },
      Type.DATE
    ),
    onChange,


    mainColor: color("Main color", undefined),
    bgColor: color("Background color", undefined),
    mainHoverColor: color("Main hover color", undefined),

    calendarTitleColor: color("Calendar title color", undefined, calendarDate),
    hoverTitleColor: color("Calendar title hover color", undefined, calendarDate),
    weekDayNamesColor: color("Week day names color", undefined, calendarDate),
    dayColor: color("Day color in current month", undefined, calendarDate),
    dayHoverBgColor: color("Day hover background color", undefined, calendarDate),
    dayBgColor: color("Present day border color and selected day background color", undefined, calendarDate),
    selectedDayColor: color("Selected day color", undefined, calendarDate),
    anotherMonthDayColor: color("Another month day color", undefined, calendarDate),
  });

  return <MetDatePicker {...DatePickerProps()} />;
};
