/* eslint-disable react/prop-types */

import { Checkbox } from "@material-tailwind/react";
import { FaCheck } from "react-icons/fa6";

const CustomCheckbox = ({
  id,
  title,
  onChange,
  value,
  checked,
  name,
  register = () => null,
}) => {
  return (
    <div className={`flex items-center  rounded-lg  font-bold `}>
      <Checkbox
        id={id}
        type="radio"
        value={value}
        name={name}
        {...register(name)}
        onChange={onChange}
        className="border-selver/20 before:w-0 cursor-pointer checked:border-primaryColor "
        checked={checked}
        icon={
          <FaCheck className="text-white " style={{ width: 13, height: 13 }} />
        }
        // color="primary"
        style={{ width: 10, height: 10, borderWidth: 10 }}
        label={
          <span className="font-bold text-sm text-primaryColor">{title}</span>
        }
      />
    </div>
  );
};

export default CustomCheckbox;
