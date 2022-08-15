import prod5 from "../assets/prod-5.png";
import prod6 from "../assets/prod-6.png";
import prod7 from "../assets/prod-7.png";
import prod8 from "../assets/prod-8.png";

export default () => {
  return (
    <section className="container py-36 grid gap-y-20 lg:grid-cols-2">
      <div>
        <div className="flex space-x-6 justify-center">
          <div className="space-y-6 ">
            <img src={prod5} alt="" />
            <img src={prod6} alt="" />
          </div>
          <div className="space-y-6 lg:-translate-y-16">
            <img src={prod7} alt="" />
            <img src={prod8} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-10">
          <h3 className="text-primary text-6xl font-bold mb-6">Contact us</h3>
          <p className="text-gray-400 text-lg">
            Our team would love to hear from you!
          </p>
        </div>
        <form className="contact grid lg:grid-cols-2 gap-5 ">
          <input type="text" name="" id="" placeholder="First name" />
          <input type="text" name="" id="" placeholder="Last name" />
          <input type="email" name="" id="" placeholder="Email address" className="lg:col-span-2" />
          <textarea name="" id="" rows="5" className="lg:col-span-2" placeholder="Message"></textarea>
          <button role="submit" className="text-white bg-secondary p-5 hover:bg-primary duration-300 lg:col-span-2">Send message</button>
        </form>
      </div>
    </section>
  );
};
