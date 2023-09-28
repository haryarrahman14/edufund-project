import Banners from 'src/components/pages/home/banners/Banners';
import PreRequisitesDocument from 'src/components/pages/home/preRequisitesDocument/PreRequisitesDocument';
import Products from 'src/components/pages/home/products/Products';
import Testimonials from 'src/components/pages/home/testimonials/Testimonials';

const Home = () => {
  return (
    <div className="bg-[#f5f5f7]">
      <Banners />
      <Products />
      <PreRequisitesDocument />
      <Testimonials />
    </div>
  );
};

export default Home;
