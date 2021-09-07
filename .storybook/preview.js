import React from "react";
import styled from "styled-components";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
};

const MainContainer = styled.div`
    margin: 4em;

    & * {
        box-sizing: border-box;
    }

    span,
    label {
        overflow-wrap: break-word;
        white-space: pre-wrap;
    }
`;

export const decorators = [
    (Story) => (
        <MainContainer>
            <Story />
        </MainContainer>
    ),
];
