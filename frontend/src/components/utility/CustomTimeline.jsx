/* eslint-disable react/prop-types */
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";
const CustomTimeline = ({ items }) => {
  return (
    <div>
      <Timeline>
        {items.map((item, i) => (
          <TimelineItem key={i}>
            {i === items.length - 1 ? null : (
              <TimelineConnector className=" right-0" />
            )}
            <TimelineHeader>
              <TimelineIcon className="p-2 sm:p-2 bg-primaryColor  text-sm md:text-xl">
                {item.icon}
              </TimelineIcon>
              <div className="text-xs md:text-base font-bold text-primaryColor">
                {item.title}
              </div>
            </TimelineHeader>
            <TimelineBody className="pb-5">
              <div className="text-xs md:text-base text-selver">
                {item.desc}
              </div>
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default CustomTimeline;
