const Hero = () => (
    <>
      {/* Hero Image Section */}
      <div
        className="hero h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/logo.png')" }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
      </div>
  
      {/* Text and Button Section */}
      <div className="text-center py-10 text-white">
        <div className="max-w-md mx-auto">
          <p className="mb-5 text-lg">
            Exceptional Customer Service and Outstanding Auto Body Repairs.
          </p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
    </>
  );
  
  export default Hero;
  