import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default ({ product }) => {
  const { prodName, price, img } = product;
  return (
    <div className="relative px-6 pb-6 pt-32 bg-[#FFF8F0] group">
      <img
        src={img}
        alt={prodName}
        className="absolute lg:w-40 h-40 -top-20 group-hover:-top-16 left-1/2 -translate-x-1/2 flex justify-center duration-300"
      />
      <div className="flex justify-between">
        <div>
          <h4 className="text-2xl text-primary font-bold capitalize mb-4">
            {prodName}
          </h4>
          <span className="text-primary">${price}</span>
        </div>
        <a href="/" className="self-end">
          <HiOutlineArrowNarrowRight
            size={24}
            className="text-secondary hover:text-primary hover:translate-x-1 duration-300"
          />
        </a>
      </div>
    </div>
  );
};
