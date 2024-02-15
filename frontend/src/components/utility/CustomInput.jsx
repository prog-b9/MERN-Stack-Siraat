/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
// import { Label, TextInput } from "flowbite-react";
// import { Input } from "antd";
import { FaLock } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoEyeOffOutline } from "react-icons/io5";

const CustomInput = ({
  type = "text",
  label,
  placeholder,
  name,
  register = () => null,
  onChange,
  onSearch,
  value,
  readOnly,
  msgError,
  // bgColor = "var(--light)",
  className,
  sizeIsLarge = true,
  isCircle = false,
  icon = null,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full my-2">
      <label className="block mb-2 text-sm  font-bold ">{label}</label>
      <div className="relative">
        {
          // type === "text" ? (
          //   <>
          //     <div
          //       className={`absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none`}
          //       style={{ color: "var(--gray)" }}
          //     >
          //       {icon}
          //     </div>
          //     <input
          //       type={type}
          //       onChange={onChange}
          //       value={value}
          //       name={name}
          //       {...register(name)}
          //       placeholder={placeholder}
          //       onFocus={() => setIsFocused(true)}
          //       onBlur={() => setIsFocused(false)}
          //       autoComplete="off"
          //       readOnly={readOnly}
          //       className={`text-sm   block w-full ${
          //         isCircle ? "rounded-full" : "rounded-lg"
          //       }  transition duration-300 ${className} ${
          //         sizeIsLarge ? "p-2.5" : "p-1.5"
          //       } `}
          //       style={{
          //         borderWidth: `0.16rem`,
          //         height: 40,
          //         padding: 0,
          //         paddingRight: icon === null ? "" : 33,
          //         paddingLeft: 5,
          //         borderStyle: `solid`,
          //         borderColor: isFocused
          //           ? "var(--primary-color)"
          //           : "var(--light-gray)",
          //         background: "var(--light-bg-input)",
          //         outline: 0,
          //         boxShadow: "none !important",
          //       }}
          //     />
          //   </>
          // ) :

          type === "password" ? (
            <>
              <div
                className={`absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none`}
                style={{ color: "var(--gray)" }}
              >
                <FaLock />
              </div>
              <input
                type={showPassword ? "text" : type}
                onChange={onChange}
                value={value}
                name={name}
                {...register(name)}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                autoComplete="off"
                readOnly={readOnly}
                className={`text-sm   block w-full ${
                  isCircle ? "rounded-full" : "rounded-lg"
                }  transition duration-300 ${className} ${
                  sizeIsLarge ? "p-2.5" : "p-1.5"
                } `}
                style={{
                  borderWidth: `0.12rem`,
                  height: 40,
                  padding: 0,
                  paddingRight: 33,
                  paddingLeft: 35,
                  borderStyle: `solid`,
                  borderColor: isFocused
                    ? "var(--primary-color)"
                    : "var(--gray-light)",
                  background: "var(--light-bg-input)",
                  outline: 0,
                  boxShadow: "none !important",
                  fontFamily: "sans-serif",
                }}
              />
              <div
                className={`absolute inset-y-0 end-3 select-none flex items-center cursor-pointer`}
                style={{ color: "var(--gray)" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoEyeOffOutline size={20} />
                ) : (
                  <IoMdEye size={20} />
                )}
              </div>
            </>
          ) : (
            <>
              <div
                className={`absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none`}
                style={{ color: "var(--gray)" }}
              >
                {icon}
              </div>
              <input
                type={type}
                onChange={onChange}
                value={value}
                name={name}
                {...register(name)}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                autoComplete="off"
                readOnly={readOnly}
                className={`text-sm   block w-full ${
                  isCircle ? "rounded-full" : "rounded-lg"
                }  transition duration-300 ${className} ${
                  sizeIsLarge ? "p-2.5" : "p-1.5"
                } `}
                style={{
                  borderWidth: `0.16rem`,
                  height: 40,
                  padding: 0,
                  paddingRight: icon === null ? "" : 33,
                  paddingLeft: 5,
                  borderStyle: `solid`,
                  borderColor: isFocused
                    ? "var(--primary-color)"
                    : "var(--light)",
                  background: "var(--light)",
                  outline: 0,
                  boxShadow: "none !important",
                  fontFamily: "sans-serif",
                }}
              />
            </>
          )
        }
      </div>
      <div className="mt-1"></div>
      <span
        className="font-bold "
        style={{ color: "var(--red)", fontSize: 13 }}
      >
        {msgError}
      </span>
    </div>
  );
};

export default CustomInput;
// <>
//   <div
//     className={`absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none`}
//     style={{ color: "var(--gray)" }}
//   >
//     {icon}
//   </div>
//   <input
//     type={type}
//     onChange={onChange}
//     value={value}
//     name={name}
//     {...register(name)}
//     placeholder={placeholder}
//     onFocus={() => setIsFocused(true)}
//     onBlur={() => setIsFocused(false)}
//     autoComplete="off"
//     readOnly={readOnly}
//     className={`text-sm   block w-full ${
//       isCircle ? "rounded-full" : "rounded-lg"
//     }  transition duration-300 ${className} ${
//       sizeIsLarge ? "p-2.5" : "p-1.5"
//     } `}
//     style={{
//       borderWidth: `0.12rem`,
//       height: 40,
//       padding: 0,
//       paddingRight: icon === null ? "" : 33,
//       borderStyle: `solid`,
//       borderColor: isFocused
//         ? "var(--primary-color)"
//         : "var(--gray-light)",
//       background: "var(--light-bg-input)",
//       outline: 0,
//       boxShadow: "none !important",
//     }}
//   />
// </>
