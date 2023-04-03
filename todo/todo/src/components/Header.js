import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import {clear} from "@testing-library/user-event/dist/clear";

export const Header = ({title}) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="#411530" text="Hello" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "To DO App",
};
export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
//CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };
