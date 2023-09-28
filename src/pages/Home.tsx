import PreRequisitesDocument from 'src/components/pages/home/preRequisitesDocument/PreRequisitesDocument';
import Products from 'src/components/pages/home/products/Products';
import Testimonials from 'src/components/pages/home/testimonials/Testimonials';
import SliderItems from 'src/components/shared/SliderItems';
import { useGetBanners } from 'src/hooks/useBanners';

const Home = () => {
  const { data: banners } = useGetBanners({
    select: (data: any) => data?.data
  });

  return (
    <div className="bg-[#f5f5f7]">
      {banners?.length > 0 && <SliderItems items={banners} />}
      <Products />
      <PreRequisitesDocument />
      <Testimonials />
    </div>
  );
};

export default Home;
