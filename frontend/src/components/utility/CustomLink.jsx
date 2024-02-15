/* eslint-disable react/prop-types */
import { Button } from "antd";
import { Link } from "react-router-dom";

const CustomLink = ({
  bgColor = "var(--primary-color)",
  color = "#fff",
  onclick,
  title,
  path,
  target = false,
  className,
}) => {
  return (
    <Link to={path} target={target ? "_blank" : ""}>
      <Button
        type={"primary"}
        onClick={onclick}
        style={{ background: bgColor, boxShadow: "none", color: color }}
        className={`font-bold ${className}`}
      >
        {title}
      </Button>
    </Link>
  );
};

export default CustomLink;
