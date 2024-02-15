/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import CustomContainerCard from "./CustomContainerCard";

const CustomAccordion = ({ items }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  return (
    <>
      {items.map((item, i) => (
        <CustomContainerCard
          key={i}
          isWhite={false}
          isPadding={false}
          className={"px-3 mb-2"}
          content={
            <Accordion
              open={open === i + 1}
              icon={<Icon id={i + 1} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(i + 1)}>
                <div className="text-sm lg:text-base">
                  {item.question}
                  {" ؟"}
                </div>
              </AccordionHeader>
              <AccordionBody>
                <div className="text-xs lg:text-sm text-selver">{item.answer}</div>
              </AccordionBody>
            </Accordion>
          }
        />
      ))}
    </>
  );
};

export default CustomAccordion;
