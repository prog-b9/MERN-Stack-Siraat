/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const DateAndDay = ({ color }) => {
  const [getDay, setGetDay] = useState("");

  const dayOfTheWeek = [
    "الأحد",
    "الأثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  let dateNowObject = new Date();

  let dateNow = dateNowObject.toLocaleDateString();
  useEffect(() => {
    setGetDay(dateNowObject.getDay());
  }, []);
  return (
    <div className=" text-center font-bold">
      <div style={{ color: color, fontSize: "14px" }}>
        {dayOfTheWeek[getDay]}
      </div>
      <div style={{ color: color, fontSize: "14px" }}>{dateNow} </div>
    </div>
  );
};

export default DateAndDay;
