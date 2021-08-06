import React from "react";
import "./Button.scss";
import classnames from "classnames";

function Button({ children, size, color, outline, fullWidth, ...rest }) {
  return (
    <button
      className={classnames("button", size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};
export default Button;
