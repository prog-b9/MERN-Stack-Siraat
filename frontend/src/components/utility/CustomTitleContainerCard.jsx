/* eslint-disable react/prop-types */
const CustomTitleContainerCard = ({ title, isCenter = true }) => {
  return (
    <div
      className={`${
        isCenter ? "text-center" : "text-right"
      } font-bold text-lg md:text-xl mb-4 text-primaryColor underline`}
    >
      {title}
    </div>
  );
};

export default CustomTitleContainerCard;
