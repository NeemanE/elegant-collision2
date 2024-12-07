import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="p-10 bg-neutral text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl text-red-500 font-bold text-center mb-8">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              <p className="text-lg leading-relaxed">
                Family-owned and operated since 2018, Elegant Collision, led by Kevin Khalil, 
                delivers outstanding service and exceptional results in auto body restoration. 
                Dedicated to dependable repairs, high-quality workmanship, and reliability, 
                we stand by our name and commitment to restoring all makes and models to their 
                pre-accident condition.
              </p>
              <p className="text-lg leading-relaxed mt-5">
                Serving the Houston area's auto body repair needs, we specialize in providing 
                top-tier services for cars, trucks, and SUVs. We understand that your vehicle 
                is a personal and important asset. Our professional staff and technicians are 
                dedicated to delivering peace of mind through superior restoration, exceptional 
                service, and customer satisfaction.
              </p>
              <p className="text-lg leading-relaxed mt-5">
                To further ensure your confidence, we offer a limited lifetime warranty on all 
                paint and body work performed. With Elegant Collision, you can trust that your 
                vehicle will be repaired to factory specifications, preserving its safety and 
                performance. No matter the brand or value of your car, our team guarantees quality 
                and precision in every repair.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="/images/about-us.jpg"
                alt="Elegant Collision Team"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>

          {/* Additional Highlight Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-5 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-red-500">Our Mission</h2>
              <p className="mt-3">
                Providing top-notch repairs with exceptional customer service to restore every vehicle to perfection.
              </p>
            </div>
            <div className="p-5 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-red-500">Our Promise</h2>
              <p className="mt-3">
                We stand behind our work with a limited lifetime warranty for peace of mind.
              </p>
            </div>
            <div className="p-5 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-red-500">Our Team</h2>
              <p className="mt-3">
                Experienced technicians dedicated to safety, precision, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
