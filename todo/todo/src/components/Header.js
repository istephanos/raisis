import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "#1e1e33"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
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
