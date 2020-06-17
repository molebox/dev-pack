import "firebase/auth"
const React = require("react");
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="stylesheet"
      href="https://indestructibletype.com/fonts/Jost.css"
      type="text/css"
      charset="utf-8"
    />
  ]);
};
