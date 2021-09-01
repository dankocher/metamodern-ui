import React, { FC, ReactElement } from "react";

import styled from "styled-components";
import SVG from "react-inlinesvg";

import { MetIconProps } from "./index";

import assignmentOutlined from "./svg/assignment-outlined.svg";
import assignmentMoneyOutlined from "./svg/assignment_money-outlined.svg";
import assignmentSignatureOutlined from "./svg/assignment_signature-outlined.svg";
import assignmentTurnedFilled from "./svg/assignment_turned-filled.svg";
import barChartFilled from "./svg/bar_chart-filled.svg";
import codeFilled from "./svg/code-filled.svg";
import contentOutlined from "./svg/content-outlined.svg";
import dateRangeOutlined from "./svg/date_range-outlined.svg";
import deleteOutlined from "./svg/delete-outlined.svg";
import developerBoardFilled from "./svg/developer_board-filled.svg";
import dotsupFilled from "./svg/dotsup-filled.svg";
import editFilled from "./svg/edit-filled.svg";
import factCheckOutlined from "./svg/fact_check-outlined.svg";
import homeFilled from "./svg/home-filled.svg";
import homeOutlined from "./svg/home-outlined.svg";
import linkOutlined from "./svg/link-outlined.svg";
import linkOffOutlined from "./svg/link_off-outlined.svg";
import logoutOutlined from "./svg/logout-outlined.svg";
import mdiAddCommentFilled from "./svg/mdi_add_comment-filled.svg";
import mdiCheckCircleFilled from "./svg/mdi_check_circle-filled.svg";
import mdiMailFilled from "./svg/mdi_mail-filled.svg";
import mdiMailOutline from "./svg/mdi_mail-outline.svg";
import mdiMessageFilled from "./svg/mdi_message-filled.svg";
import mdiWorkFilled from "./svg/mdi_work-filled.svg";
import mdiWorkOutlined from "./svg/mdi_work-outlined.svg";
import peopleFilled from "./svg/people-filled.svg";
import peopleOutlined from "./svg/people-outlined.svg";
import printFilled from "./svg/print-filled.svg";
import searchOutlined from "./svg/search-outlined.svg";
import settingsFilled from "./svg/settings-filled.svg";
import starFilled from "./svg/star-filled.svg";
import starOutlined from "./svg/star-outlined.svg";
import starHalf from "./svg/star_half.svg";
import taskListFilled from "./svg/taskList-filled.svg";
import thumbDownFilled from "./svg/thumb_down-filled.svg";
import thumbDownOutlined from "./svg/thumb_down-outlined.svg";

const icons = { assignmentOutlined, assignmentMoneyOutlined, assignmentSignatureOutlined,
  assignmentTurnedFilled, barChartFilled, codeFilled, contentOutlined, dateRangeOutlined,
  deleteOutlined, developerBoardFilled, dotsupFilled, editFilled, factCheckOutlined, homeFilled,
  homeOutlined, linkOutlined, linkOffOutlined, logoutOutlined, mdiAddCommentFilled,
  mdiCheckCircleFilled, mdiMailFilled, mdiMailOutline, mdiMessageFilled, mdiWorkFilled,
  mdiWorkOutlined, peopleFilled, peopleOutlined, printFilled, searchOutlined, settingsFilled,
  starFilled, starOutlined, starHalf, taskListFilled, thumbDownFilled, thumbDownOutlined
};

const StyledSVG = styled(SVG)<MetIconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  & path {
    fill: ${({ color }) => color};
  }
  &:hover {
    path {
      fill: ${({ hoverColor }) => hoverColor};
    }
  }
`;

export const MetIcon: FC<MetIconProps> = ({
  style,
  className,
  color = "gray",
  hoverColor,
  name = "assignmentOutlined",
  size = 36,
}): ReactElement => (
  <StyledSVG style={style} className={className} color={color} hoverColor={hoverColor} src={icons[name]} width={size} height={size} />
);
