import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Repairs() {
  const services = [
    {
      title: "Auto Glass Repair",
      description: "Convenient windshield auto glass repair and replacement services. We use only the highest quality auto glass and sealants to ensure your new windshield performs as expected. Certified technicians offer same-day or next-day service.",
    },
    {
      title: "Paintless Dent Repair",
      description: "Cost-effective solutions for minor dents and dings. Our paintless dent repair services save you money while maintaining the value of your vehicle.",
    },
    {
      title: "Lifetime Warranty",
      description: "Receive a written lifetime warranty for all services performed. We stand behind our work, guaranteeing free corrections for any defects in workmanship.",
    },
    {
      title: "Car Rentals",
      description: "While we do not have rental vehicles on-site, we gladly assist customers with rentals through our trusted partners to ensure your convenience.",
    },
    {
      title: "Towing Service",
      description: "Stranded? We offer 24-hour towing to our facility, working with trusted towing companies in the Houston area to better serve you.",
    },
    {
      title: "Frame and Mechanical Repairs",
      description: `Our high-end frame system ensures your vehicle's mechanical points are restored to factory specifications with computerized accuracy. 
      
      - Utmost quality equipment used 
      - Replacement crash repair parts 
      - Auto body paint and supplies 
      
      We also handle all mechanical repairs in-house, ensuring quality service and precision.`,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-4xl text-red-500 mb-8">Our Repair Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Card key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
