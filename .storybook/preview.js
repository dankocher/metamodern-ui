import React from "react";

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

export const decorators = [
  (Story) => (
    <div style={{ margin: "3em", boxSizing: "border-box" }}>
      <Story />
    </div>
  ),
];
