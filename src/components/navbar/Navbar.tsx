import LargeNavbar from './LargeNavbar';
import MobileNavbar from './MobileNavbar';

interface item {
  name: string;
  href: string;
}

const items: item[] = [
  { name: 'Beranda', href: '' },
  { name: 'Cara Kerja', href: '' },
  { name: 'Cara Bayar', href: '' },
  { name: 'Tentang Kami', href: '' },
  { name: 'Hubungi Kami', href: '' }
];

const Navbar = () => {
  return (
    <>
      {/* Large */}
      <LargeNavbar items={items} />

      {/* Mobile */}
      <MobileNavbar items={items} />
    </>
  );
};

export default Navbar;
