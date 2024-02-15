/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */
const CustomBadge = ({ title, res }) => {
  switch (res) {
    case "done":
      return (
        <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 text-[9px] rounded dark:bg-green-900 dark:text-green-300">
          {title}
        </span>
      );
    case "info":
      return (
        <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 text-[9px] rounded dark:bg-yellow-900 dark:text-yellow-300">
          {title}
        </span>
      );
    case "error":
      return (
        <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 text-[9px] rounded dark:bg-red-900 dark:text-red-300">
          {title}
        </span>
      );
    default:
      return (
        <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 text-[9px] rounded dark:bg-yellow-900 dark:text-yellow-300">
          {title}
        </span>
      );
  }
};

export default CustomBadge;
