/* eslint-disable react/prop-types */
import { Empty } from "antd";
// import { BsDatabaseFillSlash } from "react-icons/bs";
const CustomEmpty = ({ title = "لاتوجد بيانات", imgEmpty, icon }) => {
  return (
    <div className="flex justify-center items-center ">
      <Empty
        description={
          <div
            className="font-bold text-md md:text-xl mt-3"
            style={{ color: "var(--primary-color)" }}
          >
            {title}...
          </div>
        }
        className="p-3 mt-5"
        image={(imgEmpty && <img src={imgEmpty} />) || icon}
        imageStyle={{
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      />
    </div>
  );
};

export default CustomEmpty;
