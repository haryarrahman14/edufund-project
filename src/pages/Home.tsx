import Banners from 'src/components/shared/Banners';
import { useGetBanners } from 'src/hooks/useBanners';

const Home = () => {
  const { data: banners } = useGetBanners({
    select: (data: any) => data?.data
  });

  return <>{banners?.length > 0 && <Banners banners={banners} />}</>;
};

export default Home;
