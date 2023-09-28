import { IProduct } from 'src/types/Product';

import { products } from './ProductsData';

const Products = () => {
  return (
    <div className="max-w-[1200px] mt-[40px] lg:mx-auto mx-[40px] grid lg:grid-cols-5 grid-cols-2 gap-[24px] p-[20px] pb-[40px] bg-[#ffffff] rounded-[16px] shadow-lg bg-[url('https://edufund.co.id/bg-simulation.8774b3cd9c45be7907c5.svg')] bg-no-repeat bg-contain bg-bottom">
      {products?.map((product: IProduct, index: number) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-[8px] p-[16px] hover:bg-[#eef6fd] rounded-[8px] cursor-pointer"
          >
            <img
              width={56}
              height={56}
              src={product?.img}
              alt={product?.title}
            />
            <p className="text-[1rem] text-[#0e2e4f] hover:text-[#0779e4]">
              {product?.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
