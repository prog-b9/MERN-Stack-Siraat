import { GoGoal } from "react-icons/go";
import { GiStairsGoal } from "react-icons/gi";
import { VscTasklist } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

const Goals = () => {
  const { t } = useTranslation();

  const ourGoals = [
    {
      icon: <GiStairsGoal />,
      title: t("goals.title1"),
      desc: t("goals.desc1"),
      transform: "lg:translate-y-16",
    },
    {
      icon: <VscTasklist />,
      title: t("goals.title2"),
      desc: t("goals.desc2"),
      transform: "lg:translate-y-30",
    },
    {
      icon: <GoGoal />,
      title: t("goals.title3"),
      desc: t("goals.desc3"),
      transform: "lg:translate-y-12",
    },
  ];
  return (
    <section className="py-10 sm:py-20  -mt-40">
      <div className="container">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-x-5">
          {ourGoals.map((item, i) => (
            <div key={i} className={`w-full text-center  ${item.transform}`}>
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="p-4 flex-auto">
                  <div
                    className={`text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full text-3xl ${
                      i === 1 ? "bg-gold" : "bg-primaryColor"
                    } `}
                  >
                    {item.icon}
                  </div>
                  <h6 className="text-2xl font-semibold"> {item.title}</h6>
                  <p className="mt-2  text-sm  mb-4 text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
