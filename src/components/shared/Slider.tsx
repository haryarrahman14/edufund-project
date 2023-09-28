import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'src/styles/swiper.css';
import { ISlider } from 'src/types/Slider';

const Slider = ({ children }: ISlider) => {
  return (
    <Swiper
      loop
      navigation
      centeredSlides
      grabCursor
      pagination={{
        clickable: true
      }}
      className="max-w-[1200px] lg:pt-[40px]"
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
      {children}
    </Swiper>
  );
};

Slider.Content = SwiperSlide;

export default Slider;
