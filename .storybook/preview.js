import React from "react";
import styled from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // backgrounds: {
  //   default: "white",
  //   values: [
  //     {
  //       name: "twitter",
  //       value: "#00aced",
  //     },
  //     {
  //       name: "facebook",
  //       value: "#3b5998",
  //     },
  //   ],
  // },
};

const MainContainer = styled.div`
  margin: 3em;
  & * {
    box-sizing: border-box;
  }
`;

export const decorators = [
  (Story) => (
    <MainContainer>
      <Story />
    </MainContainer>
  ),
];
