import Product from "../components/Product";

import stool from "../assets/Stool.png";
import teaTable from "../assets/Tea table.png";
import sofaLight from "../assets/Sofa white.png";
import sofaDark from "../assets/Sofa black.png";
import tableLamp from "../assets/Table lamp.png";
import chair from "../assets/Chair.png";
import bedTable from "../assets/Bedside table.png";
import chairLight from "../assets/Chair 2.png";

export default () => {
  const tabs = ["all", "chair", "table", "bed", "closet", "sofa", "cabinet"];
  const products = [
    {
      prodName: "Stool",
      price: 200,
      img: stool,
    },
    {
      prodName: "tea table",
      price: 150,
      img: teaTable,
    },
    {
      prodName: "sofa - light",
      price: 300,
      img: sofaLight,
    },
    {
      prodName: "sofa - dark",
      price: 300,
      img: sofaDark,
    },
    {
      prodName: "table lamp",
      price: 50,
      img: tableLamp,
    },
    {
      prodName: "chair",
      price: 200,
      img: chair,
    },
    {
      prodName: "bedside table",
      price: 100,
      img: bedTable,
    },
    {
      prodName: "light chair",
      price: 80,
      img: chairLight,
    },
  ];

  return (
    <section className="container py-20">
      <h3 className="text-primary text-6xl font-bold mb-10 text-center">
        Products
      </h3>
      <div className="flex justify-evenly lg:justify-center lg:space-x-10">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className="text-gray-500 lg:text-lg capitalize hover:text-secondary duration-300"
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-44 gap-x-8 mt-52">
        {products.map((prod, i) => (
          <Product product={prod} key={i} />
        ))}
      </div>
    </section>
  );
};
