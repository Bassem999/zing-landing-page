import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";

import { ReactComponent as Star } from "../assets/star.svg";
import { ReactComponent as QuoteUp } from "../assets/quote-up.svg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import customer from "../assets/customer.png";

export default () => {
  const customers = [
    {
      title: "Amazing service",
      desc: "Since the online marketplace can be a scary place, the presence of customer reviews on an online store helps establish authenticity, confidence, and trust among shoppers. ",
      name: "Wade Warren",
      position: "Doctor",
      image: customer,
    },
    {
      title: "Amazing service",
      desc: "Since the online marketplace can be a scary place, the presence of customer reviews on an online store helps establish authenticity, confidence, and trust among shoppers. ",
      name: "Wade Warren",
      position: "Doctor",
      image: customer,
    },
  ];
  return (
    <section className="py-20 bg-primary">
      <div className="container">
        <h3 className="text-white text-5xl lg:text-6xl font-bold mb-6">
          What do customers say...
        </h3>
        <div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: "#next",
              prevEl: "#prev",
              disabledClass:
                "bg-gray-400 hover:bg-gray-400 hover:border-gray-400 cursor-not-allowed",
            }}
            spaceBetween={100}
            className="py-8 px-10 lg:px-20"
          >
            {customers.map((customer, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard customer={customer} />
              </SwiperSlide>
            ))}
          </Swiper>
          <NavArrows />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ customer }) => {
  const { title, desc, name, position, image } = customer;
  return (
    <div className="md:flex md:space-x-16 lg:space-x-32 space-y-20 lg:space-y-0">
      <div className="relative">
        <img src={image} alt="user" className="rounded-[140px] w-full h-full" />
        <Star className="absolute -bottom-8 -left-4" />
      </div>
      <div className="md:w-2/3 flex flex-col space-y-8 lg:space-y-0 justify-evenly">
        <div>
          <QuoteUp />
          <h4 className="font-bold text-white text-4xl mt-2">{title}</h4>
        </div>
        <p className="text-gray-400 text-lg">{desc}</p>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-secondary capitalize">
            {name}
          </span>
          <span className="text-gray-400">{position}</span>
        </div>
      </div>
    </div>
  );
};

const NavArrows = () => {
  return (
    <div className="flex space-x-4 justify-end">
      <button
        id="prev"
        className="w-8 h-8 group duration-300 border-gray-400 hover:border-secondary hover:bg-secondary border-2 rounded-full flex items-center justify-center"
      >
        <FaChevronLeft className="text-gray-300 group-hover:text-white duration-300" />
      </button>
      <button
        id="next"
        className="w-8 h-8 group duration-300 border-gray-400 hover:border-secondary hover:bg-secondary border-2 rounded-full flex items-center justify-center"
      >
        <FaChevronRight className="text-gray-300 group-hover:text-white duration-300" />
      </button>
    </div>
  );
};
