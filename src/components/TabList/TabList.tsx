import * as React from "react";

import styles from "./index.module.scss";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetTabListProps } from "./TabList.interface";
import { useState } from "react";

const Tag = styled.li`
  border-color: ${({ borderColor }) => borderColor};

  &:not(.${styles.tabList__tab__selected},
      .${styles.tabList__tab__selectedFirst}) {
    background-color: ${({ defaultBgColor }) => defaultBgColor};
  }

  &::before {
    background-color: ${({ borderColor }) => borderColor};
  }

  &::after {
    background-color: ${({ selectedBgColor }) => selectedBgColor};
  }
`;

const Content = styled.div`
  border-color: ${({ borderColor }) => borderColor};
  background-color: ${({ selectedBgColor }) => selectedBgColor};
`;

const classNames = require("classnames");

export const MetTabList: React.FC<MetTabListProps> = ({
  style,
  className = "",
  fontClass = "subtitle3",
  items,
  defaultSelection = items[0].id,
  children,
  selectedBgColor = colors.neutral0,
  defaultBgColor = colors.neutral100,
  borderColor = colors.neutral300,
}) => {
  const [selectedTab, setSelectedTab] = useState<string>(defaultSelection);

  const onClickHandler = (event, id, onClick) => {
    setSelectedTab(id);
    if (onClick) onClick(event, id);
  };

  const getTabStyles = (index, id) => {
    return classNames(styles.tabList__tab, className, {
      [styles.tabList__tab__selected]: selectedTab === id && index !== 0,
      [styles.tabList__tab__selectedFirst]: selectedTab === id && index === 0,
    });
  };

  return (
    <div style={style} className={styles.container}>
      <ul className={styles.tabList}>
        {items.map((item, index) => (
          <Tag
            className={getTabStyles(index, item.id)}
            key={item.id}
            onClick={(event) => onClickHandler(event, item.id, item.onChange)}
            selectedBgColor={selectedBgColor}
            defaultBgColor={defaultBgColor}
            borderColor={borderColor}
            isSelected={selectedTab === item.id}
          >
            <span className={fontClass}>{item.value}</span>
          </Tag>
        ))}
      </ul>
      <Content
        className={styles.content}
        borderColor={borderColor}
        selectedBgColor={selectedBgColor}
      >
        {children}
      </Content>
    </div>
  );
};
