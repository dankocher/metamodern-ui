import React from "react";
import styled from "styled-components";
import { colors } from "../src/components/styles/colors";

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
  width:100vw:
  margin: 3em;
  
  & * {
    box-sizing: border-box;
  }

  span,
  label {
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }

  /* Adminka/Subtitle 2; */
  .subtitle2 {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: 0.001em;
  }

  /* Adminka / Body 2; */

  .body2 {
    font-family: "Noto Sans", sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 0.0025em;
  }

  /* Adminka / Caption; */

  .caption {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    line-height: 17px;
    font-weight: 500;
    letter-spacing: 0.004em;
  }

  /* Adminka / basefont; */

  .basefont {
    font-family: Roboto;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    color: ${colors.neutral800};
  }
`;

export const decorators = [
    (Story) => (
        <MainContainer>
            <Story />
        </MainContainer>
    ),
];
