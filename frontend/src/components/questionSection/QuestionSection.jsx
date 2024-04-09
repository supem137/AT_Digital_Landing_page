import { useState } from 'react';
import expand from '/plus.svg';
import minus from '/minus.svg';

const QuestionSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  console.log(activeAccordion);
  return (
    <div className="xlg:mx-[297px] lg:mx-[157px] lg:mt-20 md:mx-[40px] md:mt-[60px] mt-[60.18px] mx-[21px]">
      <h2 className="text-[#6B3CC9] text-center font-poppins font-semibold text-[27px] leading-[33px] tracking-[0.4px]">
        Frequently asked questions
      </h2>

      <div className="font-inter font-medium leading-[28px] space-y-[15px] md:text-[22px] text-[20px]">
        <div className="flex flex-col w-full bg-[#FAF8FF] px-6 py-6 mt-7">
          <div className="flex justify-between">
            <p
              className={`${
                activeAccordion !== null && activeAccordion === 1
                  ? 'text-[#6B3CC9]'
                  : 'text-black'
              } mr-[40px]`}
            >
              Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
            </p>
            <img
              src={`${
                activeAccordion !== null && activeAccordion === 1
                  ? minus
                  : expand
              }`}
              alt="expand"
              onClick={() => toggleAccordion(1)}
            />
          </div>
          {activeAccordion === 1 && (
            <p className="text-[#6F6C90] font-inter font-normal leading-[30px] mt-[13px] md:text-lg text-base">
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit
              id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
              Sapien massa morbi risus sagittis tortor integer.
            </p>
          )}
        </div>

        <div className="flex flex-col w-full bg-[#FAF8FF] px-6 py-6 mt-7">
          <div className="flex justify-between">
            <p
              className={`${
                activeAccordion !== null && activeAccordion === 2
                  ? 'text-[#6B3CC9]'
                  : 'text-black'
              } mr-[40px]`}
            >
              Lorem ipsum dolor sit amet consectetur. Tortor scelerisque
              integer?
            </p>
            <img
              src={`${
                activeAccordion !== null && activeAccordion === 2
                  ? minus
                  : expand
              }`}
              alt="expand"
              onClick={() => toggleAccordion(2)}
            />
          </div>
          {activeAccordion === 2 && (
            <p className="text-[#6F6C90] font-inter font-normal text-lg leading-[30px] mt-[13px]">
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit
              id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
              Sapien massa morbi risus sagittis tortor integer.
            </p>
          )}
        </div>

        <div className="flex flex-col w-full bg-[#FAF8FF] px-6 py-6 mt-7">
          <div className="flex justify-between">
            <p
              className={`${
                activeAccordion !== null && activeAccordion === 3
                  ? 'text-[#6B3CC9]'
                  : 'text-black'
              } mr-[40px]`}
            >
              Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
            </p>
            <img
              src={`${
                activeAccordion !== null && activeAccordion === 3
                  ? minus
                  : expand
              }`}
              alt="expand"
              onClick={() => toggleAccordion(3)}
            />
          </div>
          {activeAccordion === 3 && (
            <p className="text-[#6F6C90] font-inter font-normal text-lg leading-[30px] mt-[13px]">
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit
              id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
              Sapien massa morbi risus sagittis tortor integer.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
