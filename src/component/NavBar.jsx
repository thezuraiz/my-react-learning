import { memo } from "react";
// eslint-disable-next-line react/prop-types
const NavBar = ({ increment }) => {
  console.log("Nav Rendered ");
  return <div>NavBar {increment()}</div>;
};

export default memo(NavBar);
