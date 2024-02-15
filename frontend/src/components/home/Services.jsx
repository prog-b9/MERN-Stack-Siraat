/* eslint-disable react-refresh/only-export-components */
import CustomButton from "../utility/CustomButton";
// import services01 from "../../assets/services-01.png";
// import services02 from "../../assets/img-services-01.jpg";
// import services03 from "../../assets/img-services-02.jpg";
// import services04 from "../../assets/img-services-03.jpg";
// import services05 from "../../assets/img-services-04.jpg";
import CustomModal from "../utility/CustomModal";
import { useState } from "react";
import CustomTitleHome from "../utility/CustomTitleHome";
import CustomSubTitleHome from "../utility/CustomSubTitleHome";
import { useTranslation } from "react-i18next";
import ServicesData from "../services/ServicesData";

const Services = () => {
  const { t } = useTranslation();
  const { dataServices } = ServicesData();

  const [openModalServices, setOpenModalServices] = useState(false);
  const [selectDataServiceTitle, setSelectDataServiceTitle] = useState("");
  const [selectDataServiceDesc, setSelectDataServiceDesc] = useState("");
  const [selectDataServiceId, setSelectDataServiceId] = useState("");
  const handleOpenModalServices = () => {
    setOpenModalServices(!openModalServices);
  };
  return (
    <section className="py-10 sm:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-20">
          <div className=" flex items-start justify-center flex-col">
            <CustomTitleHome title={t("services.title")} />
            <CustomSubTitleHome desc={t("services.desc")} />
            <div>
              <CustomButton title={t("buttons.more")} path={"/services"} />
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
              {dataServices.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    handleOpenModalServices();
                    setSelectDataServiceTitle(item.title);
                    setSelectDataServiceDesc(item.desc);
                    setSelectDataServiceId(i);
                  }}
                  className=" rounded-xl bg-white border-1 cursor-pointer border-cream p-3 flex  flex-col items-center text-center md:text-start md:items-start gap-4 hover:bg-cream transition-all duration-100"
                >
                  <span className=" bg-light inline w-16 h-16 rounded-lg p-3">
                    <img
                      src={item.icon}
                      alt=""
                      className=""
                      style={{ width: 50 }}
                    />
                    ,
                  </span>
                  <div className=" font-bold text-xs sm:text-sm">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CustomModal
          openModal={openModalServices}
          setOpenModal={handleOpenModalServices}
          hiddenOk={true}
          hiddenClose={true}
          classNameContent={"style-scroll h-[20rem]"}
          title={selectDataServiceTitle}
          content={
            <div className="h-full flex flex-col justify-between">
              {selectDataServiceDesc}
              <center className="mt-5">
                <CustomButton
                  title={t("buttons.more")}
                  size="lg"
                  bgColor="var(--gold)"
                  path={`/services/view/${selectDataServiceId}`}
                />
              </center>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default Services;
