import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
