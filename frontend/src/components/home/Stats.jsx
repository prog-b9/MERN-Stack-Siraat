/* eslint-disable react/prop-types */
import { LuPercent } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { Statistic } from "antd";
import CountUp from "react-countup";
import CustomTitleHome from "../utility/CustomTitleHome";
import CustomSubTitleHome from "../utility/CustomSubTitleHome";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t } = useTranslation();

  const dataStatistic = [
    {
      icon: <LuPlus />,
      title: t("state.items.one"),
      val: 20,
    },
    {
      icon: <LuPercent />,
      title: t("state.items.two"),
      val: 100,
    },
    {
      icon: <LuPlus />,
      title: t("state.items.three"),
      val: 13,
    },
  ];
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const formatter = (value) => <CountUp end={value} separator="," />;

  return (
    <section className=" py-10 sm:py-20 bg-white">
      <div className="container">
        <div className=" flex items-center justify-center flex-col">
          <CustomTitleHome title={t("state.title")} />
          <div className="w-full md:w-2/4 ">
            <CustomSubTitleHome
              className={"text-center"}
              desc={t("state.desc")}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          {dataStatistic.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="block text-lg text-center  text-gray-600  ">
                {item.title}
              </div>
              <div ref={ref}>
                {inView && (
                  <Statistic
                    value={item.val}
                    prefix={item.icon}
                    formatter={formatter}
                    valueStyle={{
                      fontSize: 35,
                      display: "flex",
                      alignItems: "center",
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
