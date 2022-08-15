import Link from "../components/Link";
import { useState, useRef, useEffect } from "react";

export default () => {
  const [isOpen, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(!isOpen);
  }
  const handleClickOutside = () => {
    setOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside);
  const links = ["home", "about us", "products", "testimonials"];
  return (
    <header className="py-5 relative">
      <div className="container lg:flex items-center justify-between z-20">
        <a href="/">
          <h2 className="text-2xl text-primary font-bold">
            Zing<span className="text-secondary">.</span>
          </h2>
        </a>
        <nav
          ref={ref}
          className={`lg:flex items-center justify-between lg:w-2/3 -top-0 left-0 -translate-y-full lg:translate-y-0 z-10 bg-white shadow lg:shadow-none lg:h-auto  absolute lg:static py-10 px-6 lg:py-0 lg:p-0 w-full transition-all duration-500
        ${isOpen && "top-14 translate-y-0"}`}
        >
          <ul className="lg:flex items-center justify-center space-y-4 lg:space-y-0 lg:space-x-10 mb-8 lg:mb-0">
            {links.map((link, i) => (
              <li key={i}>
                <Link href={link == "home" ? "/" : `/${link}`} text={link} />
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-between lg:justify-center lg:space-x-10">
            <li>
              <a
                href="/contacy"
                className="text-primary hover:text-secondary duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/buy"
                className="bg-secondary hover:bg-primary px-5 py-2.5 text-white duration-300"
              >
                Buy Online
              </a>
            </li>
          </ul>
        </nav>
        <button
          onClick={toggleOpen}
          ref={ref}
          className="rounded-md p-3 z-20 bg-gray-100 space-y-1.5 lg:hidden absolute top-4 right-6"
        >
          <span
            className={`w-6 h-0.5 block bg-gray-600 transition-all duration-200 
          ${isOpen && "rotate-45 translate-y-2 "}`}
          ></span>
          <span
            className={`w-6 h-0.5 block bg-gray-600 transition-all duration-200 
          ${isOpen && "rotate-45 -translate-y-1 opacity-0"}`}
          ></span>
          <span
            className={`w-6 h-0.5 block bg-gray-600 transition-all duration-200 
          ${isOpen && "-rotate-45 -translate-y-2 "}`}
          ></span>
        </button>
      </div>
    </header>
  );
};
const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};
