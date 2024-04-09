import { useContext } from 'react';
import clear from '/clear.svg';
import { MyContext } from '../../context/GlobalContext';

const HamburgerMenu = ({ menuShow }) => {
  const { setMenuShow } = useContext(MyContext);

  return (
    <div
      className={`md:hidden ${
        menuShow ? 'visible' : 'hidden'
      } bg-white w-full h-[812px] font-inter px-5 py-4 font-medium text-[14px] leading-[16.94px] space-y-8 text-[#100C08]`}
    >
      <div className="flex items-center justify-between">
        <p>HOME</p>
        <img
          src={clear}
          alt="clear button"
          onClick={() => {
            setMenuShow(false);
          }}
        />
      </div>
      <p>SERVICES</p>
      <p>ABOUT US</p>
      <p>CONTACT US</p>
      <p>CAREERS</p>
    </div>
  );
};

export default HamburgerMenu;
