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

        {/* Scrolling Logo Section */}
        <div className="relative overflow-hidden">
          <div className="flex gap-10 animate-scroll whitespace-nowrap">
            {/* Logos */}
            <img
              src="/images/goldclass.jpg"
              alt="I Car Certified Logo"
              className="h-28 inline-block"
            />
            <img
              src="/images/usaa.png"
              alt="USAA Logo"
              className="h-28 inline-block"
            />
            <img
              src="/images/farmers.png"
              alt="Farmers Insurance Logo"
              className="h-28 inline-block"
            />
            <img
              src="/images/geico.png"
              alt="GEICO Logo"
              className="h-28 inline-block"
            />
            <img
              src="/images/state-farm.png"
              alt="State Farm Logo"
              className="h-28 inline-block"
            />
            <img
              src="/images/liberty-mutual.png"
              alt="Liberty Mutual Logo"
              className="h-28 inline-block"
            />
            <img
              src="/images/go-auto.webp"
              alt="Go Auto Insurance Logo"
              className="h-28 inline-block"
            />
            <img
              src="/images/ase.jpg"
              alt="ASE Logo"
              className="h-28 inline-block"
            />

            {/* Duplicated Logos for Seamless Scrolling */}
            <img
              src="/images/goldclass.jpg"
              alt="I Car Certified Logo"
              className="h-28 inline-block"
            />
            <img
              src="/images/usaa.png"
              alt="USAA Logo"
              className="h-28 inline-block"
            />
            <img
              src="/images/farmers.png"
              alt="Farmers Insurance Logo"
              className="h-28 inline-block"
            />
            <img
              src="/images/geico.png"
              alt="GEICO Logo"
              className="h-28 inline-block"
            />
            <img
              src="/images/state-farm.png"
              alt="State Farm Logo"
              className="h-28 inline-block"
            />
            <img
              src="/images/liberty-mutual.png"
              alt="Liberty Mutual Logo"
              className="h-28 inline-block"
            />
            <img
              src="/images/go-auto.webp"
              alt="Go Auto Insurance Logo"
              className="h-28 inline-block"
            />
            <img
              src="/images/ase.jpg"
              alt="ASE Logo"
              className="h-28 inline-block"
            />
          </div>
        </div>

        {/* Go Auto Insurance Section */}
        <p className="text-lg font-semibold text-red-500 mt-5">
          Direct Repair Facility for Go Auto Insurance
        </p>

        {/* Car Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          <img
            src="/images/ftype.avif"
            alt="Jaguar"
            className="mx-auto max-w-[300px] sm:max-w-[350px]"
          />
          <img
            src="/images/bmw.jpg"
            alt="BMW X7"
            className="mx-auto max-w-[300px] sm:max-w-[350px]"
          />
          <img
            src="/images/lexus.png"
            alt="LEXUS RS400"
            className="mx-auto max-w-[300px] sm:max-w-[350px]"
          />
          <img
            src="/images/mercedes.png"
            alt="MERCEDES S-CLASS"
            className="mx-auto max-w-[300px] sm:max-w-[350px]"
          />
        </div>

        {/* Jaguar Section */}
        <h2 className="text-4xl animate-flash leading-tight mt-5">
          JAGUAR REPAIR FACILITY
        </h2>

        {/* Life Time Warranty Section */}
        <h2 className="text-2xl mt-5 animate-flash-warranty">
          LIFE TIME WARRANTY ON PAINT & BODY
        </h2>

        {/* Credit Cards Accepted Section */}
        <div className="mt-5">
          <img
            src="/images/cards.png"
            alt="All Major Credit Cards Accepted"
            className="mx-auto max-w-[200px]"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
