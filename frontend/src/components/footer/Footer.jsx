import logo from '/logo.svg';
import smallSeparator from '/smallSeparator.svg';
import largeSeparator from '/largeSeparator.svg';

const Footer = () => {
  return (
    <footer className="bg-[#6B3CC9] text-white mt-[80px] w-full">
      <div className="grid lg:grid-cols-2  grid-col-1 pt-10  lg:justify-items-end xlg:mx-20 lg:mx-[60px] md:mx-[40px] mx-[20px]">
        <div className="w-full">
          <img src={logo} alt="" className="relative mt-[-11px] mb-[20px]" />
          <p className="md:w-[413px] w-[334px] font-lato font-normal text-[16px] leading-[19.2px]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="flex md:flex-row flex-col font-inter lg:mt-0 mt-[60px]">
          <div className="w-[197px] xlg:mr-[128px] lg:mr-[20px] md:mr-[79px] md:mb-0 mb-[40px]">
            <p className="font-medium text-[21px] leading-[25.41px] mb-3">
              Our Technologies
            </p>
            <div className="font-medium text-[14px] leading-[16.94px] space-y-3">
              <p>ReactJS</p>
              <p>Gatsby</p>
              <p>NextJS</p>
              <p>NodeJS</p>
            </div>
          </div>
          <div className=" xlg:w-[197px] w-[216px] ">
            <p className="font-medium text-[21px] leading-[25.41px] mb-3">
              Our Services
            </p>
            <div className=" font-medium text-[14px] leading-[16.94px] space-y-3">
              <p>Social Media Marketing</p>
              <p>Web & Mobile App Development</p>
              <p>Data & Analytics</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 col-span-1 flex flex-col justify-center w-full mt-[40px] mb-[20px] font-inter">
          <img src={largeSeparator} alt="separator" />
          <div className="flex justify-center mt-[8px] text-[14px] leading-[16.94px] font-medium">
            <p>Privacy Policy</p>
            <img src={smallSeparator} alt="separator" className="mx-[16px]" />
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
