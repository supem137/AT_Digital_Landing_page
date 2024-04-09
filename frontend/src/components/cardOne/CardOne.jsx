import cardOneImage from '/cardOneImage.png';

const CardOne = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between relative -translate-x-1/2 left-1/2 xlg:w-[1064px] xlg:h-[414px] lg:w-[896px] lg:h-[346px] md:w-[688px] md:h-[275px] lg:mt-20 mt-[60px] w-[335px] h-[572.82px]">
      <img
        src={cardOneImage}
        alt="card one image"
        className="xlg:size-[414px] lg:size-[346px] md:size-[275px] w-[275] h-[275.82px]"
      />
      <div className="flex flex-col xlg:w-[542px] xlg:h-[187px] lg:w-[530px] lg:h-[187px] md:w-[393px] md:h-[239px] md:items-start md:text-start w-[335px] h-[277px] items-center text-center">
        <h2 className="text-[#6B3CC9] font-poppins text-[27px] font-semibold leading-[33px] tracking-[0.4px] mb-5">
          Web & Mobile App Development
        </h2>
        <p className="font-normal font-inter leading-[19.36px] mb-5">
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>
        <button className="bg-[#F28D35] text-white font-inter font-bold text-sm leading-[14px] tracking-[0.02em] rounded w-[129px] h-[38px]">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default CardOne;
