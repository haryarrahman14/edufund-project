import LargeNavbar from './LargeNavbar';
import MobileNavbar from './MobileNavbar';

interface item {
  name: string;
  href: string;
}

const items: item[] = [
  { name: 'Beranda', href: '/' },
  { name: 'Cara Kerja', href: 'how-it-works' },
  { name: 'Cara Bayar', href: 'how-to-pay' },
  { name: 'Tentang Kami', href: 'about-us' },
  { name: 'Hubungi Kami', href: 'contact-us' }
];

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-[rgba(255,255,255,.8)] backdrop-blur-[12px]">
      {/* Large */}
      <LargeNavbar items={items} />

      {/* Mobile */}
      <MobileNavbar items={items} />
    </div>
  );
};

export default Navbar;
