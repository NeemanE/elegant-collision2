import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-3">I Car Certified</h2>{" "}
        {/* Reduced bottom margin */}
        <img
          src="/images/icertified.png"
          alt="I Car Certified Logo"
          className="mx-auto mb-5"
        />
        {/* Reduced bottom margin */}
        <h2 className="text-4xl text-red-500 leading-tight">
          Jaguar Repair Facility
        </h2>{" "}
        {/* Tighter line height */}
        <p className="leading-snug">
          Factory Certified Repairs for Jaguar Vehicles
        </p>{" "}
        {/* Tighter spacing */}
        <img
          src="/images/jaguarcert.jpg"
          alt="Jaguar Certified Logo"
          className="mx-auto my-5 max-w-[300px] sm:max-w-[400px]"
        />{" "}
        {/* Smaller max width */}
      </section>
      <Footer />
    </>
  );
}
