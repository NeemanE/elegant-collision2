import { useState } from "react";
import Modal from "../components/Modal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      {/* Hero Image Section */}
      <div
        className="hero h-[15vh] sm:h-[40vh] md:h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/logo.png')" }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
      </div>

      {/* Text and Button Section */}
      <div className="text-center py-10 text-white">
        <div className="max-w-md mx-auto">
          <p className="mb-5 text-xl">
            Exceptional Customer Service and Outstanding Auto Body Repairs.
          </p>
          <button className="btn btn-primary" onClick={toggleModal}>
            Contact Us
          </button>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </>
  );
};

export default Hero;
