/* eslint-disable react/prop-types */
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import CustomContainerCard from "./CustomContainerCard";

const CustomBreadcum = ({ titleHeader, item = [] }) => {
  return (
    <CustomContainerCard
      className={"flex justify-between items-center flex-wrap mb-4"}
      content={
        <>
          <div className="font-bold text-md md:text-xl px-1 text-center text-primaryColor">
            {titleHeader}
          </div>
          <Breadcrumb
            separator={<span>/</span>}
            items={item.map((ele, i) => {
              return {
                title: ele.isBtn ? (
                  <Link key={i} onClick={ele.path}>
                    {ele.title}
                  </Link>
                ) : (
                  <Link key={i} to={ele.path}>
                    {ele.title}
                  </Link>
                ),
              };
            })}
          />
        </>
      }
    />
  );
};

export default CustomBreadcum;
