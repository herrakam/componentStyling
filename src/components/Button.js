import React from "react";
import "./Button.scss";
import classnames from "classnames";

function Button({ children, size }) {
  return <button className={classnames("button", size)}>{children}</button>;
}

Button.defaultProps = {
  size: "medium",
};
export default Button;
