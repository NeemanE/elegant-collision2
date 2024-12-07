const Hero = () => (
  <div
    className="hero min-h-screen"
    style={{ backgroundImage: "url('/images/background.jpg')" }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="text-center hero-content text-white">
      <div className="max-w-md">
        <p className="mb-5">
          Exceptional Customer Service and Outstanding Auto Body Repairs.
        </p>
        <button className="btn btn-primary">Contact Us</button>
      </div>
    </div>
  </div>
);

export default Hero;
