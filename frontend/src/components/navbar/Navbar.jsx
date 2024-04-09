import logo from '/logo.svg';
import hamburger from '/hamburger.svg';
import HamburgerMenu from './HamburgerMenu';
import { useContext } from 'react';
import { MyContext } from '../../context/GlobalContext';

const Navbar = () => {
  const { menuShow, setMenuShow } = useContext(MyContext);

  return (
    <>
      <nav className="bg-[#6B3CC9] text-white font-inter font-normal text-sm flex items-center justify-between xlg:px-20 lg:px-[60px] md:px-[40px] px-[20px] h-[77px] w-full">
        <div className="h-full mt-[26px]">
          <img src={logo} alt="at digital logo" />
        </div>
        <div className="hidden font-medium space-x-7 md:flex">
          <p>SERVICES</p>
          <p>ABOUT US</p>
          <p>CONTACT US</p>
          <p>CAREERS</p>
        </div>

        <div
          className="flex md:hidden"
          onClick={() => {
            setMenuShow(true);
          }}
        >
          <img src={hamburger} alt="hamburger button" />
        </div>
      </nav>
      <HamburgerMenu menuShow={menuShow} />
    </>
  );
};

export default Navbar;
