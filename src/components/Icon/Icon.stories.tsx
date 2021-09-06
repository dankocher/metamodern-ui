import React from "react";

import styled, { css } from "styled-components";

import { Meta } from "@storybook/react/types-6-0";

import MetIcon, { MetIconProps, icons } from "./index";

import { withKnobs, color, text, number } from "@storybook/addon-knobs";
import mdx from "./Icon.mdx";

const Name = styled.div`
    color: #666;
    font-size: 12px;
`;

const Item = styled.li<{ minimal?: boolean }>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 200px;
  padding: 0 7.5px 20px;
  svg {
    margin-right: 10px;
    width: 30px;
    height: 30px;
  }
  ${(props) =>
  props.minimal &&
  css`
      flex: none;
      min-width: auto;
      padding: 0;
      background: #fff;
      border: 1px solid #666;
      svg {
        display: block;
        margin-right: 0;
        width: 48px;
        height: 48px;
      }
    `};
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

export default {
    title: "Example/Icon",
    component: MetIcon,
    decorators: [withKnobs],
    parameters: {
        docs: {
            page: mdx,
        },
    },
} as Meta;

export const Default = () => {
    const IconProps = (): MetIconProps => ({
        icon: text("Icon name", undefined),
        color: color("Color icon", undefined),
        hoverColor: color("Hover color icon", undefined),
        size: number("Size icon", undefined)
    });

    return <MetIcon {...IconProps()} />;
};

export const Labels = () => (
  <>
      There are {Object.keys(icons).length} icons
      <List>
          {Object.keys(icons).map((key) => (
            <Item key={key}>
                <MetIcon icon={key as keyof typeof icons} />
                <Name>{key}</Name>
            </Item>
          ))}
      </List>
  </>
);
