/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useLocation, useParams } from "react-router-dom";
import CustomBanner from "../utility/CustomBanner";
import CustomTimeline from "../utility/CustomTimeline";
// import { TbPentagonNumber1 } from "react-icons/tb";
// import { TbPentagonNumber2 } from "react-icons/tb";
// import { TbPentagonNumber3 } from "react-icons/tb";
// import { TbPentagonNumber4 } from "react-icons/tb";
import CustomContainerCard from "../utility/CustomContainerCard";
import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import CustomTitleHome from "../utility/CustomTitleHome";
import CustomButton from "../utility/CustomButton";
import ServicesData from "./ServicesData";
import { useTranslation } from "react-i18next";
 
const ServicesViewContainer = () => {
 
  const { dataServices } = ServicesData();
  const { t } = useTranslation();

  const idParmas = useParams();
  const [data, setData] = useState(dataServices[idParmas?.id]);
  useEffect(() => {
    setData(dataServices[idParmas?.id]);
  }, [idParmas?.id]);
  console.log(idParmas);
  console.log(data);

  return (
    <>
      <CustomBanner
        title={data.title}
        desc={`${data.desc.split("").slice(0, 70).join("")}...`}
        isBtn={true}
      />
      {/* section header */}
      <div className="container my-14">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="md:text-right max-md:mt-12 h-full ">
            <img src={data.img} alt="" className="object-contain" />
          </div>
          <div className=" flex items-start justify-center flex-col order-2">
            <h3 className="text-base sm:text-lg font-semibold leading-normal">
              {data.title}
            </h3>
            <p className="text-xs sm:text-base font-light leading-relaxed mt-2 text-gray-700">
              {data.desc}
            </p>
          </div>
        </div>
      </div>
      {/* section one */}
      <div className="container my-14">
        <CustomTitleHome title={data.content.step1.title} />
        <div className="  flex items-center justify-center flex-wrap gap-5 mt-7 w-full md:w-9/12 mx-auto">
          {data.content.step1.lists.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span>
                <FaCircleCheck color="var(--gold)" />
              </span>
              <span className="font-bold">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <center className="my-5">
        <CustomButton
          title={t("buttons.service_request")}
          size="lg"
          bgColor="var(--gold)"
          path={"/form"}
        />
      </center>
    </>
  );
};

export default ServicesViewContainer;
