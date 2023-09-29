import LargeNavbar from './LargeNavbar';
import MobileNavbar from './MobileNavbar';
import { items } from './NavbarData';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 ">
      {/* Large */}
      <LargeNavbar items={items} />

      {/* Mobile */}
      <MobileNavbar items={items} />
    </div>
  );
};

export default Navbar;
