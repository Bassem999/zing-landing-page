import banner from "../assets/banner.png";
import { FiSearch } from "react-icons/fi";
import {ReactComponent as Arrow} from '../assets/Arrow.svg'

export default () => {
  return (
    <section className="py-20 lg:space-y-24">
      <div className="container relative">
        <h2 className="text-primary font-bold text-5xl md:text-6xl lg:text-8xl text-center mb-10">
          Amazing furniture for your home
        </h2>
        <p className="text-sm md:text-lg text-gray-500 text-center mb-6 lg:mb-0 lg:px-44">
          We think the chair is the most important piece of furniture in your
          home. Because if you love the chair you are sitting in chances are you
          will love the rest of the room.
        </p>
        <Arrow className="lg:absolute right-4 top-16 mx-auto"/>
      </div>
      <div className="relative">
        <form
          action=""
          className="lg:absolute bg-white inset-x-0 max-w-3xl shadow mx-auto py-6 lg:py-8 px-6 lg:px-12 -top-12 flex justify-between items-center "
        >
          <input
            type="text"
            placeholder="Search your product"
            className="outline-transparent text-lg flex-1"
          />
          <button role="submit">
            <FiSearch
              size={30}
              className="text-[#BDBDBD] hover:text-primary duration-300"
            />
          </button>
        </form>
        <img src={banner} alt="" />
      </div>
    </section>
  );
};
