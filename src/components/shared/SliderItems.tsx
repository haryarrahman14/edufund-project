import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'src/styles/swiper.css';

interface SliderItem {
  createdAt: string;
  id: string;
  src: string;
  title: string;
}

const SliderItems = ({ items }: { items: SliderItem[] }) => {
  return (
    <Swiper
      loop
      navigation
      centeredSlides
      grabCursor
      pagination={{
        clickable: true
      }}
      className="max-w-[1200px] lg:my-[40px]"
      effect="coverflow"
      modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
      slidesPerView={1.5}
      coverflowEffect={{
        rotate: 0,
        slideShadows: false
      }}
      autoplay={{
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      }}
      breakpoints={{
        0: {
          modules: [Autoplay],
          slidesPerView: 1
        },
        1024: {
          spaceBetween: 100,
          slidesPerView: 1.5
        }
      }}
    >
      {items?.map((banner: SliderItem, index: number) => {
        return (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={banner?.src}
                className="lg:rounded-xl lg:w-[770px] lg:h-[270px] w-full h-[470px] object-cover "
              />
              <p className="absolute h-[2rem] lg:top-[14px] bottom-[64px] lg:left-[14px] left-[32px] text-[2rem] text-[#ffffff] font-bold capitalize z-10 border-l-[4px] border-[#ff9700] border-solid leading-[1.8rem] pl-[4px]">
                {banner?.title}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderItems;
