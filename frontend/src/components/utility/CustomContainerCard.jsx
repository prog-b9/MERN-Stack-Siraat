/* eslint-disable react/prop-types */
const CustomContainerCard = ({
  content,
  className,
  isPadding = true,
  onClick,
  isWhite = true,
}) => {
  return (
    <div
      className={`rounded-lg border  ${
        isWhite ? "bg-white border-blue-gray-50" : "bg-lightGray border-blue-gray-100"
      }  ${isPadding ? "p-3 md:p-5" : ""} ${className}`}
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export default CustomContainerCard;
