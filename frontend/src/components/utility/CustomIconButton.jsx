/* eslint-disable react/prop-types */
import { Badge, Button } from "antd";

const CustomIconButton = ({
  icon,
  notify = 0,
  bgColor = "var(--primary-color)",
  color = "#fff",
  className,
  height,
  isCircle = false,
  onclick,
  disabled,
}) => {
  return (
    <Badge count={notify === 0 ? "" : notify} dir={"ltr"}>
      <Button
        type="primary"
        style={{
          background: bgColor,
          color: color,
          boxShadow: "none",
          // width: width,
          height: height,
        }}
        disabled={disabled}
        onClick={onclick}
        className={`flex justify-center items-center ${
          isCircle ? "rounded-full" : ""
        } ${className}`}
        icon={icon}
      ></Button>
    </Badge>
  );
};

export default CustomIconButton;
