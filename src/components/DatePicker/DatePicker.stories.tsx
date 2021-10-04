import React, { useState } from "react";
import * as defaultMoment from "moment";

import { Meta } from "@storybook/react/types-6-0";

import MetDatePicker, {
  MetDatePickerProps,
  TypesDatePicker as Type,
} from "./index";

import { withKnobs, color, select, text } from "@storybook/addon-knobs";

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
    moment: defaultMoment,
    selectMonthLabel: text("Label when selecting a month", undefined),
    selectYearLabel: text("Label when selecting a year", undefined),
    type: select(
      "Type of date",
      {
        "Full calendar": Type.FULL,
        "Short calendar": Type.SHORT,
      },
      Type.FULL
    ),
    dateFormat: text("To set the date format", undefined),
    language: text("Language", undefined),
    mainColor: color("Main color", undefined),
    bgColor: color("Background color", undefined),
    mainHoverColor: color("Main hover color", undefined),
    headerColor: color("Calendar title color", undefined, calendarColors),
    headerHoverColor: color(
      "Calendar title hover color",
      undefined,
      calendarColors
    ),
    weekDayFontColor: color("Week day names color", undefined, calendarColors),
    primaryFontColor: color("Color in current date", undefined, calendarColors),
    hoverDateBgColor: color(
      "Date hover background color",
      undefined,
      calendarColors
    ),
    selectedColor: color(
      "Present date border color and selected date background color",
      undefined,
      calendarColors
    ),
    selectedFontColor: color("Selected date color", undefined, calendarColors),
    secondaryFontColor: color(
      "Another day/year color",
      undefined,
      calendarColors
    ),
  });

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <MetDatePicker {...DatePickerProps()} />
    </div>
  );
};
