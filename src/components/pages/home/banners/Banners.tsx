import Slider from 'src/components/shared/SliderItems';
import { useGetBanners } from 'src/hooks/useBanners';
import { IBanner } from 'src/types/Banners';

const Banners = () => {
  const { data: banners } = useGetBanners({
    select: (data: any) => data?.data
  });

  return (
    <>
      {banners && banners?.length > 0 && (
        <Slider>
          {banners?.map((banner: IBanner, index: number) => {
            return (
              <Slider.Content key={index}>
                <div className="relative">
                  <img
                    src={banner?.src}
                    className="lg:rounded-xl lg:w-[770px] lg:h-[270px] w-full h-[470px] object-cover "
                  />
                  <p className="absolute h-[2rem] lg:top-[14px] bottom-[64px] lg:left-[14px] left-[32px] text-[2rem] text-[#ffffff] font-bold capitalize z-10 border-l-[4px] border-[#ff9700] border-solid leading-[1.8rem] pl-[4px]">
                    {banner?.title}
                  </p>
                </div>
              </Slider.Content>
            );
          })}
        </Slider>
      )}
    </>
  );
};

export default Banners;
