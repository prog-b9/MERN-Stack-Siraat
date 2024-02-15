/* eslint-disable react/prop-types */
const CustomSubTitleHome = ({ desc, className }) => {
  return (
    <p
      className={`text-sm sm:text-base font-light  leading-relaxed mt-4 mb-4 text-gray-700 ${className}`}
    >
      {desc}
    </p>
  );
};

export default CustomSubTitleHome;
