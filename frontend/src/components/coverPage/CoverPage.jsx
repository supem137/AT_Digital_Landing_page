import coverImage from '/coverimage.png';

const CoverPage = () => {
  return (
    <div className="items-end font-inter lg:flex">
      <div>
        <img src={coverImage} alt="image of computer on the table" />
      </div>
      <div className="lg:absolute static bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] xlg:w-[630px] xlg:ml-[80px] lg:w-[622px] lg:h-[306px] lg:ml-[60px] lg:mb-[40px] sm:w-full md:h-[258px] h-[294px]">
        <div className="xlg:ml-[40px] xlg:mr-[34px] lg:mr-[26px] md:ml-[40px] md:mr-[40px] mr-[20px] ml-[20px]">
          <p className="text-white font-bold tracking-[-0.02em] pt-[24px] md:text-5xl md:leading-[48px] text-4xl leading-[36px]">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </p>
          <button className="bg-[#F28D35] text-white text-sm font-bold leading-[14px] rounded w-[214px] h-[38px] px-5 mt-5">
            GET FREE CONSULATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
