import cardTwoImage from '/cardTwoImage.png';

const CardTwo = () => {
  return (
    <div className="flex flex-col-reverse relative -translate-x-1/2 left-1/2 items-center justify-between md:flex-row xlg:w-[1064px] xlg:h-[416px] lg:w-[896px] lg:h-[348px] lg:mt-20 md:w-[688px] md:h-[276px] mt-[60px] w-[335px] h-[573px]">
      <div className="flex flex-col xlg:w-[542px] xlg:h-[206px] lg:w-[530px] lg:h-[187px] md:w-[393px] md:h-[239px] md:items-start md:text-start w-[335px] h-[277px] items-center text-center">
        <h2 className="text-[#6B3CC9] font-poppins text-[27px] font-semibold leading-[33px] tracking-[0.4px] mb-5">
          Digital Strategy Consulting
        </h2>
        <p className="font-normal font-inter leading-[19.36px] mb-5">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>
        <button className="bg-[#F28D35] text-white font-inter font-bold text-sm leading-[14px] tracking-[0.02em] rounded w-[129px] h-[38px]">
          LEARN MORE
        </button>
      </div>
      <img
        src={cardTwoImage}
        alt="second card image"
        className="xlg:w-[414px] xlg:h-[416px] lg:w-[346px] lg:h-[348px] md:w-[275px] md:h-[276px] w-[275] h-[276px]"
      />
    </div>
  );
};

export default CardTwo;
