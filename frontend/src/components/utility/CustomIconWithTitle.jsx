/* eslint-disable react/prop-types */
import CustomButton from "./CustomButton";
import CustomLink from "./CustomLink";

const CustomIconWithTitle = (props) => {
  const {
    title,
    icon,
    path,
    onclick,
    isLink = true,
    target = false,
    bgColor,
  } = props;
  return isLink ? (
    <CustomLink
      path={path}
      target={target}
      title={
        <div className="text-white flex items-center">
          <span>{title}</span>
          <span className="mx-2">{icon}</span>
        </div>
      }
      bgColor={bgColor}
    />
  ) : (
    <CustomButton
      onclick={onclick}
      bgColor={bgColor}
      title={
        <div className="text-white flex items-center">
          <span>{title}</span>
          <span className="mx-2">{icon}</span>
        </div>
      }
    />
  );
};

export default CustomIconWithTitle;
