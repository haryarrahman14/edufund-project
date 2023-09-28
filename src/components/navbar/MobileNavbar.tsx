import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

interface item {
  name: string;
  href: string;
}

const MobileNavbar = ({ items }: { items: item[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Mobile */}
      <div className="lg:hidden bg-[#ffffff] h-[70px] flex justify-between items-center px-[30px]">
        <div className="flex items-center gap-[24px]">
          <img
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
            src="https://edufund.co.id/assets/images/icon/menu.png"
            alt="burger"
            width="24px"
          />
          <img
            className="cursor-pointer"
            src="https://edustorage.oss-ap-southeast-5.aliyuncs.com/assets/edufund-logo.svg"
            alt="logo"
            width="100px"
          />
        </div>

        <div className="flex items-center gap-[24px]">
          <p className="text-[1rem] text-[#0e2e4f]">TKB90 = 95%</p>
          <img
            className="cursor-pointer"
            src="https://edufund.co.id/assets/images/icon/person.png"
            alt="profile"
            width="24px"
          />
        </div>
      </div>

      {/* Mobile Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-[#ffffff] fixed w-full flex flex-col px-[30px] pb-[40px] z-10">
              {items?.map((item: item, idx: number) => {
                return (
                  <a
                    key={idx}
                    href={item?.href}
                    className="text-[1rem] text-[#868e96] hover:text-[#ff9700] leading-[1.5rem] py-[0.7rem] ml-[48px]"
                  >
                    {item?.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;
