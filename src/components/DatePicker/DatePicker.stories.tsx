import React, { useState } from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetDatePicker, {
  MetDatePickerProps,
  TypesDatePicker as Type,
} from "./index";

import { withKnobs, color, select, date } from "@storybook/addon-knobs";

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

const calendarColors = "Calendar colors";

export const Default = () => {
  const [selectedDate, setSelectedDate] = useState();

  const onChange = (event, selectedDate) => {
    setSelectedDate(selectedDate);
  };

  const DatePickerProps = (): MetDatePickerProps => ({
    onChange,
    dateFontClass: "caption",
    calendarFontClass: "subtitle3",
    type: select(
      "Type of date",
      {
        "Full calendar": Type.FULL,
        "Short calendar": Type.SHORT,
      },
      Type.FULL
    ),
    mainColor: color("Main color", undefined),
    bgColor: color("Background color", undefined),
    mainHoverColor: color("Main hover color", undefined),
    calendarTitleColor: color("Calendar title color", undefined, calendarColors),
    hoverTitleColor: color("Calendar title hover color", undefined, calendarColors),
    weekDayNamesColor: color("Week day names color", undefined, calendarColors),
    primaryColor: color("Color in current date", undefined, calendarColors),
    hoverDateBgColor: color("Date hover background color", undefined, calendarColors),
    extraColor: color("Present date border color and selected date background color", undefined, calendarColors),
    selectedDateColor: color("Selected date color", undefined, calendarColors),
    secondaryDateColor: color("Another day/year color", undefined, calendarColors),
  });

  return <MetDatePicker {...DatePickerProps()} />;
};
