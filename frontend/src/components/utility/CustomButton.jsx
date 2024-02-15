/* eslint-disable react/prop-types */
// import { Button } from "antd";

import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CustomButton = ({
  bgColor = "var(--primary-color)",
  onclick,
  title,
  className,
  icon = null,
  color = "#fff",
  isLoading = false,
  variant = "gradient",
  size = "md",
  disabled,
  isCircle = false,
  path = null,
  type = "button",
}) => {
  const UIButton = () => {
    return (
      <Button
        variant={variant}
        type={type}
        onClick={onclick}
        loading={isLoading}
        disabled={disabled}
        size={size}
        className={`flex  items-center shadow-none hover:shadow-none ${
          icon ? "gap-3" : ""
        } ${isCircle ? "rounded-full" : ""} ${className}`}
        style={{
          background: bgColor,
          color: color,
        }}
      >
        <div className="text-center w-full capitalize">{title}</div>
        {icon === null ? "" : <div>{icon}</div>}
      </Button>
    );
  };
  return path ? (
    <Link to={path}>
      <UIButton />
    </Link>
  ) : (
    <UIButton />
  );

  // <Button
  //   type={"primary"}
  //   htmlType={htmlType}
  //   onClick={onclick}
  //   loading={isLoading}
  //   disabled={disabled}
  //   size={size}
  //   className={`p-1.5 ${className}`}
  //   icon={icon}
  //   style={{
  //     background: bgColor,
  //     boxShadow: "none",
  //     color: color,
  //     height: "auto",
  //   }}
  // >
  //   {title}
  // </Button>
};

export default CustomButton;
