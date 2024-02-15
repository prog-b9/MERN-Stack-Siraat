/* eslint-disable react/prop-types */
import { ConfigProvider, Select } from "antd";

const CustomSelect = ({
  mode = "multiple",
  // keyItem,
  label,
  name,
  placeholder,
  options,
  msgError,
  defaultValue,
  className,
  field,
  onChange,
}) => {
  return (
    <div className={`w-full my-2 ${className}`}>
      <label className="block mb-2 text-sm  font-bold">{label}</label>
      <ConfigProvider
        theme={{
          components: {
            Select: {
              zIndexPopup: "200000",
              optionSelectedBg: "#17383d43",
            },
          },
          token: {
            colorBorder: "var(--light-gray)",
            colorBgContainer: "var(--light-bg-input)",
            colorPrimary: "#17383D",
            controlOutline: "transparent",
            lineWidth: 2,
          },
        }}
      >
        <Select
          {...field}
          mode={mode}
          name={name}
          autoFocus={false}
          style={{
            width: "100%",
          }}
          className="z-50"
          placeholder={placeholder}
          size="large"
          defaultValue={defaultValue}
          onChange={onChange}
          key={"_id"}
          options={options}
        />

        {/* <Select
          mode={mode}
          allowClear
          autoFocus={false}
          style={{
            width: "100%",
          }}
          {...register(name)}
          className="z-50"
          placeholder={placeholder}
          size="large"
          defaultValue={defaultValue}
          key={"_id"}
          onChange={onchange}
          options={options}
          value={value}
        /> */}
      </ConfigProvider>

      <span
        className="font-bold "
        style={{ color: "var(--red)", fontSize: 13 }}
      >
        {msgError}
      </span>
    </div>
  );
};

export default CustomSelect;
