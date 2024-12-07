import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-3">I Car Certified</h2>
        <img
          src="/images/icertified.png"
          alt="I Car Certified Logo"
          className="mx-auto mb-5"
        />
         <img
          src="/images/ftype.avif"
          alt="Jaguar"
          className="mx-auto my-5 max-w-[300px] sm:max-w-[400px]"
        />
        <h2 className="text-4xl animate-flash leading-tight">
          JAGUAR REPAIR FACILITY
        </h2>
       
      </section>
      <Footer />
    </>
  );
}
