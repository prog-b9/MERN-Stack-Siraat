/* eslint-disable react/prop-types */
import { ConfigProvider, Slider } from "antd";

const CustomSlider = ({ onChange, value, min, max, step }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            handleActiveColor: "var(--primary-color)",
            handleColor: "var(--primary-color)",
            trackHoverBg: "var(--primary-color)",
            trackBg: "var(--primary-color)",
            dotActiveBorderColor: "var(--primary-color)",
          },
        },
        token: {
          colorPrimaryBorderHover: "var(--primary-color)",
        },
      }}
    >
      <Slider
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={typeof value === "number" ? value : 0}
      />
    </ConfigProvider>
  );
};

export default CustomSlider;
