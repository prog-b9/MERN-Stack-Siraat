/* eslint-disable react/prop-types */
import ReactLoading from "react-loading";

const CustomSpinner = ({
  type = "bubbles",
  color = "var(--primary-color)",
}) => {
  return <ReactLoading type={type} color={color} height={40} width={40} />;
};

export default CustomSpinner;
