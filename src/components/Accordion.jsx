"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="mb-8 mt-5 rounded-lg p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] sm:p-6 lg:mx-10 lg:mb-10 lg:mt-8 lg:p-8">
      {data.map((item, index) => (
        <div key={item.title} className="border-b last:border-0 last:pb-0">
          {/* Title */}
          <div
            className="flex cursor-pointer items-center justify-between"
            onClick={() => toggleAccordion(index)}
          >
            <h5 className="flex-1 py-2 text-xl font-semibold sm:py-4 lg:py-6 lg:text-2xl">
              {item.title}
            </h5>

            <ChevronDown
              size={28}
              className={`duration-500 ${activeIndex === index && "rotate-180"}`}
            />
          </div>

          {/* Content */}
          <div
            className={`overflow-hidden transition-all duration-1000 ease-in-out ${
              activeIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="break-words py-2 sm:py-4 lg:text-lg">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Accordion;
