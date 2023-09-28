import { Link, useLocation } from 'react-router-dom';

interface item {
  name: string;
  href: string;
}

const LargeNavbar = ({ items }: { items: item[] }) => {
  const { pathname } = useLocation();

  return (
    <div className="max-w-[1200px] mx-auto hidden h-[70px] lg:flex justify-between items-center px-[30px]">
      <img
        src="https://edustorage.oss-ap-southeast-5.aliyuncs.com/assets/edufund-logo.svg"
        alt="logo"
        width="142px"
      />
      <div className="flex items-center">
        {items?.map((item: item, idx: number) => {
          return (
            <Link
              key={idx}
              to={item?.href}
              className={`text-[1rem] text-center leading-[1.5rem] mx-[14px] ${
                pathname == item?.href
                  ? 'text-[#ff9700]'
                  : 'text-[#0e2e4f] hover:text-[#ff9700]'
              }`}
            >
              {item?.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-[4px]">
        <img
          className="mx-[5px]"
          src="https://edufund.co.id/assets/images/icon/fa-information-custom.png"
          alt="info"
          width="14px"
        />
        <p className="text-[1rem] text-[#0e2e4f]">TKB90 = 95%</p>
        <a
          href=""
          className="text-[1rem] text-[#ff9700] text-center leading-[1.5rem] mx-[14px]"
        >
          Masuk
        </a>
        <button className="w-[82px] py-[7px] px-[14px] bg-[#ff9700] text-[1rem] text-[#ffffff] text-center font-normal leading-[1.5rem] rounded-[32px]">
          Daftar
        </button>
      </div>
    </div>
  );
};

export default LargeNavbar;
