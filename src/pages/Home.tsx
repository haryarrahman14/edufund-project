import Banners from 'src/components/pages/home/banners/Banners';
import PreRequisitesDocument from 'src/components/pages/home/preRequisitesDocument/PreRequisitesDocument';
import Products from 'src/components/pages/home/products/Products';
import Testimonials from 'src/components/pages/home/testimonials/Testimonials';

const Home = () => {
  return (
    <div className="bg-[#f5f5f7]">
      <div className="lg:pt-[40px] bg-[url(../public/bg-top.svg)] bg-no-repeat bg-cover bg-bottom">
        <Banners />
        <Products />
      </div>
      <PreRequisitesDocument />
      <Testimonials />
    </div>
  );
};

export default Home;
