import LargeNavbar from './LargeNavbar';
import MobileNavbar from './MobileNavbar';
import { items } from './NavbarData';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 lg:bg-[rgba(255,255,255,.8)] lg:backdrop-blur-[12px] ">
      {/* Large */}
      <LargeNavbar items={items} />

      {/* Mobile */}
      <MobileNavbar items={items} />
    </div>
  );
};

export default Navbar;
