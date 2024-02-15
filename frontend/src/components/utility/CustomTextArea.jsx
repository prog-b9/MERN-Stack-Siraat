/* eslint-disable react/prop-types */
import { useState } from "react";

const CustomTextArea = ({
  label,
  placeholder,
  name,
  onChange,
  value,
  readOnly,
  msgError,
  // bgColor = "var(--light)",
  className,
  sizeIsLarge = true,
  isCircle = false,
  icon = null,
  register = () => null,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full my-2">
      <label className="block mb-2 text-sm  font-bold">{label}</label>
      <div className="relative">
        <div
          className={`absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none`}
          style={{ color: "var(--gray)" }}
        >
          {icon}
        </div>
        <textarea
          type="text"
          rows={7}
          onChange={onChange}
          value={value}
          name={name}
          placeholder={placeholder}
          {...register(name)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoComplete="off"
          readOnly={readOnly}
          className={`text-sm   block w-full ${icon === null ? "" : "ps-10"} ${
            isCircle ? "rounded-full" : "rounded-lg"
          }  transition duration-300 ${className} ${
            sizeIsLarge ? "p-2.5" : "p-1.5"
          }  transition  duration-300 `}
          // style={{
          //   background: themeMode === "dark" ? "var(--dark-two)" : "#fff",
          //   borderWidth: `2px`,
          //   borderStyle: `solid`,
          //   borderColor: isFocused
          //     ? "var(--primary-color)"
          //     : "var(--gray-opacity)",
          //   outline: 0,

          // }}
          style={{
            borderWidth: `0.16rem`,
            paddingRight: icon === null ? "" : 33,
            paddingLeft: 5,
            borderStyle: `solid`,
            borderColor: isFocused ? "var(--primary-color)" : "var(--light)",
            background: "var(--light)",
            outline: 0,
            boxShadow: "none !important",
            fontFamily: "sans-serif",
          }}
        ></textarea>
      </div>
      <span
        className="font-bold "
        style={{ color: "var(--red)", fontSize: 13 }}
      >
        {msgError}
      </span>
    </div>
  );
};

export default CustomTextArea;
